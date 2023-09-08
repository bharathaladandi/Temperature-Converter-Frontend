import React, { useState } from 'react'
import './Style.css';


export const Homepage = () => {
    const [temp, setTemp] = useState("");
    const [scale, setScale] = useState('celsius');
    const [ans, setAns] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setTemp(e.target.value)
    }

    const handleSelct = (e) => {
        setScale(e.target.value)
    }

    const handleConversion = () => {
        if (temp === '') {
            setError("Field is Empty!! Please Enter Number");
            return
        }

        if (scale === 'celsius') {
            const showCelsius = (temp * 9 / 5) + 32;
            setAns(`${temp}°F is equal to ${showCelsius.toFixed(2)}°C`);
        }
        else {
            const showFahrenheit = (temp - 32) * 5 / 9;
            setAns(`${temp}°C is equal to ${showFahrenheit.toFixed(2)}°F`);
        }

        if (isNaN(temp)) {
            setError("Please Enter Valid Number");
            return
        }

        setError("")
    }

    return (
        <div className="tempeconverter">
            <div>
                <h1>Temperature Converter</h1>
            </div>
            <div className="container">
                <input className="tempeinput" placeholder='Add Temperature' value={temp} onChange={handleChange} />
                <select value={scale} onChange={handleSelct} className="scale-dropdown">
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                </select>
            </div>
            <div className="btncon">
                <button className={`convbtn ${scale === 'fahrenheit' ? 'disabled' : ''}`}
                    disabled={scale === 'fahrenheit'}
                    onClick={handleConversion}>Convert to Celsius</button>
                <button className={`convbtn ${scale === 'celsius' ? 'disabled' : ''}`}
                    disabled={scale === 'celsius'}
                    onClick={handleConversion}>Convert to Fahrenheit</button>
            </div>
            {error ? <h3 className="error">{error}</h3> :
                <div>
                    <h3 className="result">{ans}</h3>
                </div>
            }
        </div>
    )
}
