import Task from "../components/Task";
import PropTypes from 'prop-types';
import "../styles/tasks.css";


function Tasks({ tasks, onComplete, onDelete }) {

  const tasksQuantity = tasks.length;
  //To filter in a new array only the completed tasks!
  const completedTasks = tasks.filter(task => task.isCompleted).length;


  return (
    <section className="tasks">
      <header className="task-header">
        <div>
          <p>Create tasks</p>
          <span>{tasksQuantity}</span>
        </div>
        <div>
          <p className="textPurple">Completed</p>
          <span>{completedTasks} of {tasksQuantity}</span>
        </div>
      </header>
      <div className="list">
        {tasks.map(task => (
          <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete}/>
        ))}
      </div>
    </section>
  );
}



//Props validation

Tasks.propTypes = {
  tasks: PropTypes.any,
  onComplete: PropTypes.any,
  onDelete: PropTypes.any
}

export default Tasks;
