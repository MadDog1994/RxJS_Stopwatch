import React, { useState, useEffect } from 'react';
import './stopwatch.css';

export default function Stopwatch(props) {
    const {time, autostart, step} = props;
    const [seconds, setSeconds] = useState(time)
    const [timeOn, setTimeOn] = useState(autostart)

    useEffect(() => {
        let interval = null;

        if (timeOn) {
            interval = setInterval(() => {
                setSeconds(prevTime => prevTime + step)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [seconds, timeOn])

    return (
        <div className={'container'}>
            <div className={'table'}>
                <span className={'num-style'}>{("0" + Math.floor((seconds / 3600000) % 60)).slice(-2)}:</span>
                <span className={'num-style'}>{("0" + Math.floor((seconds / 60000) % 60)).slice(-2)}:</span>
                <span className={'num-style'}>{("0" + Math.floor((seconds / 1000) % 60)).slice(-2)}</span>
            </div>
            <div className={'button-position'}>
            <button onClick={() => setTimeOn(true)}>Start</button>
            <button onClick={() => setSeconds(time) || setTimeOn(false)}>Stop</button>
            <button onClick={() => setSeconds(time) || setTimeOn(true)}>Reset</button>
            <button onDoubleClick={() => setTimeOn(false)}>Wait</button>
            </div>
        </div>
    )
};