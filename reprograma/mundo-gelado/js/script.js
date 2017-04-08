function sendData() {

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var country = document.getElementById('country').value;

  console.log(name + email + country);

  if (name == "" || email == "" || country == "") {
    alert("Por favor, preencha todos os campos do formulário.");
  } else {
    var answer = confirm(name + ", você escolheu viajar para " + country + ". Vamos entrar em contato pelo email " + email + " para passar os dados de pagamento. Confirma os dados?" )

    if (answer == true) {
      alert("Você receberá um email em breve! Obrigada por viajar conosco.");
    } else {
      alert("Por favor, preencha seus dados novamente.");
    };
  }

};
