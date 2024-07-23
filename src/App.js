import './App.css';
import Header from './TaskComponents/Header';
import {Tasks} from './TaskComponents/Tasks';
import {NewTask} from './TaskComponents/NewTask';
import {Footer} from './TaskComponents/Footer';

function App() {
  let fake_tasks = [
    {
      "sno.":1, 
      "Task":"Eat Breakfast",
      "Desc":"You need to have your breakfast at 8 am!"
    },
    {
      "sno.":2, 
      "Task":"Take a shower",
      "Desc":"You need to have your shower after 1 hours of breakfast."
    },
    {
      "sno.":1, 
      "Task":"call the cab",
      "Desc":"You need to have to get ready and call the cab to go to the office at 10am."
    }
  ]
  return (
    <>
    <Header theme={7}/>
    <NewTask/>
    <Tasks alltasks={fake_tasks}/>
    <Footer/>
    </>
  );
}

export default App;
