let total = 0;

function adicionarProduto() {
  const select = document.getElementById('produto');
  const valor = select.value.split('-');
  const nome = valor[0];
  const preco = parseFloat(valor[1]);

  const item = document.createElement('li');
  item.textContent = `${nome} - R$${preco}`;
  document.getElementById('carrinho').appendChild(item);

  total += preco;
  document.getElementById('total').textContent = `Total: R$${total}`;
}
