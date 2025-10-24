const express = require('express');
const router = express.Router();
const Quote = require('../models/quote');

//ROUTE 1: Get all the Quotes using GET "api/quotes/fetchallquotes". No login required
router.get('/fetchallquotes', async (req, res) => {
    try{
        const quotes = await Quote.find({});
        res.json(quotes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//ROUTE 2: Add a new Quote using: POST "api/quotes/addquote". No login required
router.post('/addquote', async (req, res) => {
    const { text, author } = req.body;
    try {
        const newQuote = new Quote({ author, text });
        await newQuote.save();
        res.status(201).json(newQuote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//ROUTE 3: Get a random Quote using GET "api/quotes/randomquote". No login required
router.get('/randomquote',async(req,res)=>{
    try{
        const count=await Quote.countDocuments();
        const randomIndex=Math.floor(Math.random()*count);
        const randomQuote=await Quote.findOne().skip(randomIndex);
        res.json(randomQuote);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

//ROUTE 4: Delete a Quote using DELETE "api/quotes/deletequote/:id". No login required
router.delete('/deletequote/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedQuote = await Quote.findByIdAndDelete(id);
        if (!deletedQuote) {
            return res.status(404).json({ message: 'Quote not found' });
        }
        res.json({ message: 'Quote deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;