var container = document.querySelector(".container");

document.querySelector("button").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    const city = document.querySelector("#search").value.trim(); // Get the city entered by the user and remove any extra spaces
    document.querySelector("#search").value = ''; // Clear the input field after capturing the value

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=85d7be27e0624343a17192758252002&q=${city}&aqi=no`)
        .then(res => res.json())
        .then(json => {
            if (json && json.location) {
                checkWeather(json, city); 
                console.log(json);
            } else {
                alert("City not found! Please try again.");
            }
        })
        .catch(error => {
            console.error(error);
            alert("An error occurred while fetching the weather data.");
        });
});

function checkWeather(data, city) {
    // Check if the data is available and the city name matches
    if (data.location.name.toLowerCase() === city.toLowerCase()) {
        container.innerHTML += `
            <div class='bg-white border border-gray-800 shadow-lg ring ring-gray-700 ring-opacity-50 w-50 mx-auto mt-5 rounded-lg p-4 mb-5'>
                <h1 class='text-2xl'>${data.location.name}</h1>
                <p class='text-gray-500'>${data.location.localtime}, ${data.location.country}</p>
                <div class='mt-5 d-flex justify-content-between align-items-center mx-5 pb-4'>
                    <h2 class='text-4xl md:text-7xl lg:text-8xl'>${data.current.temp_c}°C</h2>
                    <img width="160px" src="https://${data.current.condition.icon}" alt='weatherImg' />
                </div>
                <h4>${data.current.condition.text}</h4>
            </div>
        `;
    } else {
        console.log("This city does not exist!");
    }
}
