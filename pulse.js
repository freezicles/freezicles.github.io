window.pulse = {
  play: function(textId, audioId, minScale = 1, maxScale = 1.5) {
    const audio = document.getElementById(audioId);
    const textEl = document.getElementById(textId);
    if (!audio || !textEl) {
      console.warn("Audio or text element not found");
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

      // Map avg (0-255) to scale (minScale - maxScale)
      const norm = avg / 255;
      const scale = minScale + (maxScale - minScale) * norm;

      textEl.style.transform = `scale(${scale})`;
    }

    audio.onplay = () => {
      audioCtx.resume();
      animate();
    };
  }
};
