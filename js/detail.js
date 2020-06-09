let params = (new URL(document.location)).searchParams
let id = params.get('produit')
let indexDropDown = 0

function active(index) {
    for (var iter = 0;; iter++) {
        console.log(iter)
        const inactive = document.getElementById(iter)
        inactive.classList.remove('active')

        // a enlever!
        if (iter == indexDropDown) break
    }
    const active = document.getElementById(index)
    active.classList.add('active')
}

request('http://localhost:3000/api/cameras/' + id)
    .then(function(response) {
        const detail = document.querySelector("#detail")
        const imageUrl = response.imageUrl
        const name = response.name
        const price = response.price
        const lenses = response.lenses
        const id = response.id
        let alreadyBuy = false

        detail.innerHTML +=

            `<div class="row">
            <div class="col-lg-12">
                <div class="card mt-4 my-3">
                    <img class="card-img-top img-fluid" src="${imageUrl}" alt="">
                    <div class="card-body">
                        <h3 class="card-title">${name}</h3>
                        <h4>${price/100 + "$"}</h4>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
                        <div class="dropdown my-3">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            select a Lense
                            </button>
                            <div class="dropdown-menu" id="selector" aria-labelledby="dropdownMenuButton">
                            </div>
                        </div>
                        <a id="buyButton" class="btn btn-outline-dark my-3" role="button" aria-pressed="true">Buy It!</a>
                        </div>
                </div>
                <div id="success">
                </div>
                        
            </div>
        </div>`

        const selectLenses = document.querySelector("#selector")
        for (let i in lenses) {
            indexDropDown = i
            selectLenses.innerHTML += `<a onClick='active(${i})' id='${i}'class="dropdown-item">${lenses[i]}</a>`
        }

        const success = document.querySelector("#success")
        document.getElementById("buyButton").addEventListener('click', function() {
            if (alreadyBuy == false) {
                alreadyBuy = true
                success.innerHTML = `<div class="alert alert-success" role="alert">
            The product has been added to cart.<a href="cart.html" class="alert-link">You can access you cart now </a>!
            </div>`


                var myProduct = {
                    id: id,
                    name: name,
                    imageUrl: imageUrl,
                    price: price
                }
                var myProduct_json = JSON.stringify(myProduct);
                localStorage.product = myProduct_json


            } else {
                success.innerHTML = `<div class="alert alert-danger" role="alert">
                You have already buy this item.<a href="cart.html" class="alert-link">You can access you cart now </a>!
                </div>`
            }
        })

    }).catch(function(error) {
        console.error(error)
            // Le serveur n'a pas répondu comme attendu
    })