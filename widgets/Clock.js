import React from 'react';

const Clock = () => {
  const [dateTime, setDateTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const analogClockStyle = {
    // Add your analog clock styles here
    width: '200px',
    height: '200px',
    border: '5px solid black',
    borderRadius: '50%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const digitalClockStyle = {
    fontSize: '2rem',
    margin: '20px 0'
  };

  return (
    <div>
      <div style={analogClockStyle}>
        {/* AnalogClock implementation goes here */}
        <div>{dateTime.toLocaleTimeString('en-US')}</div>
      </div>
      <div style={digitalClockStyle}>{dateTime.toISOString().substring(0, 19).replace('T', ' ')}</div>
    </div>
  );
};

export default Clock;