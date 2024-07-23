import React from 'react'
import { Task } from './Task'

export const Tasks = (props) => {
  return (
    <div className='container'>
        <h3>All Tasks</h3>
        {props.tasks.length===0? "Yay! You are out of tasks, you are free now!":
    props.tasks.map((task)=>{return <Task task={task} onRemove = {props.removeMethod}/>})}
    
    </div>
  )
}
