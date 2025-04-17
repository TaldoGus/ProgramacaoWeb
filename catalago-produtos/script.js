// Constantes
const PRODUCT_STORAGE_KEY = 'catalogo_produtos';
const API_DELAY = 1000; // Simulação de atraso de API

// Seletores DOM
const addProductForm = document.getElementById('addProductForm');
const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');
const productDescriptionInput = document.getElementById('productDescription');
const searchInput = document.getElementById('searchInput');
const productListContainer = document.getElementById('productListContainer');
const loadingIndicator = document.getElementById('loadingIndicator');

// Array para armazenar produtos
let products = [];

// Função principal
document.addEventListener('DOMContentLoaded', async () => {
    await loadProducts();
    renderProducts(products);
    
    // Event listeners
    addProductForm.addEventListener('submit', handleAddProduct);
    searchInput.addEventListener('input', handleSearch);
});

/**
 * Carrega produtos do localStorage ou de uma API simulada
 */
async function loadProducts() {
    loadingIndicator.classList.add('active');
    
    // Simula um atraso de API
    await new Promise(resolve => setTimeout(resolve, API_DELAY));
    
    // Tenta carregar do localStorage
    const storedProducts = localStorage.getItem(PRODUCT_STORAGE_KEY);
    
    if (storedProducts) {
        products = JSON.parse(storedProducts);
    } else {
        // Se não houver dados, simula uma chamada de API
        products = await fetchMockProducts();
        saveProductsToLocalStorage();
    }
    
    loadingIndicator.classList.remove('active');
}

/**
 * Simula uma chamada de API para obter produtos
 */
async function fetchMockProducts() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                {
                    id: Date.now(),
                    name: 'Produto Exemplo 1',
                    price: 99.99,
                    description: 'Descrição do produto exemplo 1'
                },
                {
                    id: Date.now() + 1,
                    name: 'Produto Exemplo 2',
                    price: 149.99,
                    description: 'Descrição do produto exemplo 2'
                }
            ]);
        }, API_DELAY);
    });
}

/**
 * Salva produtos no localStorage
 */
function saveProductsToLocalStorage() {
    localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(products));
}

/**
 * Manipulador do formulário de adicionar produto
 */
function handleAddProduct(e) {
    e.preventDefault();
    
    const newProduct = {
        id: Date.now(),
        name: productNameInput.value.trim(),
        price: parseFloat(productPriceInput.value),
        description: productDescriptionInput.value.trim()
    };
    
    // Adiciona o novo produto ao array
    products = [...products, newProduct];
    
    // Salva e renderiza
    saveProductsToLocalStorage();
    renderProducts(products);
    
    // Limpa o formulário
    addProductForm.reset();
}

/**
 * Manipulador da busca de produtos
 */
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm === '') {
        renderProducts(products);
        return;
    }
    
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.description.toLowerCase().includes(searchTerm)
    );
    
    renderProducts(filteredProducts);
}

/**
 * Renderiza a lista de produtos no DOM
 */
function renderProducts(productsToRender) {
    if (productsToRender.length === 0) {
        productListContainer.innerHTML = '<p>Nenhum produto encontrado.</p>';
        return;
    }
    
    productListContainer.innerHTML = productsToRender.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-price">R$ ${product.price.toFixed(2)}</p>
                <p>${product.description}</p>
            </div>
            <button class="delete-btn" data-id="${product.id}">Excluir</button>
        </div>
    `).join('');
    
    // Adiciona event listeners aos botões de excluir
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', handleDeleteProduct);
    });
}

/**
 * Manipulador para excluir um produto
 */
function handleDeleteProduct(e) {
    const productId = parseInt(e.target.dataset.id);
    
    // Filtra o produto a ser removido
    products = products.filter(product => product.id !== productId);
    
    // Salva e renderiza
    saveProductsToLocalStorage();
    renderProducts(products);
}

// Exportando funções para teste (se necessário)
export { loadProducts, fetchMockProducts, handleAddProduct, handleSearch, renderProducts, handleDeleteProduct };