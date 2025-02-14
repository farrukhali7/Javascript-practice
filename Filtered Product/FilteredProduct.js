var products = [
        {
          "name": "iPhone 11",
          "price": "$999",
          "RAM": "128GB",
          "category": "phones"
        },
        {
          "name": "Samsung Galaxy S20",
          "price": "$799",
          "RAM": "128GB",
          "category": "phones"
        },
        {
          "name": "Google Pixel 5",
          "price": "$699",
          "RAM": "128GB",
          "category": "phones"
        },
        {
          "name": "OnePlus 8T",
          "price": "$749",
          "RAM": "256GB",
          "category": "phones"
        },
        {
          "name": "Xiaomi Mi 11",
          "price": "$749",
          "RAM": "128GB",
          "category": "phones"
        },
        {
          "name": "Sony Xperia 1 II",
          "price": "$1199",
          "RAM": "8GB",
          "category": "phones"
        },
        {
          "name": "Motorola Edge Plus",
          "price": "$999",
          "RAM": "256GB",
          "category": "phones"
        },
        {
          "name": "LG Velvet",
          "price": "$699",
          "RAM": "128GB",
          "category": "phones"
        },
        {
          "name": "Huawei P40 Pro",
          "price": "$999",
          "RAM": "8GB",
          "category": "phones"
        },
        {
          "name": "Asus ROG Phone 3",
          "price": "$999",
          "RAM": "512GB",
          "category": "phones"
        },
        {
          "name": "Bose QuietComfort 35 II",
          "price": "$299",
          "category": "headphones"
        },
        {
          "name": "Sony WH-1000XM4",
          "price": "$349",
          "category": "headphones"
        },
        {
          "name": "Apple AirPods Pro",
          "price": "$249",
          "category": "headphones"
        },
        {
          "name": "Sennheiser Momentum 3",
          "price": "$399",
          "category": "headphones"
        },
        {
          "name": "JBL Quantum 800",
          "price": "$199",
          "category": "headphones"
        },
        {
          "name": "Beats by Dre Solo Pro",
          "price": "$299",
          "category": "headphones"
        },
        {
          "name": "Bose Noise Cancelling Headphones 700",
          "price": "$379",
          "category": "headphones"
        },
        {
          "name": "AKG N700NC M2",
          "price": "$299",
          "category": "headphones"
        },
        {
          "name": "Jabra Elite 85h",
          "price": "$249",
          "category": "headphones"
        },
        {
          "name": "Marshall Monitor II ANC",
          "price": "$319",
          "category": "headphones"
        },
        {
          "name": "Apple MacBook Pro 16-inch",
          "price": "$2399",
          "RAM": "16GB",
          "category": "laptops"
        },
        {
          "name": "Dell XPS 13",
          "price": "$999",
          "RAM": "8GB",
          "category": "laptops"
        },
        {
          "name": "HP Spectre x360",
          "price": "$1299",
          "RAM": "16GB",
          "category": "laptops"
        },
        {
          "name": "Microsoft Surface Laptop 4",
          "price": "$1399",
          "RAM": "8GB",
          "category": "laptops"
        },
        {
          "name": "Asus ZenBook Flip 14",
          "price": "$999",
          "RAM": "16GB",
          "category": "laptops"
        },
        {
          "name": "Lenovo ThinkPad X1 Carbon",
          "price": "$1899",
          "RAM": "16GB",
          "category": "laptops"
        },
        {
          "name": "Razer Blade 15",
          "price": "$1999",
          "RAM": "16GB",
          "category": "laptops"
        },
        {
          "name": "Acer Swift 3",
          "price": "$649",
          "RAM": "8GB",
          "category": "laptops"
        },
        {
          "name": "LG Gram 17",
          "price": "$1699",
          "RAM": "16GB",
          "category": "laptops"
        },
        {
          "name": "Samsung Galaxy Book Pro 360",
          "price": "$1399",
          "RAM": "8GB",
          "category": "laptops"
        },
        {
          "name": "Apple iPad Pro 12.9-inch",
          "price": "$1099",
          "RAM": "8GB",
          "category": "tablets"
        },
        {
          "name": "Samsung Galaxy Tab S7+",
          "price": "$849",
          "RAM": "6GB",
          "category": "tablets"
        },
        {
          "name": "Microsoft Surface Pro 7",
          "price": "$749",
          "RAM": "8GB",
          "category": "tablets"
        },
        {
          "name": "Amazon Fire HD 10",
          "price": "$149",
          "RAM": "3GB",
          "category": "tablets"
        },
        {
          "name": "Lenovo Tab P11 Pro",
          "price": "$499",
          "RAM": "6GB",
          "category": "tablets"
        },
        {
          "name": "Huawei MatePad Pro",
          "price": "$549",
          "RAM": "6GB",
          "category": "tablets"
        },
        {
          "name": "Samsung Galaxy Tab A7",
          "price": "$229",
          "RAM": "3GB",
          "category": "tablets"
        },
        {
          "name": "Xiaomi Mi Pad 5",
          "price": "$399",
          "RAM": "6GB",
          "category": "tablets"
        },
        {
          "name": "Apple iPad 10.2-inch",
          "price": "$329",
          "RAM": "3GB",
          "category": "tablets"
        },
        {
          "name": "Microsoft Surface Go 2",
          "price": "$399",
          "RAM": "4GB",
          "category": "tablets"
        },
        {
            "name": "Apple Watch Series 7",
            "price": "$399",
            "category": "wearables",
            "features": "Always-on display, ECG, GPS"
          },
          {
            "name": "Samsung Galaxy Watch 4",
            "price": "$249",
            "category": "wearables",
            "features": "Body composition, GPS, Wear OS"
          },
          {
            "name": "Fitbit Sense",
            "price": "$299",
            "category": "wearables",
            "features": "Heart rate monitor, stress tracking, GPS"
          },
          {
            "name": "Garmin Venu 2",
            "price": "$399",
            "category": "wearables",
            "features": "Fitness tracking, GPS, AMOLED display"
          },
          {
            "name": "Amazfit GTR 3",
            "price": "$179",
            "category": "wearables",
            "features": "Blood oxygen monitoring, PAI tracking, AMOLED display"
          },
          {
            "name": "Huawei Watch GT 3",
            "price": "$229",
            "category": "wearables",
            "features": "GPS, Fitness tracking, heart rate monitor"
          },
          {
            "name": "Suunto 7",
            "price": "$399",
            "category": "wearables",
            "features": "Sports and fitness tracking, Wear OS, GPS"
          },
          {
            "name": "Withings Steel HR",
            "price": "$179",
            "category": "wearables",
            "features": "Hybrid, heart rate tracking, long battery life"
          },
          {
            "name": "Fossil Gen 6",
            "price": "$299",
            "category": "wearables",
            "features": "Heart rate sensor, Wear OS, AMOLED display"
          },
          {
            "name": "Skagen Falster 3",
            "price": "$295",
            "category": "wearables",
            "features": "Wear OS, fitness tracking, heart rate monitor"
          },
          {
            "name": "Canon EOS R5",
            "price": "$3899",
            "category": "cameras",
            "features": "45MP, 8K video, Full-frame"
          },
          {
            "name": "Sony Alpha a7 III",
            "price": "$1999",
            "category": "cameras",
            "features": "24MP, 4K video, Full-frame"
          },
          {
            "name": "Nikon Z6 II",
            "price": "$1999",
            "category": "cameras",
            "features": "24.5MP, 4K video, Full-frame"
          },
          {
            "name": "Fujifilm X-T4",
            "price": "$1699",
            "category": "cameras",
            "features": "26MP, 4K video, APS-C"
          },
          {
            "name": "Panasonic Lumix GH5",
            "price": "$1299",
            "category": "cameras",
            "features": "20MP, 4K video, Micro Four Thirds"
          },
          {
            "name": "Olympus OM-D E-M1 Mark III",
            "price": "$1799",
            "category": "cameras",
            "features": "20MP, 4K video, Micro Four Thirds"
          },
          {
            "name": "Sony Cyber-shot RX100 VII",
            "price": "$1199",
            "category": "cameras",
            "features": "20.1MP, 4K video, Compact"
          },
          {
            "name": "Canon EOS Rebel T7i",
            "price": "$649",
            "category": "cameras",
            "features": "24.2MP, Full HD video, DSLR"
          },
          {
            "name": "Nikon D7500",
            "price": "$849",
            "category": "cameras",
            "features": "20.9MP, 4K video, DSLR"
          },
          {
            "name": "GoPro HERO10 Black",
            "price": "$499",
            "category": "cameras",
            "features": "23MP, 5.3K video, Waterproof"
          },
            {
            "name": "Sony PlayStation 5",
            "price": "$499",
            "category": "gaming",
            "features": "4K gaming, 120Hz, SSD"
          },
          {
            "name": "Microsoft Xbox Series X",
            "price": "$499",
            "category": "gaming",
            "features": "4K gaming, 120Hz, SSD"
          },
          {
            "name": "Nintendo Switch OLED",
            "price": "$349",
            "category": "gaming",
            "features": "720p handheld, 1080p docked, OLED screen"
          },
          {
            "name": "Sony PlayStation 4 Pro",
            "price": "$399",
            "category": "gaming",
            "features": "4K gaming, HDR, 1TB storage"
          },
          {
            "name": "Microsoft Xbox Series S",
            "price": "$299",
            "category": "gaming",
            "features": "1440p, 120Hz, 512GB SSD"
          },
          {
            "name": "Nintendo Switch Lite",
            "price": "$199",
            "category": "gaming",
            "features": "Portable, 720p handheld"
          },
          {
            "name": "Oculus Quest 2",
            "price": "$299",
            "category": "gaming",
            "features": "VR headset, 64GB storage"
          },
          {
            "name": "PlayStation VR",
            "price": "$399",
            "category": "gaming",
            "features": "Virtual Reality, 1080p display"
          },
          {
            "name": "Razer Edge 5G",
            "price": "$699",
            "category": "gaming",
            "features": "5G, 6.8-inch screen, Snapdragon"
          },
          {
            "name": "Steam Deck",
            "price": "$399",
            "category": "gaming",
            "features": "Portable gaming PC, 7-inch touchscreen"
          }    
]
console.log(products);

var div = document.querySelector(".container");
function renderItem(arr){
    div.innerHTML = "";
        
    arr.map(item => {
        div.innerHTML += `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h2 class="card-title"><b>${item.name}</b></h2>               
    <h3>Category: ${item.category}</h3>
    <h4>Price: ${item.price}</h4>
  </div>
</div>
        `
        })
}
renderItem(products);

function filteredItem (items){
    const category = items.textContent.toLowerCase();
    const filterProduct = products.filter(item => item.category.toLowerCase() === category);  //item: Refers to each individual product object inside the products array.
    console.log(filterProduct);
    renderItem(filterProduct);   
}



