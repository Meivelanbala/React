//Example for class component
//Login example

import React from "react";
import Classcomp from "./testcomponent";
class Login extends React.Component {
    render() {
        return (
            <center>
                <h1>
                    Login class component
                    <Classcomp/>
                </h1>
            </center>
        )
    }
}
export default Login 