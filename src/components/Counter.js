import React from 'react'

const Counter = ({ display }) => {
    const style = {
        fontSize: 72,
        fontFamily: "sans-serif",
        color: "#333",
        fontWeight: "bold"
    }
    return (
        <div style={style}>{display}</div>
    )
}
export default Counter