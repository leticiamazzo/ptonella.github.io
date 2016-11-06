
function contaVoto(){
    var lista = document.getElementById("lista");   
    var itemSelecionado = lista.options[lista.selectedIndex].text;

    if(itemSelecionado == 0){
        alert("Por favor, selecione uma atleta!");
    } else{
        confereResultado();
    }    

    function confereResultado(){        
        var x = confirm("Você votou em " + itemSelecionado + ". Clique em OK para confirmar seu voto.");

        if(x == true){
            alert("Obrigado por votar conosco!");
        } else{
            alert("Por favor, vote novamente.");
        }
    }  
}

function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "Já foram computados " + localStorage.clickcount + " votos até agora.";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}
