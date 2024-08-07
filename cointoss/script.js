document.body.addEventListener('click', function() {
    // Get the sound element
    let sound = document.getElementById('coin-sound');
    
    // Stop and reset the sound
    sound.pause();
    sound.currentTime = 0;
    
    // Play the sound
    sound.play();

    // Randomly choose between heads and tails video
    let videos = ['heads.mp4', 'tails.mp4'];
    let randomVideo = videos[Math.floor(Math.random() * videos.length)];

    // Display the video
    let video = document.getElementById('coin-video');
    video.src = randomVideo;
    video.style.display = 'block';
    video.play();

    // Freeze the video 3 seconds before the end
    video.onloadedmetadata = function() {
        let freezeTime = video.duration - 1;
        video.addEventListener('timeupdate', function() {
            if (video.currentTime >= freezeTime) {
                video.pause();
                video.currentTime = freezeTime;
            }
        });
    };
});
