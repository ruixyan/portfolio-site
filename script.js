document.addEventListener('DOMContentLoaded', () => {
  // --- Smooth scroll for nav links ---
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) { // only smooth scroll for in-page anchors
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // --- About popup ---
  const aboutLink = document.querySelector('.nav a[href="about.html"]');
  const aboutPopup = document.getElementById('about-popup');
  const closeAbout = document.getElementById('close-about');

  if (aboutLink && aboutPopup && closeAbout) {
    aboutLink.addEventListener('click', e => {
      e.preventDefault();
      aboutPopup.classList.add('show');
    });

    closeAbout.addEventListener('click', () => {
      aboutPopup.classList.remove('show');
    });

    window.addEventListener('click', e => {
      if (e.target === aboutPopup) {
        aboutPopup.classList.remove('show');
      }
    });
  }

  // --- Scroll fade-in / reveal ---
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  const elements = document.querySelectorAll('.container, .work');
  elements.forEach(el => observer.observe(el));
});
