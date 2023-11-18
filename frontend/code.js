document.getElementById('weatherBtn').
    addEventListener('click', function() {
        var cityName = document.getElementById('cname').value;
        console.log(cityName);
        // const url = `http://localhost:3000`;
        const url = `https://comp1537-lab09-momona.onrender.com`;
        fetch(`${url}/?city=${cityName}`)
        .then(response =>  response.text())
        .then(data => {
            // This data is a dictionary form. How do I change?
            const parsedDta = JSON.parse(data);
            const resultDiv = document.getElementById('result');
            resultDiv.innerHTML = `
                <p>Temperature: ${parsedDta.temperature}</p>
                <p>Description: ${parsedDta.description}</p>
                <img src="https://openweathermap.org/img/wn/${parsedDta.icon}@2x.png"/>`
            
        })
        .catch(error => {
            console.log('Error: ', error);
            document.getElementById('result').innerHTML = 'Error fetching weather data';
        })
});
