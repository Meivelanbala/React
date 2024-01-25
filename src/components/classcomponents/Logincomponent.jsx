//Example for class component
//Login example

import React from "react";
import Classcomp from "./testcomponent";
class Login extends React.Component {
    render() {
        return (
            <center>
                <h3>
                    Login class component
                    <Classcomp/>
                </h3>
            </center>
        )
    }
}
export default Login 