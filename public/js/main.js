const sineBtn = document.querySelector('input[name="waveform"][value="sine"]');
const sawBtn = document.querySelector('input[name="waveform"][value="saw"]');
const squareBtn = document.querySelector('input[name="waveform"][value="square"]');
const selectDisplay = document.querySelector('.waveform > .selected');

const detuneKnob = document.querySelector('input[name="detune"]');
const lowpassKnob = document.querySelector('input[name="lowpassFrequency"]');
const highpassKnob = document.querySelector('input[name="highpassFrequency"]');
const attackKnob = document.querySelector('input[name="attack"]');

let wave = "sine";
const keyCodes = {
    83: 261.63, //C
    69: 277.18, //C#
    68: 293.66, //D
    82: 311.13, //D#
    70: 349.23, //E
    71: 392.00, //F
    89: 369.99, //F#
    72: 392.00, //G
    85: 415.30, //G#
    74: 440.00, //A
    73: 466.16, //A#
    75: 493.88  //AB
};

const selectWaveform = w => {
    selectDisplay.innerHTML = w;
    wave = w;
}

const verifyAudioCtx = () => {
    if (window.AudioContext || window.webkitAudioContext) {
        return;
    }

    alert('AudioContex and webkitAudioContext are not supported on this browser. Please try in another browser');
}

const createOscillator = freq => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    oscillator.type = wave;
    oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
    oscillator.detune.setValueAtTime(detuneKnob.value, audioCtx.currentTime);

    const lowpass = audioCtx.createBiquadFilter();
    lowpass.type = "lowpass";
    lowpass.frequency.setValueAtTime(lowpassKnob.value, audioCtx.currentTime);

    const highpass = audioCtx.createBiquadFilter();
    highpass.type = "highpass";
    highpass.frequency.setValueAtTime(highpassKnob.value, audioCtx.currentTime);

    const gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(1, audioCtx.currentTime);

    oscillator.connect(lowpass);
    lowpass.connect(highpass);
    highpass.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    return oscillator;
}

const handleStop = (o) => {
    o.stop();
}

const handleKeyDown = e => {
    if (Object.keys(keyCodes).indexOf(e.keyCode.toString()) < 0) {
        return;
    }

    const o = createOscillator(keyCodes[e.keyCode]);
    document.addEventListener('keyup', e => handleStop(o));
    o.start();
}

sineBtn.addEventListener('click', selectWaveform.bind(this, "sine"));
sawBtn.addEventListener('click', selectWaveform.bind(this, "sawtooth"));
squareBtn.addEventListener('click', selectWaveform.bind(this, "square"));
document.addEventListener('keydown', e => handleKeyDown(e));
verifyAudioCtx();