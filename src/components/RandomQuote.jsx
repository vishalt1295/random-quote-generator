import { useQuoteContext } from "../context/quote.context";
import Category from "./Category";

export default function QuotesList() {
  const { quotes, fetchAPI } = useQuoteContext([]);

  return (
    <div className="container mx-auto mt-3">
      <div className="grid grid-cols-1 justify-items-center">
        <div className="w-48">
          <Category />
        </div>
        <div className="lg:w-3/5 rounded overflow-hidden shadow-lg p-5">
          <div className="text-center">
            <p className="font-medium text-lg mb-2">{quotes.content}</p>
            <cite className="text-gray-600">-{quotes.author}</cite>
          </div>
          <div className="px-6 pt-4 pb-2 text-center">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #{quotes.tags}
            </span>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => fetchAPI()}
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-700 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1"
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
