import React, { useReducer } from 'react'

const USeReducerExample = () => {

    const initialState = { count: 0 }
    const reducer = (state, action) => {

        switch (action.type) {
            case "Increment": {
                return {
                    count: state.count + 1
                }
            }
            default: {
                return state
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (<>
        <div>{state.count}</div>
        <div><button onClick={dispatch({ type: Increment })}>Increment</button></div >
    </>
    )
}

export default USeReducerExample