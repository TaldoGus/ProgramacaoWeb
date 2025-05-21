"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
function mostrarMenu() {
    const opcoes = ['Soma', 'Subtração', 'Multiplicação', 'Divisão', 'Potência', 'Raiz Quadrada', 'Sair'];
    const index = readline_sync_1.default.keyInSelect(opcoes, 'Selecione a operação:');
    return opcoes[index];
}
function calcular(op) {
    if (op === 'Sair') {
        console.log('Encerrando...');
        process.exit();
    }
    let a, b;
    switch (op) {
        case 'Raiz Quadrada':
            a = readline_sync_1.default.questionFloat('Digite o número: ');
            console.log(`Resultado: ${Math.sqrt(a)}`);
            break;
        default:
            a = readline_sync_1.default.questionFloat('Digite o primeiro número: ');
            b = readline_sync_1.default.questionFloat('Digite o segundo número: ');
            let resultado;
            switch (op) {
                case 'Soma':
                    resultado = a + b;
                    break;
                case 'Subtração':
                    resultado = a - b;
                    break;
                case 'Multiplicação':
                    resultado = a * b;
                    break;
                case 'Divisão':
                    resultado = a / b;
                    break;
                case 'Potência':
                    resultado = Math.pow(a, b);
                    break;
                default: return;
            }
            console.log(`Resultado: ${resultado}`);
    }
}
function main() {
    while (true) {
        const op = mostrarMenu();
        calcular(op);
        console.log('');
    }
}
main();
