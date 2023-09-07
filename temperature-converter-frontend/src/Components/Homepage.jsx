import React, { useState } from 'react'

export const Homepage = () => {
    const [temp, setTemp] = useState("");
    const [scale, setScale] = useState('celsius');
    const [ans, setAns] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setTemp(e.target.value)
        // console.log(e.target.value)
    }

    const handleSelct = (e) => {
        setScale(e.target.value)
        // console.log(e.target.value)
    }

    const handleConversion = () => {
        if (temp === '') {
            setError("Field is Empty!! Please Enter Number");
            return
        }

        if (scale === 'celsius') {
            const showCelsius = (temp * 9 / 5) + 32;
            setAns(`${temp}°F is equal to ${showCelsius.toFixed(2)}°C`);
            // console.log(`${temp}°F is equal to ${showCelsius}°C`);
        }
        else {
            const showFahrenheit = (temp - 32) * 5 / 9;
            setAns(`${temp}°C is equal to ${showFahrenheit.toFixed(2)}°F`);
            // console.log(`${temp}°C is equal to ${showFahrenheit}°F`);
        }

        if (isNaN(temp)) {
            setError("Please Enter Valid Number");
            return
        }

        setError("")

    }


    return (
        <div>
            <div>
                <h1>Temperature Converter</h1>
            </div>
            <div>
                <input placeholder='Add Temperature' value={temp} onChange={handleChange} />
                <select value={scale} onChange={handleSelct} >
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                </select>
            </div>
            <div>
                <button disabled={scale === 'fahrenheit'} onClick={handleConversion}>Convert to Celsius</button>
                <button disabled={scale === 'celsius'} onClick={handleConversion}>Convert to Fahrenheit</button>
            </div>
            {error ? <h3>{error}</h3> :
                <div>
                    <h3>{ans}</h3>
                </div>
            }
        </div>
    )
}
