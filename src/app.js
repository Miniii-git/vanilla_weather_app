function changecity(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-input")
    let city = searchInput.value;
    sendCityForUrl(city)
}

function sendCityForUrl(city){
    let apiKey = "t734d4903fba534f1644oba02ab79462";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
    axios.get(apiUrl).then(getInformation);
}

function getInformation(response){
    console.log(response);
    let city = document.querySelector("#city");
    city.innerHTML = response.data.city

    let degree = document.querySelector("#degree");
    degree.innerHTML = Math.round(response.data.temperature.current);

    let humidity = document.querySelector("#humidity");
    humidity.innerHTML = response.data.temperature.humidity;

    let speed = document.querySelector("#speed");
    speed.innerHTML = response.data.wind.speed;

    let description = document.querySelector("#wea-description");
    description.innerHTML = response.data.condition.description;
    
    let image = document.querySelector("img")
    image.setAttribute("alt",response.data.condition.icon);
    image.setAttribute("src",response.data.condition.icon_url);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit",changecity);
