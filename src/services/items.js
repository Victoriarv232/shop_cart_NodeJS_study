//CASOS DE USO ITENS

// criar item com subtotal calculado
async function createItem(name, price, quantity){
    return {
        name,
        price, 
        quantity,
        subtotal: async function() { return this.price * this.quantity; },
    };
}

export default createItem;