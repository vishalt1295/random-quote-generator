import "./App.css";
import Navbar from "./components/Navbar";
import QuoteStorage from "./context/quote.context";
import QuotesList from "./components/RandomQuote";

function App() {
  return (
    <>
      <Navbar />
      <QuotesList />
    </>
  );
}

function AppWrapper() {
  return (
    <QuoteStorage>
      <App />
    </QuoteStorage>
  );
}

export default AppWrapper;

// https://api.quotable.io/tags

//https://api.quotable.io/quotes/random?tags=technology
