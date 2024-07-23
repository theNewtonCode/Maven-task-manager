import './App.css';
import Header from './TaskComponents/Header';
import {Tasks} from './TaskComponents/Tasks';
import {Task} from './TaskComponents/Task';
import {Footer} from './TaskComponents/Footer';
import { useState } from 'react';

function App() {
  const removeMethod = (task) => {
console.log("I am removing task number ", task.sno);
updateTasks(tasks.filter((f)=>{return f!==task}));
  }

  const [tasks, updateTasks] = useState([
    {sno :1, 
      title :"Eat Breakfast",
      Desc :"You need to have your breakfast at 8 am!"
    },
    {
      sno:2, 
      title:"Take a shower",
      Desc:"You need to have your shower after 1 hours of breakfast."
    },
    {
      sno:3, 
      title:"call the cab",
      Desc:"You need to have to get ready and call the cab to go to the office at 10am."
    },
  ]);
  return (
    <>
    <Header theme="dark"/>
    {/* <Task/> */}
    <Tasks tasks={tasks} removeMethod = {removeMethod}/>
    <Footer/>
    </>
  );
}

export default App;
