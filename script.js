// Validação simples do formulário
document.getElementById('formContato').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const nome = e.target.querySelector('input[type="text"]').value;
  const email = e.target.querySelector('input[type="email"]').value;
  const mensagem = e.target.querySelector('textarea').value;

  if (nome && email && mensagem) {
    alert('Mensagem enviada com sucesso!');
    e.target.reset();
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});
