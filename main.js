const api = {
    key: "246bd8f0b8522b697b733b5fc5503ce5",
    base: "http://api.openweathermap.org/data/2.5/"  
}


const searchBox = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn').addEventListener('click', function(){
    getResults(searchBox.value);
});

// keyboard-enter pressing: 
// searchBox.addEventListener('keypress', setQuery);

// function setQuery(event){
//     if (event.keyCode == 13) {
//         getResults(searchBox.value);

//         // console.log(searchbox.value);
//     }
// }

function getResults (query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=246bd8f0b8522b697b733b5fc5503ce5`)
    .then(res => res.json())
    .then(displayResults);
}

function displayResults (weather){
    // console.log(weather);

    // let city = document.querySelector('.location .city');
    // city.innerText = `${weather.name}, ${weather.sys.country}`;

    let city = document.getElementById('city-name');
  city.innerText = `${weather.name}, ${weather.sys.country}`; 

    let now = new Date();
    let date = document.getElementById('date');
    date.innerText = dateBuilder(now);

    let temp = document.getElementById('temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_el = document.getElementById('weather');
    weather_el.innerHTML = weather.weather[0].main;

    let hilow = document.getElementById('hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}
function dateBuilder (di) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[di.getDay()];
    let date = di.getDate();
    let month = months[di.getMonth()];
    let year = di.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}