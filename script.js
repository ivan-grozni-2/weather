const form = document.getElementById('weatherform');
const enteredcity = document.getElementById('city');
const result = document.getElementById('weather-result');

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const city = enteredcity.value.trim();

    if(!city) return;

    const apikey = "61b3bdbf43fcd1051d3904aa80302b41";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    result.innerHTML='Loading...';

    try{
        const response = await fetch(url);

        if(!response.ok) throw new Error("City Not Found");

        const data = await response.json();

        const{name, main:{ temp, humidity}, weather} = data;
        const description = weather[0].description;

        result.innerHTML=`
            <h2> The Weather in ${city}</h2>
            <p><strong> Tempreaature</strong> ${temp} celcius<p>
            <p><strong> Weather</strong> ${description} <p>
            <p><strong> Humidity</strong> ${humidity} %<p>
            `;


    }catch{
        result.innerHTML=`<p style="color: red">${error.message}<p>`
    }

})