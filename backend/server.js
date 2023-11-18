const express = require('express');
const app = express();
const request = require('request');
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    const cityName = req.query.city;
    console.log(cityName);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=1dd6b61179f29348310bf0e0e71f7cde&units=metric`;

    request(url, function (error, response, body) {
        if (error) {
            return res.send('Error making the request');
        }

        if (response && response.statusCode == 200) {
            const data = JSON.parse(body);
            const weather = {
                temperature: `${data.main.temp}°C`,
                description: data.weather[0].description,
                icon: data.weather[0].icon
            }
            res.send(weather);
        } else {
            res.send('Error fetching weather data');
        }
    });
});

app.listen(`https://tourmaline-liger-d8c932.netlify.app`, () => {
    console.log('Server listening!');
});


