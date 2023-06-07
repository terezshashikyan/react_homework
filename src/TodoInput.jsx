
import {useState} from "react";

const TodoInput = ({addTodo}) => {
   
const [text, setText] = useState('');

const handleTextChange = (text) => {
    setText(text)
};

return (
<form onSubmit = {(e) => {e.preventDefault(), addTodo(text), setText("")}}>  
<input type="text" value = {text} placeHolder = "Add Your Todos Here..." onChange = {(e) => {handleTextChange(e.target.value)}}/>
<button  className = "AddButton">Add</button>
</form>
)

}

export default TodoInput;