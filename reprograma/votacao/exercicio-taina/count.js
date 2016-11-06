function contaVoto() {
    var lista = document.getElementById("lista");
    var itemSelecionado = lista.options[lista.selectedIndex].text;

    if(itemSelecionado == 0){
        alert("Por favor, selecione uma atleta!");
    } else {
      var x = confirm("Você votou em " + itemSelecionado + ". Clique em OK para confirmar seu voto.");

      if(x == true){
        alert("Obrigado por votar conosco!");
        var atletaVotada = itemSelecionado;
        clickCounter(lista, itemSelecionado, atletaVotada);
      } else {
        alert("Por favor, vote novamente.");
      }
    }
};

function clickCounter(lista, itemSelecionado, atletaVotada) {

  if (typeof(Storage) !== "undefined") {

    if (localStorage.clickcount) {

      localStorage.clickcount = Number(localStorage.clickcount) + 1;

      var quantidadeVotos = Number(localStorage.getItem(atletaVotada)) + 1;
      localStorage.setItem(atletaVotada, quantidadeVotos);
      document.getElementById("result").innerHTML = "Já foram computados " + localStorage.clickcount + " votos até agora. "  + atletaVotada + " recebeu " + quantidadeVotos + " votos.";

    } else {
      localStorage.clickcount = 0;
      console.log("verificar porque da primeira vez que roda a função ele cai no else");
    };

  } else {
    document.getElementById("result").innerHTML = "Seu browser não tem a funcionalidade que precisamos para conseguir guardar os votos :( Tente o Chrome ou Firefox!";
  }
};
