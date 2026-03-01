import React, { useEffect, useState } from 'react';

const BatteryStatus = () => {
    const [level, setLevel] = useState(0);

    useEffect(() => {
        const updateBatteryStatus = async () => {
            const battery = await navigator.getBattery();
            setLevel(battery.level * 100);
        };

        updateBatteryStatus();
        const intervalId = setInterval(updateBatteryStatus, 60000); // Update every minute

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    return (
        <div>
            <h2>Battery Status</h2>
            <p>{level}%</p>
            <div style={{
                width: '100%',
                background: '#e0e0e0',
                borderRadius: '5px',
                overflow: 'hidden'
            }}>
                <div style={{
                    height: '20px',
                    width: `${level}%`,
                    backgroundColor: level > 20 ? 'green' : 'red'
                }} />
            </div>
        </div>
    );
};

export default BatteryStatus;