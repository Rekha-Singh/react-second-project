
import React, {createContext,useContext} from 'react';


export const TodoContext =createContext({
    todos:[
        {
            id:1,
            todo:" Todod msg",
            completed:false
        }
    ],
    addTodo:(todo) =>{},
    updateTodo:(id,todo)=>{},
    deleteTodod:(id) =>{},
    toggleComplete:(id)=>{}


});

export const useTodo = ()=>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;
 

