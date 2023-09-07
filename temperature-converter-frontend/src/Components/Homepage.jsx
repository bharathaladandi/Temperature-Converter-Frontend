import React, { useState } from 'react'

export const Homepage = () => {

    return (
        <div>
            <div>
                <h1>Todo List</h1>
            </div>
            <div>
                <input type="number" />
                <select >
                    <option value="celsius">Celsius</option>
                    <option value="fahrenheit">Fahrenheit</option>
                </select>
            </div>
        </div>
    )
}
