
const Twitter = require('twitter-lite');

// Initialize Twitter client with API keys and tokens
const client = new Twitter({
  consumer_key: 'ddeHUsVR20hNiJInds6Sbi8o5',
  consumer_secret: '3yduibIZPW2dRVh1Jla1TRpqPHanEzBjtIHVf8UCXzGOxM9Lpj',
  access_token_key: '1520022119068880897-EUPFDYPGwUTkHKM7HStjJV0egrUtLa',
  access_token_secret: 'b2hXwVNJHUEkL5Zg6vHtN2W1Ld5YBGWkUffuMZLzOCBub'
});

// Fetch tweets from Twitter API
async function fetchTweets() {
  try {
    // Fetch tweets
    const tweets = await client.get('statuses/user_timeline', {
      screen_name: 'envy_fgc',
      count: 10, // Number of tweets to fetch
      tweet_mode: 'extended' // Ensure full_text is returned for tweets with more than 140 characters
    });

    // Process tweets
    const processedTweets = tweets.map(tweet => {
      // Extract video URLs from tweets
      const videoUrls = tweet.entities.urls.filter(url => url.expanded_url.includes('twitter.com') && url.expanded_url.includes('video'));

      return {
        id: tweet.id_str,
        text: tweet.full_text, // Full text of the tweet
        createdAt: tweet.created_at, // Date and time when the tweet was created
        videoUrls: videoUrls.map(url => url.expanded_url) // Array of video URLs in the tweet
      };
    });

    return processedTweets;
  } catch (error) {
    console.error('Error fetching tweets:', error);
    return [];
  }
}

module.exports = {
  fetchTweets
};
