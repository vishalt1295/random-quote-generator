import { createContext, useContext, useState, useMemo, useEffect } from "react";

const QuotesContext = createContext();

export default function QuoteStorage({ children }) {
  const [quotes, setQuote] = useState([]);
  const [tags, setTag] = useState([]);
  const [category, setCategory] = useState([]);

  const contextValues = useMemo(() => ({
    quotes,
    setQuote,
    fetchAPI,
    tags,
    setTag,
    setCategory,
    category,
  }));

  function fetchTags() {
    fetch("https://api.quotable.io/tags")
      .then((res) => res.json())
      .then((data) => {
        setTag(data);
        // console.log(tags);
      });
  }

  function fetchAPI() {
    fetch(`https://api.quotable.io/quotes/random?tags=${category}`)
      .then((response) => response.json())
      .then((data) => {
        setQuote(...data);
        // console.log(...quotes);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchAPI();
    fetchTags();
  }, []);

  return (
    <QuotesContext.Provider value={contextValues}>
      {children}
    </QuotesContext.Provider>
  );
}

export function useQuoteContext() {
  return useContext(QuotesContext);
}
