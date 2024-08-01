const form = document.getElementById('formulario');

form.addEventListener('submit', function (evento) {
  evento.preventDefault(); // Impede o envio padrão do formulário

  // Obtendo os valores dos campos depois do evento
  const numeroA = document.getElementById('numeroA').value;
  const numeroB = document.getElementById('numeroB').value;

  if (validarCampo(numeroA, numeroB)) {
    alert('Formulário enviado com sucesso!');
  } else {
    alert('O número B deve ser maior que o número A');
  }
});

function validarCampo(numeroA, numeroB) {
  return numeroB > numeroA;
}

console.log(form);
