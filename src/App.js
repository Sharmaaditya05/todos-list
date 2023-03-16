
import './App.css';
import Header from"./MyComponents/Header";
import {Todos} from"./MyComponents/Todos";
import {Footer} from"./MyComponents/Footer";
import {AddTodo} from"./MyComponents/AddTodo";
import React, {useState} from'react';
function App() {

  const onDelete= (todo)=>{
    console.log("I am onDelete of todo",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos,setTodos] =useState( [
    { 
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get this job done1"
      },
      {
        sno: 2,
        title: "Go to the Mall",
        desc: "You need to go to the market to get this job done2"
        },
        {
          sno: 3,
          title: "Go to the Shop",
          desc: "You need to go to the market to get this job done3"
          },
          {
            sno: 4,
            title: "Go to the School",
            desc: "You need to go to the School to get this job done"
            }
      ]);
  return (
    <>
    
       <Header title="Aditya Sharma" searchBar={false}/>
       <AddTodo/>  
       <Todos todos={todos} onDelete={onDelete}/>
       <Footer/>  
    </>
  ); 
}

export default App;
