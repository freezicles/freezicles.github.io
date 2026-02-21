particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('particles.js loaded');
});

console.log(
  "%cFreezicles Labs",
  `
  font-size: 50px;
  display: inline-block;
  background: black;
  color: lime;
  `
);
console.log(
  "%cshh.. there's nothing here..",
  `
  font-size: 20px;
  display: inline-block;
  background: black;
  color: lime;

  `
);
const devUrl = window.location.origin + "/dev";

console.log(
  "%cfine here you go... " + devUrl,
  `
  font-size: 15px;
  color: red;
  `
);