import PropTypes from 'prop-types';
import "../styles/task.css";
import { Trash2 } from "react-feather";
import { CheckCircle } from "react-feather";


//Line 13 Ternary operator to show ✓ if completede or the div if not:

function Task({ task, onComplete, onDelete }) {
  return (
    <div className="task">
      <button className="checkContainer" onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <CheckCircle size="20" color='#69FF15' /> : <div /> }
      </button>
      
      <p className={task.isCompleted ? "textCompleted" : ""}>{task.title}</p>

      <button className="deleteButton" onClick={() => onDelete(task.id)}>
        <Trash2 size="20" />
      </button>
    </div>
  );
}


//Use of PropTypes:

Task.propTypes = {
  task : PropTypes.any,
  onComplete: PropTypes.any,
  onDelete: PropTypes.any
}

export default Task;
