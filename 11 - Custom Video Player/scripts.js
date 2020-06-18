// Get Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressF = player.querySelector('.progress__filled');
const playButton = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build Functions
const togglePlay = () => video.paused ? video.play() : video.pause();
function toggleIcon() {
    const icon = this.paused ? '►' : '❚ ❚';
    playButton.textContent = icon;
}
function skip() {
    
}
// Event Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', toggleIcon);
video.addEventListener('pause', toggleIcon);
playButton.addEventListener('click', togglePlay);