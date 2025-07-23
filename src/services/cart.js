

// casos de uso
// adicionar item
async function addItem(userCart, item){
    userCart.push(item);
};

// calcular total
async function calculateTotal(userCart) {
    let result = 0;
    for (const item of userCart) {
        result += await item.subtotal();
    }
    console.log("\nShopee Cart Total is:");
    console.log(`Total ${result}`);
}

//deletar item
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if(index !== -1){
        userCart.splice(index, 1);
    }
}

// remover um item - diminuir um item

async function removeItem(userCart, item) {

    const indexFound = userCart.findIndex((p) => p.name === item.name)
    console.log(`Index encontrado no ${indexFound}`);

    if (indexFound == -1){
        console.log("Item não encontrado");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    if (userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
        return;
    }

   /*  const deleteIndex = index - 1
    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
    } */
}

//exibir carrinho
async function displayCart(userCart){
    console.log("\nShopee Cart List:")
    for (const [index, item] of userCart.entries()) {
        console.log(`${index + 1}. ${item.name} - ${item.price} | ${item.quantity}x | Subtotal= ${await item.subtotal()}`);
    }
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}