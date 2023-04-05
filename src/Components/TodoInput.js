import "./TodoInput.css";
import {useState} from "react";
import {PlusIcon} from "@heroicons/react/outline";
import{v4} from 'uuid';


function TodoInput({todos ,setTodos}) {

    const [todo, setTodo] = useState("");


    const handlClick = () => {
      if(todo.length > 0){

     
      const newTodo ={
        id: v4(),
        name:todo,
        isCom:false,
      }
      const newTodos =[...todos , newTodo] ;
       
        setTodos(newTodos);
        setTodo("");
     }
    }

  return (
    <div className="todo_input_rapper">
        <input type="text" value={todo} onChange ={(event)=>{
            setTodo(event.target.value);
        }}
        placeholder="Enter your Todoo"
        
        />

        <button  onClick={handlClick} >
            <PlusIcon   className="plus_icon" />
        </button>
    </div>
  );
}

export default TodoInput;