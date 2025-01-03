// Asegúrate que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtener todos los enlaces de navegación
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir el comportamiento por defecto
            
            // Obtener el ID de la sección desde el href
            const sectionId = this.getAttribute('href').replace('.html', '');
            const section = document.getElementById(sectionId);
            
            // Verificar si la sección existe antes de hacer scroll
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            } else {
                // Si no existe la sección, navegar normalmente
                window.location.href = this.href;
            }
        });
    });
});
// Validación del formulario
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nombre) {
    alert("Por favor, ingresa tu nombre.");
    return;
  }

  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    alert("Por favor, ingresa un correo válido.");
    return;
  }

  alert("Formulario enviado con éxito.");
  form.reset(); // Limpia el formulario
});

// Animación de aparición
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.5 };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, options);
  
    sections.forEach((section) => observer.observe(section));
  });
  // Botón "Ir al inicio"
const scrollTopButton = document.createElement("button");
scrollTopButton.textContent = "↑";
scrollTopButton.classList.add("scroll-to-top");
document.body.appendChild(scrollTopButton);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
