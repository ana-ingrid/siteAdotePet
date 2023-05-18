  // Selecione todos os links âncora na página
const linksAncora = document.querySelectorAll('a[href^="#"]');

// Adicione um evento de clique a cada link âncora
linksAncora.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Evite o comportamento padrão de clicar no link

    // Remova a classe "destaque" de todos os elementos de destino
    const elementosDestino = document.querySelectorAll(link.getAttribute('href'));
    elementosDestino.forEach(elemento => {
      elemento.classList.remove('destaque');
    });

    // Adicione a classe "destaque" ao elemento de destino
    const destino = document.querySelector(link.getAttribute('href'));
    destino.classList.add('destaque');
  });
});

document.getElementById("arquivo").onchange = function() {
  var fileName = this.value.split("\\").pop();
  document.getElementById("custom-file-label").innerHTML = fileName;
};