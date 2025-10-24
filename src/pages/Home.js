import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchRandomQuote } from "../services/api";
import QuoteCard from "../components/quoteCard";

function Home() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadRandomQuote = async () => {
    try {
      const data = await fetchRandomQuote();
      setQuote(data);
    } catch (error) {
      console.error("Error loading random quote:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleNewQuote = async () => {
    const quoteContainer = document.querySelector('.random-quote-wrapper');
    quoteContainer.classList.add('fade-out');
    
    // Wait for fade out
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setLoading(true);
    await loadRandomQuote();
    
    // Add fade-in class after new quote is loaded
    quoteContainer.classList.remove('fade-out');
    quoteContainer.classList.add('fade-in');
    
    // Remove fade-in class after animation
    setTimeout(() => {
      quoteContainer.classList.remove('fade-in');
    }, 300);
  };

  useEffect(() => {
    loadRandomQuote();
  }, []);

  return (
    <div className="home">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Quote of the Moment ✨
      </motion.h1>
      
      {loading ? (
        <div className="loading">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "linear-gradient(to right, var(--primary), var(--secondary))"
            }}
          />
        </div>
      ) : (
        <div className="random-quote-container">
          <div className="random-quote">
            {quote && (
              <>
                <div className="random-quote-wrapper">
                  <QuoteCard
                    quote={quote}
                    hideDelete={true}
                    isRandom={true}
                  />
                </div>
                <button
                  className="new-quote-btn"
                  onClick={handleNewQuote}
                >
                  Get Another Quote
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
