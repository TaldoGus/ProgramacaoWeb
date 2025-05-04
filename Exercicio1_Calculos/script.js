function calcular(operacao) {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    let resultado = '';
  
    if (isNaN(n1) || isNaN(n2)) {
      resultado = 'Por favor, digite números válidos.';
    } else {
      switch (operacao) {
        case 'soma':
          resultado = n1 + n2;
          break;
        case 'subtrair':
          resultado = n1 - n2;
          break;
        case 'multiplicar':
          resultado = n1 * n2;
          break;
        case 'dividir':
          resultado = n2 !== 0 ? n1 / n2 : 'Não é possível dividir por zero.';
          break;
      }
    }
  
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
  }
  