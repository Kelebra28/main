document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  const dropdownLink = document.querySelector('.dropdown > a');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  // Menú hamburguesa
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    if (window.innerWidth <= 992) {
      dropdownMenu.classList.remove("show");
    }
  });

  // Dropdown solo en móvil
  if (dropdownLink && dropdownMenu) {
    dropdownLink.addEventListener("click", (e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        dropdownMenu.classList.toggle("show");
      }
    });
  }

  // Scroll suave + cerrar menú (excepto dropdown)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
      const isDropdown = this.closest('.dropdown');
      const target = document.querySelector(this.getAttribute("href"));
      if (!isDropdown && target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });

        if (window.innerWidth <= 992) {
          navLinks.classList.remove("show");
          dropdownMenu.classList.remove("show");
        }
      }
    });
  });

    // Cierra menú al hacer clic fuera en móviles
    document.addEventListener("click", (e) => {
      const isInsideMenu = navLinks.contains(e.target) || menuToggle.contains(e.target);
      if (!isInsideMenu && window.innerWidth <= 992) {
        navLinks.classList.remove("show");
        dropdownMenu.classList.remove("show");
      }
    });
  

  // FAQs (acordeón)
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      document.querySelectorAll('.faq-item').forEach(el => {
        if (el !== item) el.classList.remove('open');
      });
      item.classList.toggle('open');
    });
  });

  // Swiper (galería)
  new Swiper('.swiper', {
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

  // AOS (animaciones al hacer scroll)
  AOS.init({
    duration: 1000,
    once: true
  });
});
