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
};
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
};
function handleRangeUpdate() {
    video[this.name] = this.value;
};
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressF.style.flexBasis = `${percent}%`;
};
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
// Event Listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', toggleIcon);
video.addEventListener('pause', toggleIcon);
video.addEventListener('timeupdate', handleProgress);

playButton.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);