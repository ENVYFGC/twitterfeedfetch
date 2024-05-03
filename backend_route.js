
const express = require('express');
const { fetchTweets } = require('./backend');

const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// Route to fetch tweets and embedded videos
app.get('/tweets', async (req, res) => {
  try {
    // Fetch tweets from backend logic
    const tweets = await fetchTweets();

    // Respond with the fetched tweets
    res.json(tweets);
  } catch (error) {
    console.error('Error fetching tweets:', error);
    // Respond with an error status code and message
    res.status(500).json({ error: 'An error occurred while fetching tweets.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
