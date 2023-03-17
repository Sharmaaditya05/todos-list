import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "100px 30px"

  }
  return (
    <div className="container" style={myStyle}>
      <h3 className=" my-5 " >
        Todos List
      </h3>
      {props.todos.length === 1 ? "No Todos to Display" :
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr />
            </>
          )
        })
      }

    </div>
  )
}

