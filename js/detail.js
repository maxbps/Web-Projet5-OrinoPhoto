$.ajax({
    url: 'http://localhost:3000/api/cameras/5be1ed3f1c9d44000030b061',
    type: 'GET',
    dataType: 'json',

    error: function(err) {
        console.log('Error ' + err)
    },

    success: function(response) {
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
                    </div>
                </div>
            </div>
        </div>`
    }
})
