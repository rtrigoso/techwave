const startButton = document.getElementById('start-button');
const synthContainer = document.getElementById('synthesizer');
const synthCanvas = document.getElementById('synthesizer-canvas');

startButton.addEventListener('click', () => {
    startButton.outerHTML = "";
    synthCanvas.style.display = 'block';
    synthCanvas.width = synthContainer.clientWidth;
});