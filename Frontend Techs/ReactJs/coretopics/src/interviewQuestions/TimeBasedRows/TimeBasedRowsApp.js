import React, { useEffect, useState } from 'react'
import DataRow from './DataRow'

const TimeBasedRowsApp = () => {

    const [rows, setRows] = useState([])

    const handleAddRow = () => {

        const newRow = {
            id: crypto.randomUUID(),
            day: "",
            startDate: "",
            endDate: ""
        }
        setRows([...rows, newRow])
    }

    useEffect(() => {
        console.log(rows)
    }, [rows, setRows])

    return (
        <div>
            <button onClick={handleAddRow}>Add New</button>
            <button onClick={() => setRows([])}>Clear All</button>

            <ul>
                {rows && rows.map((row, index) => (
                    <li key={row.id}><DataRow index={index} row={row} rows={rows} setRows={setRows} /></li>
                ))}
            </ul>
        </div>
    )
}

export default TimeBasedRowsApp