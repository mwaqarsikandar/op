const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Route to fetch Reddit JSON data and display it
app.get('/', async (req, res) => {
  try {
    const redditData = await axios.get('https://www.reddit.com/r/all/comments/.json?limit=100');
    res.json(redditData.data);
  } catch (error) {
    console.error('Error fetching Reddit data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
