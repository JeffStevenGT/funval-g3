const links = document.querySelectorAll('.navbar a');
const container = document.querySelector('.main-container');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});