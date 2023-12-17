document.addEventListener('DOMContentLoaded', function () {
    var musicPlayer = document.getElementById('music-player');
    var musicSource = document.getElementById('music-source');
    var playButton = document.getElementById('play');
    var pauseButton = document.getElementById('pause');
    var skipBackButton = document.getElementById('skip-back');
    var skipForwardButton = document.getElementById('skip-forward');
    var stopButton = document.getElementById('stop');
    var albums = document.querySelectorAll('.album');

    // Function to set the music source
    function setMusicSource(source) {
        musicSource.src = source;
        musicPlayer.load(); // Important: load the new source
    }

    // Event listeners for album covers
    albums.forEach(function (album) {
        album.addEventListener('click', function () {
            var song = this.querySelector('img').getAttribute('data-music');
            setMusicSource(song);
            musicPlayer.play();
        });
    });

    // Play button functionality
    playButton.addEventListener('click', function () {
        musicPlayer.play();
    });

    // Pause button functionality
    pauseButton.addEventListener('click', function () {
        musicPlayer.pause();
    });

    // Skip back button functionality
    skipBackButton.addEventListener('click', function () {
        musicPlayer.currentTime -= 10; // Skip back by 10 seconds
    });

    // Skip forward button functionality
    skipForwardButton.addEventListener('click', function () {
        musicPlayer.currentTime += 10; // Skip forward by 10 seconds
    });

    // Stop button functionality
    stopButton.addEventListener('click', function () {
        musicPlayer.pause();
        musicPlayer.currentTime = 0; // Stop the music
    });
});

