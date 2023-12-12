const bars1 = new Howl({
  src: ['./bars.mp3'],
});
const bars3 = new Howl({
  src: ['./bars-3.mp3'],
});

const barsButton = document.getElementById('bars-button');
barsButton.addEventListener('click', () => {
  bars1.play();
});

const barsBarsBarsButton = document.getElementById('bars-bars-bars-button');
barsBarsBarsButton.addEventListener('click', () => {
  bars3.play();
});
