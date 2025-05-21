var historico = [];
function calcular() {
    var n1 = parseFloat(document.getElementById('numero1').value);
    var n2 = parseFloat(document.getElementById('numero2').value);
    var operacao = document.getElementById('operacao').value;
    var resultado = 0;
    var entrada = '';
    switch (operacao) {
        case 'soma':
            resultado = n1 + n2;
            entrada = "".concat(n1, " + ").concat(n2);
            break;
        case 'subtracao':
            resultado = n1 - n2;
            entrada = "".concat(n1, " - ").concat(n2);
            break;
        case 'multiplicacao':
            resultado = n1 * n2;
            entrada = "".concat(n1, " \u00D7 ").concat(n2);
            break;
        case 'divisao':
            if (n2 === 0) {
                resultado = 'Erro: divisão por zero';
            }
            else {
                resultado = n1 / n2;
            }
            entrada = "".concat(n1, " \u00F7 ").concat(n2);
            break;
        case 'potencia':
            resultado = Math.pow(n1, n2);
            entrada = "".concat(n1, "^").concat(n2);
            break;
        case 'raiz':
            if (n1 < 0) {
                resultado = 'Erro: raiz de número negativo';
            }
            else {
                resultado = Math.sqrt(n1);
            }
            entrada = "\u221A".concat(n1);
            break;
        default:
            resultado = 'Operação inválida';
            entrada = '';
    }
    // Atualiza resultado na tela
    var pResultado = document.getElementById('resultado');
    if (pResultado)
        pResultado.textContent = resultado.toString();
    // Atualiza histórico
    if (entrada) {
        historico.push({ tipo: operacao, entrada: entrada, resultado: resultado });
        atualizarHistorico();
    }
}
function atualizarHistorico() {
    var ul = document.getElementById('historico');
    if (ul) {
        ul.innerHTML = "";
        historico.forEach(function (op) {
            var li = document.createElement('li');
            li.textContent = "".concat(op.entrada, " = ").concat(op.resultado);
            ul.appendChild(li);
        });
    }
}
