var container = document.querySelector(".container")

let products = [];   //global variable

fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>{
           products = json;
           renderItem(products)
            })
        .catch(error => {
            console.error(error);
        });
        
function renderItem(items) {
    container.innerHTML += ""
    items.forEach((products,index) => {
        container.innerHTML += 
        `<div class="card" style="width: 15rem;">
        <img src="${products.image}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${products.title}</h5>
        <p class="card-text">${products.description}</p>
        <button class="btn btn-primary" onclick="addToCart(${index})">Add to Cart</button>
        </div>
        </div>`
        console.log(products);
    }
)}

function filteredItem (button){
    container.innerHTML = "";
    const category = button.textContent.toLowerCase();
    const filterProduct = products.filter(item => item.category.toLowerCase() === category);  //item: Refers to each individual product object inside the products array.
    console.log(filterProduct);
    renderItem(filterProduct);   
}

function addToCart(index) {
    Swal.fire({
        title: "Added to Cart!",
        text: "Your item has been successfully added to your cart. Proceed to checkout when you're ready.",
        icon: "success",
        timer: 5000,
    });
}
        
