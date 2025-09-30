alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(`Número secreto: ${numeroSecreto}`)
let chute;
let tentativas = 0;


while (chute != numeroSecreto) {    
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (numeroSecreto == chute) {
        break;
    } else if (chute > numeroSecreto) {
        alert(`Você errou o número secreto é menor que ${chute}! Tente novamente`);
    }
    else if (chute < numeroSecreto){
        alert(`Você errou o número secreto é maior que ${chute}! Tente novamente`);
    }
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? 'tentativa' : 'tentativas'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com apenas ${tentativas} ${palavraTentativa} `);

