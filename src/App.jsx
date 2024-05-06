import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
// import Task from "./components/Task";

function App() {

  const [tasks, setTasks] = useState([]);

  function addTask(taskTitle){
    //we use setTask to destructure and maitain the old value of the array:
    setTasks([
      ...tasks,
      {
        // crypto.randomUUID() (API GENERATES RANDOM NUMBER AS STRING):
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  return (
    <div>
    <Header onAddTask={addTask}/>
    <Tasks 
    tasks={tasks}
    />
    {/* <Task /> */}


    </div>
  )
}

export default App;