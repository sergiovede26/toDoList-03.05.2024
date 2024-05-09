import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

const localStorageKey = "todo:savedTasks";

function App() {
  const [tasks, setTasks] = useState([]);

  function loadSavedTasks() {
    const saved = localStorage.getItem(localStorageKey);
    console.log(saved);
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function addTask(taskTitle) {
    //we use setTask to destructure and mantain the old value of the array:
    setTasksAndSave([
      ...tasks,
      {
        // crypto.randomUUID() (API GENERATES RANDOM NUMBER AS STRING):
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  //ADD COMMENT
  function setTasksAndSave(newTasks) {
    setTasks(newTasks);
    localStorage.setItem(localStorageKey, JSON.stringify(newTasks));
  }

  function deleteTaskbyId(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  function toogleTskComById(taskId) {
    const newTasks = tasks.map((task) => {
      //running again through the taskArr
      if (task.id === taskId) {
        //by checking the ckecked element
        return {
          ...task,
          isCompleted: !task.isCompleted, //to revert the boolean value
        };
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <NavBar />
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskbyId}
        onComplete={toogleTskComById}
      />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
      
    </>
  );
}

export default App;
