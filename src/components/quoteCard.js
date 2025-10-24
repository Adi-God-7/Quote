import React from "react";

const QuoteCard = ({ quote, onDelete, isRandom }) => {
  if (isRandom) {
    return (
      <div className="quote-card">
        <p className="quote-text">{quote.text}</p>
        <p className="author">- {quote.author}</p>
      </div>
    );
  }

  return (
    <div className="quote-card">
      <p className="quote-text">{quote.text}</p>
      <p className="author">- {quote.author}</p>
      <div className="actions">
        <button className="delete-btn" onClick={() => onDelete(quote._id)}>
          🗑️
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
