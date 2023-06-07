const TodoFooter = ({todos}) => {

    const completed = todos.filter((todo)=>todo.isCompleted).length;
return (
    <div>{completed} of {todos.length} Tasks are Completed! </div>
)
}

export default TodoFooter;