// window.addEventListener('scroll', function() {
//     var meuElemento = document.getElementById('divicaoAncoras');
//     var limite = document.getElementById('botoes').offsetHeight - meuElemento.offsetHeight;
  
//     if (window.pageYOffset > limite) {
//       meuElemento.style.position = 'absolute';
//       meuElemento.style.top = limite + 'px';
//     } else {
//       meuElemento.style.position = 'fixed';
//       meuElemento.style.top = '0px';
//     }
//   });

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