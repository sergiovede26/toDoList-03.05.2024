import todologo from '../assets/Logo-todo.png';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <img src={todologo} alt="" />

      <form className="taskForm">
        <input placeholder="add a new task" type="text" />
        <button>Create</button>
      </form>
    </header>
  );
}

export default Header;
