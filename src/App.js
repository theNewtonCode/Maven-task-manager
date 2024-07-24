import './App.css';
import Header from './TaskComponents/Header';
import { Tasks } from './TaskComponents/Tasks';
import { Footer } from './TaskComponents/Footer';
import { useState, useEffect } from 'react';
import { NewTask } from './TaskComponents/NewTask';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Help } from './TaskComponents/Help';

function App() {
  const [theme, setToggleTheme] = useState(false);

  const handleToggle = () => {
    setToggleTheme(!theme);
  };
    // Initialize allTasks from localStorage if it exists, otherwise set it to an empty array
    let allTasks;
    if (localStorage.getItem("tasks") === null) {
        allTasks = [];
    } else {
        allTasks = JSON.parse(localStorage.getItem("tasks"));
    }

    // Initialize tasks state with allTasks
    const [tasks, updateTasks] = useState(allTasks);

    // useEffect hook to update localStorage whenever tasks state changes
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Function to add a new task
    const addNewTask = (title, desc) => {
        // Check if the title already exists in tasks
        const isDuplicate = tasks.some(task => task.title === title);
        if (isDuplicate) {
            alert('Task with this title already exists');
            return;
        }

        // Determine the new task's serial number (sno)
        let sno = 0;
        if (tasks.length !== 0) {
            sno = tasks[tasks.length - 1].sno + 1;
        }

        // Create the new task object
        const newTask = {
            sno: sno,
            title: title,
            desc: desc
        };

        // Update tasks state with the new task
        updateTasks([...tasks, newTask]);
    }

    // Function to remove a task
    const removeMethod = (task) => {
        // Filter out the task to be removed and update the tasks state
        updateTasks(tasks.filter((f) => f !== task));
    }

    return (
      <>
      <Router>
          <Header theme={theme} onToggle={handleToggle}/>
          <Routes>
            <Route exact path="/" element={
              <>
                  <NewTask addNewTask={addNewTask} theme={theme}/>
                  <Tasks tasks={tasks} removeMethod={removeMethod} theme={theme}/>
              </>
            } />
            <Route path="/help" element={<Help theme={theme}/>} />
          </Routes>
          <Footer theme={theme}/>
        </Router>
      </>
  );
}

export default App;
