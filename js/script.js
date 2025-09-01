// Año dinámico para el footer
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Futuras interacciones
// - Copiar email al portapapeles
// - Animaciones on-scroll
// - Tracking simple de clicks (para la facu)
