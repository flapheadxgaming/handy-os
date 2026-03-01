// Weather.js

import React from 'react';

const Weather = ({ temperature, condition }) => {
    return (
        <div>
            <h1>Weather Display</h1>
            <p>Temperature: {temperature}°C</p>
            <p>Condition: {condition}</p>
        </div>
    );
};

export default Weather;