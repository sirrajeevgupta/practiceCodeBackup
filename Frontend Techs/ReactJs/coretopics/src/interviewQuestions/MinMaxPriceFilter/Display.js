import React from 'react'

const Display = ({ rows }) => {
    return (
        <div>
            <ul>
                {rows && rows.map((row, index) => (
                    <li key={index}>{row.firstName} {row.lastName} {row.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default Display