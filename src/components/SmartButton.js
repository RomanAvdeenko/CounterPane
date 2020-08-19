import React from 'react'

const delayInterval = 100
let timer
let timerAllow = true      // Таймер разрешен 
let timerOff = true          // Таймер запущен           
let changeCount = 0         // Текущее число повторений
let changeMaxCount = 100    // Максимальное число повторений


let SmartButton = ({ clickHandler, label }) => {
    let buttonStyle = {
        fontSize: "1em",
        width: 50,
        height: 50,
        fontFamily: "sans-serif",
        color: "#333",
        fontWeight: "bold",
        lineHeight: "3px"
    }
    let mouseDownHandler = (e) => {
        //console.log(e.type)

        e.persist()
        clickHandler(e)

        timerAllow = true

        setTimeout(() => {
            //console.log(`timerAllow: ${timerAllow}, timerOff: ${timerOff}.`)

            if (timerAllow && timerOff) {
                changeCount = 0
                timerOff = false
                timer = setInterval(() => {
                    if (changeCount < changeMaxCount - 1) {
                        clickHandler(e)
                        changeCount++
                    }
                }, delayInterval, e)
            }
        }, delayInterval * 4)
    }

    let mouseUpHandler = (e) => {
        //console.log(e.type)

        timerAllow = false
        timerOff = true
        clearInterval(timer)
    }

    return (
        <button
            style={buttonStyle}
            onMouseDown={mouseDownHandler}
            onMouseUp={mouseUpHandler}
            onMouseOut={mouseUpHandler}
        >
            {label}
        </button>
    )
}


export default SmartButton
