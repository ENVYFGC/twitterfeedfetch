document.addEventListener('DOMContentLoaded', function() {
    // Fetch tweets and display them
    fetch('https://calm-gorge-64761-d1f02b4131b3.herokuapp.com/')
        .then(response => response.json())
        .then(tweets => {
            const tweetsContainer = document.getElementById('tweets');
            tweetsContainer.innerHTML = ''; // Clear existing tweets
            tweets.forEach(tweet => {
                const tweetElement = document.createElement('div');
                tweetElement.innerHTML = `
                    <p>${tweet.text}</p>
                    ${tweet.videoUrls.map(url => `<video controls src="${url}"></video>`).join('')}
                `;
                tweetsContainer.appendChild(tweetElement);
            });
        })
        .catch(error => console.error('Error fetching tweets:', error));

    // Load gallery images (assuming you have URLs)
    const galleryImages = [
        'https://i.imgur.com/xxxxx.jpg',
        'https://i.imgur.com/yyyyy.jpg'
    ];
    const galleryContainer = document.getElementById('gallery');
    galleryImages.forEach(imgSrc => {
        const img = document.createElement('img');
        img.src = imgSrc;
        galleryContainer.appendChild(img);
    });
});
