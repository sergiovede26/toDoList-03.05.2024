import Task from "../components/Task";
import PropTypes from 'prop-types';
import "../styles/tasks.css";


function Tasks({ tasks }) {
  return (
    <section className="tasks">
      <header className="task-header">
        <div>
          <p>Create tasks</p>
          <span>10</span>
        </div>
        <div>
          <p className="textPurple">Completed</p>
          <span>1 of 10</span>
        </div>
      </header>
      <div className="list">
        {tasks.map(task=> (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}


Tasks.propTypes = {
  tasks: PropTypes.any
}

export default Tasks;
