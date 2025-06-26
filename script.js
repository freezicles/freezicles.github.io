const cursor = document.getElementById('cursor');
let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;
const speed = 0.25;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function animate() {
  posX = lerp(posX, mouseX, speed);
  posY = lerp(posY, mouseY, speed);
  cursor.style.transform = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animate);
}

animate();
