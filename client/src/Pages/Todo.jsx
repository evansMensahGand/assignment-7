import React from 'react'
import { useState, useEffect } from "react"
import "./Todo.css"

const fetchQuery = async({uri, method="GET", body =null})=>{
   const response= await fetch(uri,{
        method,
        headers:{
            "Content-Type":"application/json",
        },
        body: body!== null? JSON.stringify(body):null,
    });
    const data =await response.json();
    return data;
};

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data =  await fetchQuery({uri:"http://localhost:4000/todos"});
            setTodos(data.todos);
        };

        fetchData();
    }, [todos]);
    
    const submitHandler = async (e) => {
        e.preventDefault()
        
        const newTodo = {
            text: todo,
            completed: false,
        };

        const data = await fetchQuery({
            uri:"http://localhost:4000/todos",
            method: "POST",
            body: newTodo,
        });
        setTodos([...todos, data.todo.text]);
    };
    
    
    const toggleCompleted = async (id) => {
            await fetchQuery({
            uri:`http://localhost:4000/todos/${id}/toggle`,
            method: "PATCH",
                   
     });
};


const deleteTodo = async(id)=> {
    await fetchQuery({
        uri:`http://localhost:4000/todos/${id}`,
        method: "DELETE", 
    });

};





    return (
    
        <div className="todos"> 
        <p>Enter a list of what you want to do</p>
            <form onSubmit={submitHandler}>
                <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button>Add Todo</button>
            </form>
            <ul>

                {todos.map((todo) => (
                    <li key={todo._id}>
                        {todo.text}
                        <button onClick={() => toggleCompleted(todo._id)}>
                            {todo.completed ? "Completed" : "Incompleted"}
                        </button>
                        <button >Edit</button>
                        <button onClick={()=>deleteTodo(todo._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
