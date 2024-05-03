import todologo from "../assets/Logo-todo.png";
import styles from '../styles/Header.css';

function Header() {
  return (
    <header className={styles.header}>
      <img src={todologo} alt="" />

      <form className={styles.taskForm}>
        <input placeholder="add a new task" type="text" />
        <button>Create</button>
      </form>
    </header>
  );
}

export default Header;
