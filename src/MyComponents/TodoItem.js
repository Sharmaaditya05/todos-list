import React from 'react'


export const TodoItem = (props) => {
  return (
    <div>
      {props.todo.map(element => 
        <div key={element.sno}>
          <h4>{element.title}</h4>
          <p>{element.desc}</p>
        </div>
      )}
    </div>
  )
}

