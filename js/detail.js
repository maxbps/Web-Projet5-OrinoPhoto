let params = (new URL(document.location)).searchParams
let id = params.get('produit')



// L'appel à la fonction peut se faire de cette manière là
request('http://localhost:3000/api/cameras/' + id)
    .then(function(response) {
        const detail = document.querySelector("#detail")
        const imageUrl = response.imageUrl
        const name = response.name
        const price = response.price
        let id = response.id
        detail.innerHTML +=

            `<div class="row">
            <div class="col-lg-12">
                <div class="card mt-4 my-3">
                    <img class="card-img-top img-fluid" src="${imageUrl}" alt="">
                    <div class="card-body">
                        <h3 class="card-title">${name}</h3>
                        <h4>${price/100 + "$"}</h4>
                        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
                        <a href="index.html" class="btn btn-outline-dark " role="button" aria-pressed="true">Buy It!</a>
                    </div>
                </div>
                
            </div>
        </div>`
    }).catch(function(error) {
        console.error(error)
            // Le serveur n'a pas répondu comme attendu
    })








$.ajax({
    url: 'http://localhost:3000/api/cameras/5be1ed3f1c9d44000030b061',
    type: 'GET',
    dataType: 'json',

    error: function(err) {
        console.log('Error ' + err)
    },

    success: function(response) {

    }
})