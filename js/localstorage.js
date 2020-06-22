class Product {
    constructor(id, name, price, imageUrl) {
        this.id = id
        this.name = name
        this.price = price
        this.imageUrl = imageUrl

    }
}

function load() {
    let jsonObject = localStorage.getItem('products')
    products = JSON.parse(jsonObject)
    if (products == null) {
        empty()
    }
}

function addProduct(product) {
    load()
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))
}

function empty() {
    products = []
    localStorage.setItem('products', JSON.stringify(products))
}

function getProducts() {
    return products
}

function remove(index) {
    load()
    products.splice(index, 1)
    localStorage.setItem('products', JSON.stringify(products))
}