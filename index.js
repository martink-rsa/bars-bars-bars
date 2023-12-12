let isTrackPlaying = false;

const bars1 = new Howl({
  src: ['./bars.mp3'],
});
const bars3 = new Howl({
  src: ['./bars-3.mp3'],
});
const track = new Howl({
  src: ['./track.mp3'],
  loop: true,
  volume: 0.6,
});

const barsButton = document.getElementById('bars-button');
barsButton.addEventListener('click', () => {
  bars1.play();
});

const barsBarsBarsButton = document.getElementById('bars-bars-bars-button');
barsBarsBarsButton.addEventListener('click', () => {
  bars3.play();
});

const trackButton = document.getElementById('track-button');
trackButton.addEventListener('click', () => {
  toggleTrack();
});

function toggleTrack() {
  if (!isTrackPlaying) {
    track.play();
    isTrackPlaying = true;
  } else {
    track.stop();
    isTrackPlaying = false;
  }
}
