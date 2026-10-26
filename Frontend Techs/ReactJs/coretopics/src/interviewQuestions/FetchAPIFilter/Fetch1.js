import React, { useEffect, useState } from 'react'

const Fetch1 = () => {

    const [inputValue, setInputValue] = useState("")
    const [data, setData] = useState([])

    useEffect(() => {

        if (!inputValue.trim()) {
            setData([])
            return
        }

        let controller

        const timerId = setTimeout(async () => {

            controller = new AbortController()
            const signal = controller.signal

            try {

                const response = await fetch(`https://dummyjson.com/products/search?q=${inputValue}`, { signal });
                const result = await response.json();
                console.log(result)
                setData(result.products || [])
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.log(err)
                }
            }
        }, 300)

        return () => {
            clearTimeout(timerId)
            controller?.abort()
        }

    }, [inputValue])

    return (
        <div>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
            <br />
            <ul>
                {data && data.map(item => (
                    <li key={item.id}>{item.id} - {item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Fetch1