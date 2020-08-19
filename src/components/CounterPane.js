import React, { Component } from 'react'
import Counter from './Counter'
import SmartButton from './SmartButton'

class CounterPane extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    increase = e => {
        let currentCount = this.state.count

        if (e.ctrlKey) currentCount += 10
        else if (e.shiftKey) currentCount += 100
        else currentCount++

        this.setState({ count: currentCount })
    }

    decrease = e => {
        let currentCount = this.state.count

        if (e.ctrlKey) currentCount -= 10
        else if (e.shiftKey) currentCount -= 100
        else currentCount--

        this.setState({ count: currentCount })
    }

    render() {
        const divStyle = {
            padding: 50,
            margin: 1,
            backgroundColor: "#FFC53A",
            width: 250,
            //height: 120,
            borderRadius: 10,
            textAlign: "center"

        }
        return (
            <div style={divStyle}>
                <Counter display={this.state.count} />
                <SmartButton label="+" clickHandler={this.increase} />
                <SmartButton label="-" clickHandler={this.decrease} />
                <h5>Note: ctrl x10, shift x100</h5>
            </div>
        )
    }
}

export default CounterPane