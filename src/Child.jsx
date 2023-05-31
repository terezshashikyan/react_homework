import React from "react";


const Child = (props) => {
    
    
return <input type="text" value = {props.value} onChange = {props.handleChange}/>
}

export default Child;