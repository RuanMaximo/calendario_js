const date = new Date();
const mes = date.getMonth();
const ano = date.getFullYear();
Calendario(mes,ano);

function buscar() {
    let mes = document.getElementById("mes").value;
    let ano = document.getElementById("ano").value;
    let caixa = document.getElementById("caixa");
    caixa.innerHTML = '';
    Calendario(mes,ano);
}

function Calendario(m,y) {
    let calendario = document.getElementById("caixa");
    let mes_texto = document.getElementById("mes_texto");
    let lista = [];
    const mes = parseInt(m);
    const ano = parseInt(y);
    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    const semanas = ["D","S","T","Q","Q","S","S"];
    const quantidade_dias = (ano % 4 == 0) ? new Map([[0,31],[1,29],[2,31],[3,30],[4,31],[5,30],[6,31],[7,31],[8,30],[9,31],[10,30],[11,31]]) : new Map([[0,31],[1,28],[2,31],[3,30],[4,31],[5,30],[6,31],[7,31],[8,30],[9,31],[10,30],[11,31]]);
    const date = new Date();
    const dia_atual = date.getDate();
    const dia_1 = new Date(ano,mes,1);
    const dia_semana = dia_1.getDay();
    const total_dias = quantidade_dias.get(mes);

    mes_texto.innerHTML = `${meses[mes]} ${ano}`;

    semanas.forEach(element => {
        caixa.innerHTML += `<div class='ctn semanas'>${element}</div>`;
    });

    let matematico;

    if (dia_semana > 1) {
        if (meses[mes] == 'Janeiro') {
            matematico = 31 - dia_semana +1;
        } else {
            matematico = (quantidade_dias.get(mes-1) - (dia_semana) +1);
        }
    } else {
       matematico = quantidade_dias.get(mes-1);
    }
    
    // matematico = (dia_semana > 1) ? (quantidade_dias.get(mes-1) - (dia_semana) +1) : (quantidade_dias.get(mes-1));
    // desse jeito não resolve o problema de janeiro por não "existir" um mês anterior na varivel map.

    for (let i = 1; i <= dia_semana; i ++) {
        caixa.innerHTML += `<div class='ctn ctn-gray'>${matematico}</div>`;
        matematico ++;
        lista.push(1);
    }

    for (let i = 1; i < total_dias +1; i ++) {
        const d =  date.getDate();
        const m = date.getMonth();
        const y = date.getFullYear();
        const date1 = new Date(ano,mes,i,0,0);
        const date2 = new Date(y,m,d,0,0);
        const dia = new Date(ano,mes,i).getDay();

        if (![0,6].includes(dia)) {
            if (date1.getTime() === date2.getTime()) {
                caixa.innerHTML += `<div class='ctn dia-atual'>${i}</div>`;
                lista.push(1);
            } else {
                caixa.innerHTML += `<div class='ctn ctn-blue'>${i}</div>`;
                lista.push(1);
            }
        }
        else {
            if (date1.getTime() === date2.getTime()) {
                caixa.innerHTML += `<div class='ctn ctn-redbold'>${i}</div>`;
                lista.push(1);
            } else {
                caixa.innerHTML += `<div class='ctn ctn-red'>${i}</div>`;
                lista.push(1);
            }
        }
    }

    for (let i = 1;lista.length < 42; i ++) {
        caixa.innerHTML += `<div class='ctn ctn-gray'>${i}</div>`;
        lista.push(1);
    }
}