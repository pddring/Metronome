var metronome = {
    bpm: 60,
    currentBeat: 1,
    beats: 4,

    init: () => {
        metronome.elements = {
            bpm: document.getElementById("bpm"),
            slower: document.getElementById("btn-slower"),
            faster: document.getElementById("btn-faster"),
            startStop: document.getElementById("btn-start-stop")
        };

        metronome.elements.slower.onclick = (e) => {
            metronome.updateBPM(metronome.bpm - 5);
        }

        metronome.elements.faster.onclick = (e) => {
            metronome.updateBPM(metronome.bpm + 5);
        }

        metronome.elements.startStop.onclick = (e) => {
            metronome.playing = !metronome.playing;
            metronome.elements.startStop.value = metronome.value? "Stop" : "Start";

            if(metronome.playing) {
                var ms = 1000 / metronome.bpm;
                metronome.callback = setInterval(metronome.onTick, ms)
            } else {
                clearInterval(metronome.callback);
            }
        }
    },

    onTick: () => {
        metronome.currentBeat = (metronome.currentBeat + 1) % 
        console.log("Tick");
    },

    updateBPM: (bpm) => {
        metronome.bpm = bpm;
        metronome.elements.bpm.value = bpm;
    },

    playing: false
}

metronome.init();