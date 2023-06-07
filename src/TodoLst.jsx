
import TodoItm from "./TodoItm";

const TodoLst = ({todos, changeTodoStatus, deleteTodo}) => {

    return (
        <div className = "ToDoList">
            {
             todos.map((todo) => {
                return (
                <TodoItm key = {todo.id} 
                todo = {todo}
                changeTodoStatus = {changeTodoStatus}
                deleteTodo = {deleteTodo}/>
             )
            })
            }    
        </div>
      );
};

export default TodoLst;