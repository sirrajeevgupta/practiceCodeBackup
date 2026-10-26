import React from 'react'
import Input from './Input'
import Button from './Button'
import Display from './Display'
import { useState } from 'react'

//? Create 2 inputs in input component which will take minimum price and maximum price and display component displays the results on the screen between that price range. In the button component, there should be reset button which will reset all data and display all the results.

const MinMaxPriceFilterApp = () => {

    const data = [
        {
            firstName: 'John ',
            lastName: 'Doe',
            price: 300,
        },
        {
            firstName: 'John2',
            lastName: 'Doe2',
            price: 450,
        },
        {
            firstName: 'John3',
            lastName: 'Doe3  ',
            price: 150,
        },
        {
            firstName: 'John4',
            lastName: 'Doe4',
            price: 600,
        },
        {
            firstName: 'John5',
            lastName: 'Doe5',
            price: 70,
        },
        {
            firstName: 'John6',
            lastName: 'Doe6',
            price: 1000,
        },
        {
            firstName: 'John7',
            lastName: 'Doe7',
            price: 500,
        },
    ];

    const [rows, setRows] = useState(data)
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")

    return (
        <div>
            <Input
                minPrice={minPrice}
                maxPrice={maxPrice}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
                rows={rows}
                setRows={setRows}
                originalData={data}
            />
            <br />
            <Button
                setRows={setRows}
                originalData={data}
                setMinPrice={setMinPrice}
                setMaxPrice={setMaxPrice}
            />
            <br /><br />
            <Display rows={rows} />
        </div>
    )
}

export default MinMaxPriceFilterApp