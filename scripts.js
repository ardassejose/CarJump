const carro = document.getElementById("carro");
const obstaculo = document.getElementById("obstaculo")

// FUnção pular

function pular() {
    if (carro.classList != "pula"){

        carro.classList.add("pula");

        setTimeout(function(){
            carro.classList.remove("pula");
        }, 400)


    }
}

// evento do teclado

document.addEventListener("keypress", function(event){
    pular();
});

let espaco = setInterval (function(){

    let carroTop = parseInt(window.getComputedStyle(carro).getPropertyValue("top"));

    let obstaculoEsquerda = parseInt (window.getComputedStyle(obstaculo).getPropertyValue("left"));

    //bate ou não

    if (obstaculoEsquerda < 60 && obstaculoEsquerda > 0 && carroTop >= 100) {
        alert(`Fim de Jogo!`)
        document.location.reload(true);
    }
},10)