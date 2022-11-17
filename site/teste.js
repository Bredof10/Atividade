const readline = require('prompt-sync')();


function Sorteio() {
    let sorteado = parseInt(Math.random() * 1000);
    let numUsuario = 0;

    console.log("Adivinhe o Número")
    for (let tentativa = 1; tentativa <= 10; tentativa++) {
        console.log(`Tentativas ${tentativa}`);
        numUsuario = Number(readline());
        if (isNaN(numUsuario)) {
            throw new Error("Não pode letra seu burro, se não conseguir 70 e 70")
        }
        if (numUsuario == sorteado) {
            tentativa = 70;
            console.log("AHHHHHHHHH SEU CAGADOOOOO!!!")
        }
        if (numUsuario < sorteado) {
            console.log("Maior")          
        }
        if (numUsuario > sorteado) {
            console.log("Menor")          
        }
        if (tentativa == 10 && numUsuario !== sorteado) {
            console.log(`Perdeuu! a resposta certa era ${sorteado}`)
        }
    }
    
}




Sorteio()