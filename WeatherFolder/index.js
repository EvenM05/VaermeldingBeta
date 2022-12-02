let weatherApiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=58.97&longitude=5.73&hourly=rain,temperature_2m'

async function fetchWeather() {
    const response = await fetch(weatherApiUrl);
    //console.log(response)
    return await response.json();
}

fetchWeather().then((weather) => {
    console.log(weather)

    let rain=weather.hourly.rain[167]
    let imageelement=document.getElementById('weatherImage')
    if(rain < 2)
        imageelement.src="assets/Clouds.png"
    else
        imageelement.src="assets/sun.jpg"

    document.getElementById('temp').innerHTML = weather.hourly.temperature_2m[167]
    document.getElementById('rain').innerHTML = weather.hourly.rain[167]
})