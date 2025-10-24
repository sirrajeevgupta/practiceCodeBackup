import { useState, useEffect, useCallback, useMemo } from 'react'

const getArray = () => {
    for (let i = 0; i < 100000000; i++) {
        //do something
    }
    return ['Rajeev', 'Aman']
}

const UseMemoExample = () => {

    const [userNumber, setUserNumber] = useState('')
    const [randomInput, setRandomInput] = useState("")

    // useCallabck memoisez the function itself
    const fib = useCallback((n) => {
        if (n <= 1) return n;
        else return (fib(n - 1) + fib(n - 2))
    }, [])

    // useMemo memoisez the result of a function
    const fibNumber = useMemo(() => fib(userNumber), [userNumber, fib])

    const myArray = useMemo(() => getArray(), []); // returns an array which doesnt pass the referential equality test

    useEffect(() => {
        console.log("New Array")
    }, [myArray])

    return (
        <main className='app'>
            <label>Fibonnaci Sequence:</label>
            <input type='number' value={userNumber} onChange={(e) => setUserNumber(e.target.value)} placeholder='Position' />
            <br />
            <p>Number: {fibNumber || "--"}</p>
            <br /> <br />
            <label>Random Input:</label>
            <input type='text' value={randomInput} onChange={(e) => { setRandomInput(e.target.value) }} placeholder='Random Input' />

        </main>
    )
}

export default UseMemoExample