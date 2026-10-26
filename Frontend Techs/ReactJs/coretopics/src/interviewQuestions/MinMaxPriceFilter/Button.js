import React from 'react'

const Button = ({ setRows, originalData, setMinPrice, setMaxPrice }) => {

    const handleReset = () => {
        setRows(originalData)
        setMinPrice("")
        setMaxPrice("")
    }

    return (
        <div>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default Button