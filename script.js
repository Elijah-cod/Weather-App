
const temp = document.querySelector(".temp")
const city = document.querySelector(".city")
const humidity = document.querySelector(".humidity")
const wind = document.querySelector(".wind")
const inputBox = document.getElementById('input-box')
const weatherIcon = document.querySelector(".weather-icon")





function searchWeather() {
    if (inputBox.value === ''){
        alert("No task has been entered")
    }else{
        const place = inputBox.value.toLowerCase()
        let api = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${place}&appid=a0f2cef45461928454a5cfea6850f66a`
         checkWeather(api)
    }
   
    inputBox.value = ''
}


async function checkWeather(apiUrl){
    const response = await fetch(apiUrl)
    var data = await response.json()

    switch(data.weather[0].main){
        case "Rain" :
            weatherIcon.src = "images/rain.png"
            break
        
        case "Clouds" :
            weatherIcon.src = "images/clouds.png"
            break
        
        case "Clear" :
            weatherIcon.src = "images/clear.png"
            break
        
        case "Light Rain" :    
            weatherIcon.src = "images/drizzle.png"
            break
        
        case "Snow" :
            weatherIcon.src = "images/snow.png"
            break
        
        case "Wind" :
            weatherIcon.src = "images/wind.png"
            break
        
        case "Mist" :
            weatherIcon.src = "images/mist.png"
            break

        default:
            weatherIcon.src = "images/clear.png"
    }


    city.textContent = data.name
    temp.textContent = `${Math.floor(data.main.temp)}°C `
    humidity.textContent = `${data.main.humidity}%`
    wind.textContent = `${data.wind.speed}km/hr`
}
