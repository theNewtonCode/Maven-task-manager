import React from 'react'
import '../stylingFiles/Tasks.css';

export const Task = ({task, onRemove, theme}) => {
  const theme_card_class = theme ? 'card card-dark':'card';
  const theme_btn_class = theme ? 'btn btn-outline-secondary':'btn btn-warning';
  return (
<div class={theme_card_class} style={{ width: '18rem' }}>
  <div class="card-body" >
    <h5 class="card-title">{task.title.toUpperCase()}</h5>
    <p class="card-text">{task.desc}</p>
    <button class={theme_btn_class} onClick={()=>{onRemove(task)}}>Remove</button>
  </div>
</div>

  )
}

