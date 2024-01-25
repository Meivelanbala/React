import React, {Component} from "react"
class Statecomponent extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "KEC",
            course: "MERN"
        }
    }
    changestate = () =>{
        console.log("Kongu")
    }
    render() {
        return (
            <div>
                <h2>
                    This is State Component
                </h2>
                <h4>
                    Hello, {this.state.name}<br></br> This is {this.state.course}
                </h4>
                <h3>
                    I am Changing The State Of name {this.state.name} to {this.state.changestate}
                </h3>
                <button onClick={this.changestate}>
                    Click The Button To change
                </button>
            </div>
        )
    }
}
export default Statecomponent 