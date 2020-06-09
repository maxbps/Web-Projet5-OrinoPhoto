function loadView() {
    let products = localStorage.getItem('products');
    let product_json = JSON.parse(products)

    const cartList = document.querySelector("#cartList")
    cartList.innerHTML = ''
    for (let i = 0; i < product_json.length; i++) {

        cartList.innerHTML +=
            `
<tr>
<th scope="row" class="border-0">
    <div class="p-2">
        <img src="${product_json[i].imageUrl}" alt="" width="70" class="img-fluid rounded shadow-sm">
        <div class="ml-3 d-inline-block align-middle">
            <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">${product_json[i].name}</a></h5>
        </div>
    </div>
</th>
<td class="border-0 align-middle"><strong>${product_json[i].price / 100 + "$"}</strong></td>
<td class="border-0 align-middle"><button type="button" class="btn btn-danger" onclick='remove(${i}); loadView()'>Remove</button></td>
</tr>
`
    }
}

loadView()