
const linksAncora = document.querySelectorAll('a[href^="#"]');

linksAncora.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Evite o comportamento padrão de clicar no link

    const elementosDestino = document.querySelectorAll(link.getAttribute('href'));
    elementosDestino.forEach(elemento => {
      elemento.classList.remove('destaque');
    });
    const destino = document.querySelector(link.getAttribute('href'));
    destino.classList.add('destaque');
  });
});
