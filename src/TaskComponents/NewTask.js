import React, { useState } from 'react';
import '../stylingFiles/NewTask.css'; // Import the CSS file for styling

export const NewTask = ({ addNewTask, theme }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert('Please fill the full form');
    } else {
      addNewTask(title, desc);
      setTitle("");
      setDesc("");
    }
  }
  const theme_color_major = theme === "dark" ? {backgroundColor:"black"}: {};
  const theme_text = theme === "dark" ? {color:"white", fontSize: '54px'}: {};
  const form_theme = theme === "dark" ? {backgroundColor:"#a2a2a233", color:"white"}:{};

  const form_input_theme_class = theme === "dark" ? "form-control text-theme placeholder-design":"form-control";
  
  const form_btn_theme = theme === "dark" ? {backgroundColor:"#1bff4f"}:{};

  return (
    <div className='new-task-container' style={theme_color_major}>
      <div className='form-section'>
        <form onSubmit={submit} className='new-task-form' style={form_theme}>
          <div className="form-group">
            <label htmlFor="taskTitle" className="form-label">Task Title</label>
            <input
              type="text"
              className={form_input_theme_class}
              id="taskTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="taskDesc" className="form-label">Description</label>
            <input
              type="text"
              className={form_input_theme_class}
              id="taskDesc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Enter task description"
            />
          </div>
          <button type="submit" className="btn-submit" style={form_btn_theme}>Add Task</button>
        </form>
      </div>
      <div className='company-section'>
        <img src="/task_manager_18854.png" alt="Company Logo" className='company-logo' />
        <h1 style={theme_text} className='company-name'>MAVEN: Your Tasks List</h1>
      </div>
    </div>
  );
}
