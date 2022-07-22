//Primeira questão.

function primeiraQuestao() {
    
    let indice = 13;
    let soma = 0;
    let k = 0;

while(k < indice) {
    k = k + 1;
    soma = soma +k;
}

document.write("Resultado da primeira questão é: " + soma);
}

//Segunda questão: fibonacci


function segundaQuestao(n) {
    let t1 = 0;
    let t2 = 1;
    let t3 = 1;

    document.write('O resultado da segunda questão é: ')
    document.write('(')
    document.write(0 + ', ')
    document.write(1 + ', ')

    for(let i = 0; i < n; i++) {
        document.write(t3 + ", ");
        t1 = t2 + t3;
        t2 = t3;
        t3 = t1;
    }

    document.write('...)');
}


//Quarta questão:

function quartaQuestao() {
   
    let sp = 64836.43;
    let rj = 36678.66;
    let mg = 29229.88;
    let es = 27165.48;

    let total = 157910.45;

    calculosp = ((sp * 100) / total).toFixed(2);
    calculorj = ((rj * 100) / total).toFixed(2);
    calculomg = ((mg * 100) / total).toFixed(2);
    calculoes = ((es * 100) / total).toFixed(2);

    document.write("O valor total de vendas foi:" + total + "<br>");
    document.write("Percentual da filial de SP: " + calculosp + "%" + "<br>")
    document.write("Percentual da filial de RJ: " + calculorj + "%" + "<br>")
    document.write("Percentual da filial de MG: " + calculomg + "%" + "<br>")
    document.write("Percentual da filial de ES: " + calculoes + "%" + "<br>")
}



function quintaQuestao(str) {

    document.write("Palavra revertida: ");

    let string_reverse = '';

    for (let string of str) {
        string_reverse = string + string_reverse;
    }

    return string_reverse;

}



primeiraQuestao();

document.write('<br>');
document.write('<br>');

segundaQuestao(10);

document.write('<br>');
document.write('<br>');

quartaQuestao();

document.write('<br>');
document.write('<br>');

document.write(quintaQuestao('Paralelepípedo'));