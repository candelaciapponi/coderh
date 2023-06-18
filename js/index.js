const cart = []

const items = [
    {codigo: 1, categoria: "libro", nombre: "Carnivorous Plants 📔 ", precio: 15 },
    {codigo: 2, categoria: "libro", nombre: "Botanicum Postcards I 📓 ", precio: 15 },
    {codigo: 3, categoria: "planta", nombre: "Carnivorous plant I 🌱 ", precio: 10 },
    {codigo: 4, categoria: "planta", nombre: "Carnivorous plant II 🌱 ", precio: 10 },
    {codigo: 5, categoria: "accesorio", nombre: "Maceta hecha de plantas 🪴 ", precio: 20},
    {codigo: 6, categoria: "acceosrio", nombre: "Maceta 🪴 ", precio: 30 }    
]

function look4item ( codigo ){
    let item_code = items.find((item)=> item.codigo === codigo) 
    return item_code       
}

function checkout() {
    const buy_trans = new Purchase(cart)
    alert("El valor de tu 🛒 compra es de $ " + buy_trans.get_total())
    console.log("Operacion finalizada")
}

function purchase(){
    let item_purchased_code = prompt("Ingrese el codigo del producto que quiere comprar")
    if (item_purchased_code > 6) {
        alert("dato ingresado incorrecto")
        console.log("intentelo nuevamente, escriba: Purchase()")
    }
    let item_purchased = look4item(parseInt(item_purchased_code))
    console.log(item_purchased)
    if (item_purchased != "undefined") {
        cart.push(item_purchased)
        alert(item_purchased.nombre + " se agrego al carrito")
        let answer = confirm("queres comprar otro producto?")
        if (answer === true) {
            purchase()
        }
        else {
            checkout()
        }
    } else {
        alert("algun dato ingresado es incorrecto. vuelva a intentar")       
    }
} 



