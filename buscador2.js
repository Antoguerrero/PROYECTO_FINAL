const busqueda = [
    { termino: "heroe", url: "tipos2.html#flush-collapseOne" },
    { termino: "héroe", url: "tipos2.html#flush-collapseOne" },
    { termino: "superheroe", url: "tipos2.html#flush-collapseOne" },
    { termino: "Batman", url: "tipos2.html#flush-collapseOne" },
    { termino: "miedo", url: "tipos2.html#flush-collapseOne" },
    { termino: "Asilo de Arkham", url: "tipos2.html#flush-collapseOne" },
    { termino: "aventuras", url: "tipos2.html#flush-collapseTwo" },
    { termino: "Indiana Jones", url: "tipos2.html#flush-collapseTwo" },
    { termino: "nazis", url: "tipos2.html#flush-collapseTwo" },
    { termino: "tesoro", url: "tipos2.html#flush-collapseTwo" },
    { termino: "incas", url: "tipos2.html#flush-collapseTwo" },
    { termino: "El tesoro de los incas", url: "tipos2.html#flush-collapseTwo" },
    { termino: "Jedis contra el imperio", url: "tipos2.html#flush-collapseThree" },
    { termino: "Star wars", url: "tipos2.html#flush-collapseThree" },
    { termino: "Luke", url: "tipos2.html#flush-collapseThree" },
    { termino: "risa", url: "tipos2.html#flush-collapseThree" },
    { termino: "accion", url: "tipos2.html#flush-collapseThree" },
    { termino: "intriga", url: "tipos2.html#flush-collapseFour" },
    { termino: "Sherlock holmes y el misterio del Big Ben", url: "tipos2.html#flush-collapseFour" },
    { termino: "investigacion", url: "tipos2.html#flush-collapseFour" },
    { termino: "investigar", url: "tipos2.html#flush-collapseFour" },
    { termino: "detective", url: "tipos2.html#flush-collapseFour" }
]

window.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form');
    
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const query = document.getElementById("pruebaDos").value.trim().toLowerCase();
  
      const resultado = busqueda.find(item =>
        item.termino.toLowerCase().includes(query)
      );
  
      if (resultado) {
        // Redirigir a la URL con el hash correspondiente
        window.location.href = resultado.url;
      } else {
        alert("No se encontró ningún resultado");
      }
    });
  
    // Detectar el cambio de hash en la URL (cuando llegas a una sección con #)
    window.addEventListener('hashchange', function () {
      const targetId = window.location.hash.substring(1);  // Obtener el hash de la URL (sin el '#')
  
      const targetAccordion = document.getElementById(targetId);
  
      // Verificar si existe
      if (targetAccordion) {
        // Usar la API de Bootstrap Collapse para abrir el acordeón
        const bsCollapse = new bootstrap.Collapse(targetAccordion, {
          toggle: true
        });
      }
    });
  
    // Si la página ya tiene un hash cuando se carga, procesarlo inmediatamente
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);  // Obtener el hash de la URL
      const targetAccordion = document.getElementById(targetId);
      if (targetAccordion) {
        // Usar el API de Bootstrap Collapse para abrir el acordeón
        const bsCollapse = new bootstrap.Collapse(targetAccordion, {
          toggle: true
        });
      }
    }
  });
  





