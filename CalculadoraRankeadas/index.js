//Variáveis
let quantidadeDeVitorias = 100;
let quantidadeDeDerrotas = 2;
let saldoRankeadas = quantidadeDeVitorias - quantidadeDeDerrotas;
let nivelHeroi = "";
let Rankeadas = calcularNivel(quantidadeDeVitorias,quantidadeDeDerrotas);

function calcularNivel(quantidadeDeVitorias,quantidadeDeDerrotas){
    let saldoDasRankeadas = quantidadeDeVitorias - quantidadeDeDerrotas
    let nivelHeroi

    if (saldoDeVitorias<=10){
    nivelHeroi = "Ferro";
    }else if (saldoDasRankeadas>=11 && quantidadeDeVitorias<=20){
    nivelHeroi  = "Bronze";
    }else if (saldoDasRankeadas>=21 && quantidadeDeVitorias<=50){
        nivelHeroi = "Prata";
    }else if (saldoDasRankeadas>=51 && quantidadeDeVitorias<=80){
        nivelHeroi = "Ouro";
    }else if (saldoDasRankeadas>=81 && quantidadeDeVitorias<=90){
        nivelHeroi = "Diamante";
    }else if (saldoDasRankeadas>=91 && quantidadeDeVitorias<=100){
        nivelHeroi = "Lendário";
    }else if (saldoDasRankeadas>=101){
        nivelHeroi= "Imortal";
    }
}
nivelHeroi = calcularNivel(saldoRankeadas);
    console.log("O Herói tem um saldo de " + saldoDasRankeadas + " e está no nível de " +  nivelHeroi);