//Fetch weather data from Open_Meteo API
 //API KEY: c45cda937a915186dbde4edff8475d14
document.getElementById("apiForm").addEventListener('submit',async function(e) {
    e.preventDefault(); //Prevent form submission
    const city = document.getElementById('city').value;

   
    const weatherAPIURL = `http://api.weatherstack.com/current?access_key=c45cda937a915186dbde4edff8475d14&query=${encodeURIComponent(city)}`;
try{
    const weatherResponse = await fetch(weatherAPIURL);
    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    if(weatherData.success === false){
        document.getElementById('weatherResult').textContent = 
        'Invalid city name. Please try again.';
        return;
    }
 //fetching temperature from the weather data
    const currentTemperature = weatherData.current.temperature;
    document.getElementById('weatherResult').textContent =
    `Current temperature in ${city} is ${currentTemperature}°C`;
//fetch local time from weather data
const currentDaraTime = weatherData.location.localtime;
const timeZoneId = weatherData.location.timezone_id;
document.getElementById('timeResult').textContent =
`Local time in ${city} is (${timeZoneId}) is ${currentDaraTime}`;  
}
catch(error){
   document.getElementById('weatherResult')
    .textContent = 'Error fetching weather/time data';
}

});