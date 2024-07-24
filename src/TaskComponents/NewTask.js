import React, { useState } from 'react'

export const NewTask = ({addNewTask}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit=()=>{
if(!title || !desc){
    alert('Please fill the full form');
}
else{
    addNewTask(title, desc);
    setTitle("");
    setDesc("");
}
    }
  return (
    <form onSubmit={submit} className='container my-3'>
  <div className="mb-3">
    <label htmlFor="taskTitle" className="form-label">Task Title</label>
    <input type="text" className="form-control" id="taskTitle" value={title} onChange={(e)=>setTitle(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="taskDesc" className="form-label">Description</label>
    <input type="text" className="form-control" id="taskDesc" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
  </div>
  <button type="submit" className="btn btn-success">Submit</button>
</form>
  )
}
