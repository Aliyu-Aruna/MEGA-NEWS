
const userlocation = document.getElementById("userlocation"),
temperature = document.querySelector(".temperature"),
weathericon = document.querySelector(".weathericon"),
discription = document.querySelector(".discription"),
date = document.querySelector(".date"),
city = document.querySelector(".city"),
humidity = document.querySelector(".humidity"),
windspeed = document.querySelector(".windspeed")
// var now = new Date().Date()

let
WEATHER_API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?appid=a0cac7cf521f90ac59042e4698f8c930&q=`,
WEATHER_DATA_ENDPOINT = `https://api.openweathermap.org/data/2.5/onecall?appid=a0cac7cf521f90ac59042e4698f8c930&exclude=minutely&unit=metric&`

function findUserLocation(){
    fetch(WEATHER_API_ENDPOINT + userlocation.value)
    .then((response) => response.json())
    .then((data) => {
        if(data.cod != '' && data.cod != 200){
            alert(data.message)
            return
        }
        console.log(data)
        discription.innerHTML = "discription"+": "+data.weather[0].description
        city.innerHTML = data.name + "," + data.sys.country
        temperature.innerHTML =Math.round(data.main.temp - 273)+"&deg;C"
        weathericon.style.background = `url( https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png)`
        humidity.innerHTML = "Humidity: "+Math.round(data.main.humidity)+"%"
        windspeed.innerHTML ="Wind: "+Math.round(data.wind.speed)+"m/s"
        date.innerHTML = new Date().toDateString()
        
    })
}