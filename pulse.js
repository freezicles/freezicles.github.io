window.pulse = {
  play: function(audioId, minScale = 1, maxScale = 1.5) {
    const audio = document.getElementById(audioId);
    if (!audio) {
      console.warn("Audio element not found");
      return;
    }

    const textElements = Array.from(document.querySelectorAll(".pulse"));
    if (textElements.length === 0) {
      console.warn("No elements with class 'pulse' found");
      return;
    }

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const analyser = audioCtx.createAnalyser();
    const source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    analyser.fftSize = 64;

    const freqData = new Uint8Array(analyser.frequencyBinCount);

    function animate() {
      requestAnimationFrame(animate);
      analyser.getByteFrequencyData(freqData);
      const avg = freqData.reduce((a, b) => a + b, 0) / freqData.length;
      const norm = avg / 255;
      const scale = minScale + (maxScale - minScale) * norm;

      textElements.forEach(el => {
        el.style.transform = `scale(${scale})`;
      });
    }

    audio.onplay = () => {
      audioCtx.resume();
      animate();
    };
  }
};
