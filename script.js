const api = {
    key = "246bd8f0b8522b697b733b5fc5503ce5",
    base = "http://api.openweathermap.org/data/2.5/"
}

const searchBox = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function(){
    getResults(searchBox.value);
})

function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(displayResults);
}

function displayResults(data){
      console.log(data);
    let city = document.getElementById('city-name');
    city.innerText = `${data.name}, ${data.sys.country}`;
    
    
}