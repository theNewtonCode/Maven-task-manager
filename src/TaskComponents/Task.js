import React from 'react'

export const Task = ({task, onRemove}) => {
  return (
<div class="card" style={{ width: '18rem' }}>
  <div class="card-body" >
    <h5 class="card-title">{task.title}</h5>
    <p class="card-text">{task.Desc}</p>
    <a href="#" class="btn btn-warning" onClick={()=>{onRemove(task)}}>Remove</a>
  </div>
</div>

  )
}

