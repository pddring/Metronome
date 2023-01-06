var metronome = {
    bpm: 60,
    currentBeat: 0,
    beats: 4,

    init: () => {
        metronome.elements = {
            bpm: document.getElementById("bpm"),
            slower: document.getElementById("btn-slower"),
            faster: document.getElementById("btn-faster"),
            startStop: document.getElementById("btn-start-stop"),
            counter: document.getElementById("counter"),
            indicator: document.getElementById("indicator")
        };

        metronome.elements.slower.onclick = (e) => {
            metronome.updateBPM(metronome.bpm - 5);
        }

        metronome.elements.faster.onclick = (e) => {
            metronome.updateBPM(metronome.bpm + 5);
        }

        metronome.elements.startStop.onclick = (e) => {
            metronome.playing = !metronome.playing;
            metronome.elements.startStop.value = metronome.playing? "Stop" : "Start";
            metronome.elements.counter.innerText = 1;
            metronome.updateBPM(metronome.bpm);
        }

        metronome.elements.bpm.onchange = metronome.updateBPM;
        metronome.elements.bpm.onblur = metronome.updateBPM;
        metronome.elements.bpm.onfocus = (e) => {
            e.currentTarget.select();
        }
    },

    onTick: () => {
        metronome.currentBeat = (metronome.currentBeat + 1) % metronome.beats;
        metronome.elements.counter.innerText = metronome.currentBeat + 1;
    },

    updateBPM: (bpm) => {
        if(isNaN(bpm)) {
            bpm = parseInt(metronome.elements.bpm.value);
        }

        metronome.bpm = bpm;
        metronome.elements.bpm.value = bpm;
        if(metronome.playing) {
            clearInterval(metronome.callback);
            var ms = 60000 / metronome.bpm;
            metronome.callback = setInterval(metronome.onTick, ms)
            metronome.elements.indicator.style.animationDuration=Math.floor(ms) + "ms";
            metronome.elements.indicator.style.animationName="swoosh";
        } else {
            clearInterval(metronome.callback);
            metronome.currentBeat = 0;
            metronome.elements.indicator.style.animationName="";
        }
    },

    playing: false
}

metronome.init();