import { PencilIcon, TrashIcon } from "@heroicons/react/outline";
import { useState } from "react";
import "./TodoItem.css";

function TodoItem({todo , index ,todos,setTodos}) {

const [isEdit , setEdit] =useState(false);
const [editTodoname, seteditTodoname] =useState("");


   const handleDelet = () =>{
   const newTodos = todos.filter((item) => {
      if(todo.id === item.id){
       return false;
      }else{
         return true;
      }
   })
   setTodos(newTodos);
};

const handleEdit = () => {
    setEdit(!isEdit);
    seteditTodoname(todo.name);
}

const handlesubmit = (e) =>{
   if (e.keyCode === 13){
   const newTodos = todos.map((item)=>{
      if(todo.id === item.id){
           return {
            ...item,
            name:editTodoname,
           };
      }else{
         return item;
      }
   });
   
   setTodos(newTodos);
   setEdit(false);
   
 }
}

const handlComplte = () =>{
   const newTodos = todos.map((item) => {
          if(todo.id ===item.id){
              return {
                 ...item,
                 isCompleted:!item.isCompleted,
              };
          }else{
            return item;
          }

   });

   setTodos(newTodos);
 
}

  return (
    <div className="todo_item_rapper">
       <div className="todo_item_text">
          <div>{index}.</div>
          {isEdit ? <input type ="text" value={editTodoname}  onChange={
            (e) => {
               seteditTodoname(e.target.value);            }
          }
             onKeyDown={handlesubmit}
          /> : 
          <div onClick={handlComplte} style={{
             textDecorationLine: todo.isCompleted ? 
             "line-through" :"none",
          }}>{todo.name}</div> }
            
       </div>

        <div className="todo_item_button">
               
               
               <button className="pencil_button" onClick={handleEdit}>
                  <PencilIcon  />
               </button>
               
               
               <button className="tarsh_button" onClick={handleDelet}>
                  <TrashIcon  />
               </button>
        </div>
      
      </div>
  );
}

export default TodoItem;