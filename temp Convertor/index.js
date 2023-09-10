document.getElementById('convertBtn').addEventListener('click', function () {
    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;
    
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature.");
        return;
    }
    
    if (unit === 'celsius') {
        result = {
            fahrenheit: (temperatureInput * 9/5) + 32,
            kelvin: temperatureInput + 273.15
        };
    } else if (unit === 'fahrenheit') {
        result = {
            celsius: (temperatureInput - 32) * 5/9,
            kelvin: (temperatureInput - 32) * 5/9 + 273.15
        };
    } else if (unit === 'kelvin') {
        result = {
            celsius: temperatureInput - 273.15,
            fahrenheit: (temperatureInput - 273.15) * 9/5 + 32
        };
    }
    
    
    document.getElementById('result').innerHTML = `Converted temperature: 
    ${result.celsius ? result.celsius.toFixed(2) + ' °C, ' : ''} 
    ${result.fahrenheit ? result.fahrenheit.toFixed(2) + ' °F, ' : ''} 
    ${result.kelvin ? result.kelvin.toFixed(2) + ' K' : ''}`;
});