let weatherApiUrlyr = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=58.97&lon=5.73'



// async function fetchWeather() {

//     const response = await fetch(weatherApiUrlyr);
//     return await response.json();

// }



// fetchWeather().then((weatherArray) => {

//     console.log(weatherArray)
     
//     function getCardinalDirection(angle) {
//         const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
//         return directions[Math.round(angle / 45) % 8];
//     }
//         for (let weather of weatherArray.properties.timeseries) {

//             let container = document.getElementById("weather")
//             let date = new Date(weather.time);
//             console.log(date.toLocaleDateString('nb-NO', { weekday: 'long' }))

//         let html = `

//         <div class="box">
//             <div class="content">
//                 <h1>${date.toLocaleDateString('nb-NO', { weekday: 'long' })} klokken: ${date.getHours()}</h1>
//                 <h1>vind: ${weather.data.instant.details.wind_speed} ${getCardinalDirection(weather.data.instant.details.wind_from_direction)}</h1>
//                 <h1>Temperatur: ${weather.data.instant.details.air_temperature}°C </h1>
//             </div>
//             <div class="imageContainer">
//                 <img src="assets/weather_icons/${weather.data.next_1_hours.summary.symbol_code}.png"
//             </div>
//         </div>


//         `;        

//         container.insertAdjacentHTML("beforeend", html)

//         }
    
// })



async function fetchWeather() {

    const response = await fetch(weatherApiUrlyr);
    return await response.json();

}


fetchWeather().then((weatherArray) => {

    console.log(weatherArray)
     
    function getCardinalDirection(angle) {
        const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
        return directions[Math.round(angle / 45) % 8];
    }
        for (let i = 0; i < weatherArray.properties.timeseries; i++) {

            let container = document.getElementById("weather")
            let date = new Date(weather.time);
            console.log(date.toLocaleDateString('nb-NO', { weekday: 'long' }))

        let html = `

        <div class="box">
            <div class="content">
                <h1>${date.toLocaleDateString('nb-NO', { weekday: 'long' })} klokken: ${date.getHours()}</h1>
                <h1>vind: ${weather.data.instant.details.wind_speed} ${getCardinalDirection(weather.data.instant.details.wind_from_direction)}</h1>
                <h1>Temperatur: ${weather.data.instant.details.air_temperature}°C </h1>
            </div>
            <div class="imageContainer">
                <img src="assets/weather_icons/${weather.data.next_1_hours.summary.symbol_code}.png"
            </div>
        </div>


        `;        

        container.insertAdjacentHTML("beforeend", html)

        }
    
})