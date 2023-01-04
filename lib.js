var metronome = {
    bpm: 60,

    init: () => {
        metronome.elements = {
            bpm: document.getElementById("bpm"),
            slower: document.getElementById("btn-slower"),
            faster: document.getElementById("btn-faster")
        };

        metronome.elements.slower.onclick = (e) => {
            metronome.updateBPM(metronome.bpm - 5);
        }

        metronome.elements.faster.onclick = (e) => {
            metronome.updateBPM(metronome.bpm + 5);
        }
    },

    updateBPM: (bpm) => {
        metronome.bpm = bpm;
        metronome.elements.bpm.value = bpm;
    },

    playing: false
}

metronome.init();