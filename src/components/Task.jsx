import PropTypes from 'prop-types';
import "../styles/task.css";
import { Trash2 } from "react-feather";

function Task({ task }) {
  return (
    <div className="task">
      <button className="checkContainer">
        <div />
      </button>
      <p>{task.title}</p>

      <button className="deleteButton">
        <Trash2 size="20" />
      </button>
    </div>
  );
}


Task.propTypes = {
  task : PropTypes.any
}

export default Task;
