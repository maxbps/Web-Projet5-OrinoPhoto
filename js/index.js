//source: https://stackoverflow.com/questions/50701606/jquery-ajax-get-json-returned-result

$.ajax({
    url: 'http://localhost:3000/api/cameras',
    type: 'GET',
    dataType: 'json',

    error: function(err) {
        console.log('Error ' + err)
    },

    success: function(response) {

        const produits = document.querySelector("#product")

        for (let i = 0; i < response.length; i++) {
            const imageUrl = response[i].imageUrl
            const name = response[i].name
            const price = response[i].price
            let id = response[i]._id
            produits.innerHTML +=
                `<div class="col-lg-6  mb-4">
<div class="card h-100">
    <a href="#"><img class="card-img-top" src="${imageUrl}" alt=""></a>
    <div class="card-body">
        <h4 class="card-title">
            <a href="detail.html?idProduct=${id}">${name}</a>
        </h4>
        <h5>${price/100 + "$"}</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
    </div>

</div>
</div>`
        }
    }
})