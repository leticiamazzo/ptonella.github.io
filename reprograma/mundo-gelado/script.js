function validarFormulario() {

  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var pais = document.getElementById('pais').value;

  console.log(nome + email + pais);

  if (nome == "" || email == "" || pais == "") {
    alert("Por favor, preencha todos os campos do formulário.");
  } else {
    var answer = confirm(nome + ", você escolheu viajar para " + pais + ". Vamos entrar em contato pelo email " + email + " para passar os dados de pagamento. Confirma os dados?" )

    if (answer == true) {
      alert("Você receberá um email em breve! Obrigada por viajar conosco.");
    } else {
      alert("Por favor, preencha seus dados novamente.");
    };
  }

};
