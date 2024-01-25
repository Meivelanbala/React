import "../../css/propscomponent.css"
function Propscomponent(props){
    return (
        <div style={{color:"red"}}>
            <h2>
                This is Propscomponent
            </h2>
            <h4>
                Hello, {props.name} <br></br> This is {props.site}
            </h4>
        </div>
    )

}
export default Propscomponent