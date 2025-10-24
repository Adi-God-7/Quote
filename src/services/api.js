const BASE_URL = "https://quote-backend-1f1p.onrender.com/api/quotes";

// GET all quotes
export const fetchAllQuotes = async () => {
  const res = await fetch(`${BASE_URL}/fetchallquotes`);
  if (!res.ok) throw new Error("Failed to fetch quotes");
  return res.json();
};

// POST a new quote
export const addQuote = async (text, author) => {
  const res = await fetch(`${BASE_URL}/addquote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, author }),
  });
  if (!res.ok) throw new Error("Failed to add quote");
  return res.json();
};

// GET a random quote
export const fetchRandomQuote = async () => {
  const res = await fetch(`${BASE_URL}/randomquote`);
  if (!res.ok) throw new Error("Failed to fetch random quote");
  return res.json();
};

// DELETE a quote by id
export const deleteQuote = async (id) => {
  const res = await fetch(`${BASE_URL}/deletequote/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete quote");
  return res.json();
};
