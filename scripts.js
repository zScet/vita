// A função updateCartCounter atualiza o contador do carrinho com o número fornecido
function updateCartCounter(count) {
    const cartCounter = document.querySelector('.cart-counter');
    cartCounter.textContent = count;
}

// Adiciona um ou mais itens ao carrinho
function addToCart() {
    // Simula adição de um item ao carrinho
    let currentCount = parseInt(document.querySelector('.cart-counter').textContent);
    updateCartCounter(currentCount + 1);
}

// Event listener para o clique no botão de adicionar ao carrinho
document.querySelector('.add-to-cart-button').addEventListener('click', addToCart);
