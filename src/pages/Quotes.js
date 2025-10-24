import React, { useEffect, useState } from "react";
import { fetchAllQuotes, deleteQuote } from "../services/api";
import QuoteCard from "../components/quoteCard";

function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadQuotes = async () => {
    try {
      const data = await fetchAllQuotes();
      setQuotes(data);
    } catch (error) {
      console.error("Error loading quotes:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteQuote(id);
      setQuotes(quotes.filter(q => q._id !== id));
    } catch (error) {
      console.error("Error deleting quote:", error);
    }
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  return (
    <div className="quotes">
      <h1>All Quotes 📚</h1>
      
      {loading ? (
        <div className="loading">
          <div className="loader" />
        </div>
      ) : (
        <div className="quotes-container">
          {quotes.map((quote) => (
            <QuoteCard
              key={quote._id}
              quote={quote}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Quotes;
            