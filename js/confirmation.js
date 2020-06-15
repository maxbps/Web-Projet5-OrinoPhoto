const confirmation = document.querySelector("#confirmation")
let confirm = localStorage.getItem('confirm')
let isCommandEmptyBoolean = localStorage.getItem('isCommandEmpty');


if (isCommandEmptyBoolean === 'true') {
    confirmation.innerHTML = `<div class="alert alert-danger m-5" role="alert">
    Your cart is empty.<a href="index.html" class="alert-link">You can acces store here</a>!
    </div>`
} else {
    confirmation.innerHTML = `<div class="alert alert-success m-5" role="alert">
    The command numero ${confirm} is validate.<a href="index.html" class="alert-link">You can return to the store here</a>!
    </div>`
    empty()
}