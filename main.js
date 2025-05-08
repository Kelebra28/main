// ===== MENÚ HAMBURGUESA =====
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      navLinks.classList.remove('show'); // Cierra menú al hacer click en móvil
    }
  });
});

// ===== SWIPER GALERÍA =====
const swiper = new Swiper('.swiper', {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});


// ===== AOS (ANIMACIONES AL SCROLL) =====
AOS.init({
  duration: 1000,
  once: true
});

// ===== FAQ ACORDEÓN =====
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');

  question.addEventListener('click', () => {
    const isOpen = answer.style.display === 'block';

    // Cerrar todos
    document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');

    // Alternar actual
    answer.style.display = isOpen ? 'none' : 'block';
  });
});

document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
  
      document.querySelectorAll('.faq-item').forEach(el => {
        if (el !== item) el.classList.remove('open');
      });
  
      item.classList.toggle('open');
    });
  });
  
  