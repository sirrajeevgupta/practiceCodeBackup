import React, { useEffect } from 'react'

const Input = ({ minPrice, maxPrice, setMinPrice, setMaxPrice, rows, setRows, originalData }) => {

    useEffect(() => {
        let min = Number(minPrice)
        let max = Number(maxPrice)

        let filteredData = originalData.filter((item) => {
            if (minPrice !== "" && item.price < min) return false;
            if (maxPrice !== "" && item.price > max) return false;
            return true
        })

        setRows(filteredData)

    }, [minPrice, maxPrice, setRows])



    return (
        <div>
            <input type='number' placeholder='Enter Minimum Price' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            <input type='number' placeholder='Enter Maximum Price' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
        </div>
    )
}

export default Input