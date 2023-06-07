

const TodoItm = ({todo, deleteTodo, changeTodoStatus}) => {
    return (
        <div>
            <input type="checkbox" checked = {todo.isCompleted} onChange = {(e) => {
                changeTodoStatus({
                  ...todo,
                  isCompleted: e.target.checked,
                })
            }}/>
            {todo.text}
            <button onClick = {() => {deleteTodo(todo)}}>x</button>
        </div>
    )
}

export default TodoItm;