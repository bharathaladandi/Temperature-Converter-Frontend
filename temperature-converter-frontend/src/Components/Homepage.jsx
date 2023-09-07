import React, { useState } from 'react'

export const Homepage = () => {
    const [temp, setTemp] = useState('');
    const [scale, setScale] = useState('');
    const [celsius, SetCelsius] = useState('');

    const handleChange = (e) => {
        setTemp(e.target.value)
        // console.log(e.target.value)
    }

    const handleSelct = (e) => {
        setScale(e.target.value)
        // console.log(e.target.value)
    }

    const handleCelsius = () => {
        const showCelsius = (temp * 9/5) + 32; 
        SetCelsius(`${temp}°C is equal to ${showCelsius}°C`)
        // console.log(`${temp}°C is equal to ${showCelsius}°C`);
    }
    return (
        <div>
            <div>
                <h1>Temperature Converter</h1>
            </div>
            <div>
                <input placeholder='Add Temperature' type="number" value={temp} onChange={handleChange} />
                <select value={scale} onChange={handleSelct}>
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                </select>
            </div>
            <div>
                <button onClick={handleCelsius}>Convert to Celsius</button>
                <button>Convert to Fahrenheit</button>
            </div>
            <h3>{celsius}</h3>
        </div>
    )
}
