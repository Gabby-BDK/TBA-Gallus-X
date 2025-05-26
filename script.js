document.addEventListener('DOMContentLoaded', () => {
  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }

      // Close mobile menu if open
      const nav = document.getElementById('nav-links');
      if (nav.classList.contains('show')) {
        nav.classList.remove('show');
      }
    });
  });

  // Gallery scroll logic
  const slider = document.querySelector('.gallery-slider');
  const images = document.querySelectorAll('.gallery-slider img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let currentIndex = 0;

  function scrollToImage(index) {
    if (images[index]) {
      const sliderRect = slider.getBoundingClientRect();
      const imageRect = images[index].getBoundingClientRect();
      const offset = imageRect.left - sliderRect.left;
      slider.scrollBy({ left: offset, behavior: 'smooth' });
    }
  }

  if (nextBtn && prevBtn && images.length > 0) {
    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.target.blur();
      currentIndex = (currentIndex + 1) % images.length;
      scrollToImage(currentIndex);
    });

    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.target.blur();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      scrollToImage(currentIndex);
    });
  }
});
