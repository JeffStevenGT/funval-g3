// Configurar partículas
particlesJS("particles-js", {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 700 } },
    color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 5 },
      size: { value: 2, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });

// Inicializar Swiper
new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 250,
  grabCursor: true,
  loop: true,
  breakpoints: {
    991: {
      slidesPerView: 3
    }
  }
});

