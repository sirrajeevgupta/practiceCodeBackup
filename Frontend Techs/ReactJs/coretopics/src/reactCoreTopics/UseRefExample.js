import { useState, useRef } from "react"


const UseRefExample = () => {

    const [randomInput, setRandomInput] = useState('')
    const render = useRef(0)
    const inputRef = useRef()

    const [seconds, setSeconds] = useState(0)
    const timerId = useRef()

    const inputhandleChange = (e) => {
        setRandomInput(e.target.value)
        render.current++
    }

    const handleInputFocus = () => {
        inputRef.current.focus()
    }

    const startTimer = () => {
        timerId.current = setInterval(() => {
            render.current++;
            setSeconds(prev => prev + 1)
        }, 1000)
    }
    const stopTimer = () => {
        clearInterval(timerId.current)
        timerId.current = 0

    }
    const resetTimer = () => {
        stopTimer();
        if (seconds) {
            render.current++
            setSeconds(0)
        }
    }

    return (
        <main className="app">
            <input ref={inputRef} style={{ 'font-size': '30px' }} type="text" placeholder="Random Input" onChange={inputhandleChange}></input>
            <br />
            <p>Renders: {render.current}</p>
            <br />
            <button type="button" onClick={handleInputFocus}>Focus</button>
            <br />

            <div className="flexRow">
                <button type="button" onClick={startTimer}>Start</button>
                <button type="button" onClick={stopTimer}>Stop</button>
                <button type="button" onClick={resetTimer}>Reset</button>
            </div>
            <br />

            <p>Seconds: {seconds}</p>
            <br /><br />
            <p>{randomInput}</p>
        </main>
    )
}

export default UseRefExample