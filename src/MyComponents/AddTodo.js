import React, {useState} from'react';

export const AddTodo = ({addTodo}) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    let myStyle = {
        margin: "100px 30px"
    
      }
    const submit = (e)=>{
            e.preventDefault();
            if(!title || !desc){
                alert("Title or Description can not be blank")
            }
            else{
                addTodo(title,desc);
                setTitle("");
                setDesc("");
            }     
    }
    return (
        <div className="container" style={myStyle}>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                 <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                        
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                
                <button type="Submit" className="btn btn-sm btn-success">Add Todo</button>
            </form> 
        </div>
    )
}


