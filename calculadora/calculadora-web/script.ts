type Operacao = {
    tipo: string;
    entrada: string;
    resultado: number | string;
};

const historico: Operacao[] = [];

function calcular() {
    const n1 = parseFloat((document.getElementById('numero1') as HTMLInputElement).value);
    const n2 = parseFloat((document.getElementById('numero2') as HTMLInputElement).value);
    const operacao = (document.getElementById('operacao') as HTMLSelectElement).value;

    let resultado: number | string = 0;
    let entrada = '';

    switch (operacao) {
        case 'soma':
            resultado = n1 + n2;
            entrada = `${n1} + ${n2}`;
            break;
        case 'subtracao':
            resultado = n1 - n2;
            entrada = `${n1} - ${n2}`;
            break;
        case 'multiplicacao':
            resultado = n1 * n2;
            entrada = `${n1} × ${n2}`;
            break;
        case 'divisao':
            if (n2 === 0) {
                resultado = 'Erro: divisão por zero';
            } else {
                resultado = n1 / n2;
            }
            entrada = `${n1} ÷ ${n2}`;
            break;
        case 'potencia':
            resultado = Math.pow(n1, n2);
            entrada = `${n1}^${n2}`;
            break;
        case 'raiz':
            if (n1 < 0) {
                resultado = 'Erro: raiz de número negativo';
            } else {
                resultado = Math.sqrt(n1);
            }
            entrada = `√${n1}`;
            break;
        default:
            resultado = 'Operação inválida';
            entrada = '';
    }

    // Atualiza resultado na tela
    const pResultado = document.getElementById('resultado');
    if (pResultado) pResultado.textContent = resultado.toString();

    // Atualiza histórico
    if (entrada) {
        historico.push({ tipo: operacao, entrada, resultado });
        atualizarHistorico();
    }
}

function atualizarHistorico() {
    const ul = document.getElementById('historico');
    if (ul) {
        ul.innerHTML = "";
        historico.forEach(op => {
            const li = document.createElement('li');
            li.textContent = `${op.entrada} = ${op.resultado}`;
            ul.appendChild(li);
        });
    }
}