class Command {
    constructor(user, ids) {
        this.contact = user
        this.products = ids
    }
}

class User {
    constructor(firstName, lastName, address, city, email) {
        this.firstName = firstName
        this.lastName = lastName
        this.address = address
        this.city = city
        this.email = email
    }
}

//source: https://www.grafikart.fr/tutoriels/promise-async-await-875
var get = function(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new window.XMLHttpRequest()
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                } else {
                    reject(xhr)
                }
            }
        }
        xhr.open('GET', url, true)
        xhr.send()
    })
}

var post = function(command) {
    return new Promise(function(resolve, reject) {
        var xhr = new window.XMLHttpRequest()
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 201) {
                    let response = JSON.parse(xhr.responseText)
                    localStorage.setItem("confirm", response.orderId)
                    isCommandEmpty()
                    resolve(JSON.parse(xhr.responseText))
                    window.location.href = "confirmation.html"
                } else {
                    reject(xhr)
                }
            }
        }
        xhr.open('POST', "http://localhost:3000/api/cameras/order", true)
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.send(JSON.stringify(command))
    })
}


var isCommandEmpty = function() {
    let products = localStorage.getItem('products')
    if (products.length === 2) {
        localStorage.setItem("isCommandEmpty", true)
    } else {
        localStorage.setItem("isCommandEmpty", false)
    }
}