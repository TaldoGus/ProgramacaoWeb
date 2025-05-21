import readlineSync from 'readline-sync';

// Registro de histórico
type Operacao = 'Soma' | 'Subtração' | 'Multiplicação' | 'Divisão' | 'Potência' | 'Raiz Quadrada' | 'Histórico' | 'Sair';

interface Registro {
  data: string;
  operacao: string;
  resultado?: number;
}
const historico: Registro[] = [];

function mostrarMenu(): Operacao {
  const opcoes: Operacao[] = ['Soma', 'Subtração', 'Multiplicação', 'Divisão', 'Potência', 'Raiz Quadrada', 'Histórico', 'Sair'];
  const index = readlineSync.keyInSelect(opcoes, 'Selecione a operação:');
  return opcoes[index];
}

function calcular(op: Operacao) {
  if (op === 'Sair') {
    console.log('Encerrando...');
    process.exit();
  }

  if (op === 'Histórico') {
    console.log('--- Histórico de Operações ---');
    historico.forEach(r => {
      if (r.resultado !== undefined) {
        console.log(`${r.data} - ${r.operacao} = ${r.resultado}`);
      }
    });
    return;
  }

  let a: number, b: number;
  let resultado: number;
  switch (op) {
    case 'Raiz Quadrada':
      a = readlineSync.questionFloat('Digite o número: ');
      resultado = Math.sqrt(a);
      break;
    default:
      a = readlineSync.questionFloat('Digite o primeiro número: ');
      b = readlineSync.questionFloat('Digite o segundo número: ');
      switch (op) {
        case 'Soma': resultado = a + b; break;
        case 'Subtração': resultado = a - b; break;
        case 'Multiplicação': resultado = a * b; break;
        case 'Divisão': resultado = a / b; break;
        case 'Potência': resultado = Math.pow(a, b); break;
        default: return;
      }
  }

  console.log(`Resultado: ${resultado}`);
  historico.push({ data: new Date().toLocaleString(), operacao: op, resultado });
}

function main() {
  while (true) {
    const op = mostrarMenu();
    calcular(op);
    console.log('');
  }
}

main();