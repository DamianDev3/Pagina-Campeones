/* ==========================================================
   JavaScript principal de Campeones
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Año actual en el footer
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Menú móvil
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuBtn && mobileMenu) {
    const toggleMenu = (open) => {
      const shouldOpen = open ?? mobileMenu.classList.contains("hidden");
      mobileMenu.classList.toggle("hidden", !shouldOpen);
      menuBtn.setAttribute("aria-expanded", String(shouldOpen));
      menuBtn.setAttribute("aria-label", shouldOpen ? "Cerrar menú" : "Abrir menú");
    };

    menuBtn.addEventListener("click", () => toggleMenu());

    // Cierra el menú al elegir un enlace
    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => toggleMenu(false));
    });

    // Cierra el menú al ampliar la ventana a escritorio
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        toggleMenu(false);
      }
    });
  }
});
