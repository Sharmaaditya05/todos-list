import React from 'react'

export const Footer = () => {
  let footerStyle={
      position: "absolute",
      top: "100vh",
      width: "100%",
  }
  return (
   
    <div className="bg-dark text-light py-3 my-5">
      <p className="text-center">
      Copyright &copy; MyTodosList.com
      </p>
    </div>
  )
}

