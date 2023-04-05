import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList(){

    const [todos,setTodos] = useState([]);

    return(
        <div className="todo_list_contaner">
            
            <h2>MYTODOS</h2>
   
              <TodoInput todos={todos} setTodos={setTodos} />

              
           <div className="todo_item_raaper">
           {todos.map((Item , index) =>{
                 return <TodoItem todos={todos} setTodos={setTodos}
                 index={index +1} key={Item.id} todo={Item} />
              })}
   
           </div>
       </div>
          
    );
}

export default TodoList;
