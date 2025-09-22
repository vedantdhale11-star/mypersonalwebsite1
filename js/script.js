var typed = new Typed('#typed-text', {
    strings: ["Web Developer", "Data Analyst", "AI Enthusiast"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

particlesJS("particles-js", {
  "particles": {
    "number":{"value":60},
    "color":{"value":"#66b0ff"},
    "shape":{"type":"circle"},
    "opacity":{"value":0.5},
    "size":{"value":3},
    "line_linked":{"enable":true,"distance":150,"color":"#66b0ff","opacity":0.3,"width":1},
    "move":{"enable":true,"speed":1.5,"out_mode":"out"}
  },
  "interactivity": {
    "detect_on":"canvas",
    "events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"}}
  },
  "retina_detect": true
});
