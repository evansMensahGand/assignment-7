import { useState } from "react";

let Todo = () => {
    const [todoList, setTodoList] = useState([
        { id: 1, item: "Buy Mango", completed: false },
        { id: 2, item: "Buy Apple", compeleted: true }
        
    ]);
    const [todo, setTodo] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo !== "") {
            setTodoList([todo, ...todoList]);
            setTodo("");
        }
    };

    return (
        <div>
            <h1>ToDo Application</h1>

            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    name="todo"
                    value={todo.item}
                    onChange={(e) => setTodo(e.target.value)} />
                <button type="submit">Add ToDo</button>
            </form>



            <ol>
                {
                    todoList.map((todo) => (
                        <li>{todo.item}</li>
                    ))}

            </ol>


            {/* 
             <ol> 
                {
                    todoList.map(todo) =>{
                    return <li>{ todo}</li>;
                }}
            </ol> */}


        </div>
    );
};


export default Todo;