// Example: Smooth scroll for nav links
document.querySelectorAll('.site-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Optional: fade-in animations when scrolling into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });
  
  document.querySelectorAll('.project, .about, .contact').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
  
  