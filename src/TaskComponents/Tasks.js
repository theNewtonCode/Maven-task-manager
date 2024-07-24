import React from 'react';
import { Task } from './Task';
import '../stylingFiles/Tasks.css'; 

export const Tasks = (props) => {
  const theme_color_major = props.theme ? {backgroundColor:"black"}: {};
  const theme_text = props.theme ? {color:"white"}:{};
  const theme_card_class = props.theme ? 'task-wrapper task-wrapper-dark':'task-wrapper task-wrapper-light';
  return (
    <div className='tasks-container' style={theme_color_major}>
      <h2 style={theme_text}>All Tasks</h2>
      <div className='tasks-scroll'>
        {props.tasks.length === 0 ? 
          <p style={theme_text}>Yay! You are out of tasks, you are free now!</p> :
          props.tasks.slice().reverse().map((task) => {
            return (
              <div className={theme_card_class} key={task.sno}>
                <Task task={task} onRemove={props.removeMethod} theme={props.theme}/>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};
