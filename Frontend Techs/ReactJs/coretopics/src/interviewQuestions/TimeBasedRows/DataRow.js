import React from 'react'

const DataRow = ({ index, row, rows, setRows }) => {

    const handleChange = (field, value) => {

        const newRows = rows.map((row, idx) => idx === index ? { ...row, [field]: value } : row)

        setRows(newRows)
    }

    const handleDeleteRow = () => {

        setRows([...rows.filter((row, idx) => idx !== index)])
    }

    return (
        <div>
            <select value={row.day} onChange={(e) => handleChange('day', e.target.value)}>
                <option id=''></option>
                <option id='Monday'>Monday</option>
                <option id='Tueday'>Tueday</option>
                <option id='Wednesday'>Wednesday</option>
                <option id='Thursday'>Thursday</option>
                <option id='Friday'>Friday</option>
                <option id='Saturday'>Saturday</option>
                <option id='Sunday'>Sunday</option>
            </select>
            <input value={row.startDate} type='time' onChange={(e) => handleChange('startDate', e.target.value)} />
            <input value={row.endDate} type='time' onChange={(e) => handleChange('endDate', e.target.value)} />
            <button onClick={handleDeleteRow}>x</button>
        </div>
    )
}

export default DataRow