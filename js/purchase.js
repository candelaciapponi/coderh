class Purchase {
    constructor(shopping_cart) {
        this.cart = shopping_cart
    }

    get_total() {
        if (this.cart.length > 0) {
            return this.cart.reduce((accu, item)=> accu + item.precio, 0)
        } else {
            alert("error en alguno de los datos ingresados")
        } 

    }
}
