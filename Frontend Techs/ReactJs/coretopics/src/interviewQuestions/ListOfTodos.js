//? Coding questions to display list of todos, on click of button appers more todos and button should be invisible when it is 100

import { useState } from "react"
import Display from "./MinMaxPriceFilter/Display"

const ListOfTodos = () => {

    const [todos, setTodos] = useState([])
    const [value, setValue] = useState("")
    const [updatedTodoList, setUpdatedTodoList] = useState([])

    const handleAddTodo = () => {

        const newTodoItem = {
            id: todos.length + 1,
            value: ""
        }

        setTodos([...updatedTodoList, newTodoItem])
        setValue("")
    }

    const handleUpdateTodo = (id, value) => {
        setValue(value)
        setUpdatedTodoList([...todos.filter(item => item.id !== id), { id, value }])
    }

    return (
        <div>
            <label>To-Do List</label><button style={todos.length >= 100 ? { display: "none" } : { display: "inline-block" }} onClick={handleAddTodo}>Add a List Item</button>
            <ul>
                {todos.length && todos.map(item => (
                    <li key={item.id}>
                        <label>{item.id}</label>
                        {item.value ? <label>{item.value}</label> : <input value={value} onChange={(e) => handleUpdateTodo(item.id, e.target.value)} />}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListOfTodos