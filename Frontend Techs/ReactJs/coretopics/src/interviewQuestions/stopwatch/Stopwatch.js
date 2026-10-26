import React, { useEffect, useRef, useState } from 'react'
// Stopwatch: Display hours, minutes, and seconds

const Stopwatch = () => {

    const [timer, setTimer] = useState(0)
    const timerId = useRef(null)

    const clearTimer = () => {
        if (timerId.current) {
            clearInterval(timerId.current)
            timerId.current = null
        }
    }

    const handleStart = () => {
        if (timerId.current) return

        timerId.current = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000)
    }

    const handleStop = () => {
        clearTimer()
    }

    const handleReset = () => {
        handleStop()
        setTimer(0)
    }

    const formatSeconds = (seconds) => {
        const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0")
        const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0")
        const secs = String(seconds % 60).padStart(2, "0")
        return `${hrs} : ${mins} : ${secs}`
    }

    useEffect(() => {

        return () => clearTimer()
    }, [])

    return (
        <>
            <div style={{
                alignItems: 'center', alignContent: "center", minWidth: "100%"
            }}>
                <label>{formatSeconds(timer)}</label>
            </div>
            <br />
            <div style={{ display: 'flex', gap: '2px' }}>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    )
}

export default Stopwatch