import { useState } from "react";
import PropTypes from 'prop-types';

import "../styles/Header.css";
import todologo from "../assets/Logo-todo.png";
import { PlusCircle } from "react-feather"

function Header({ onAddTask }) {

  const [title, setTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault(); //for prevent the refreshing wesite
    onAddTask(title);
  }

  function onChangeTitle(e) {
    setTitle(e.target.value); //target: everytime we use the input the element is saved inside the state
  }

  return (
    <header className="header">
      <img src={todologo} alt="" />

      <form onSubmit={handleSubmit} className="taskForm">
        <input placeholder="add a new task" type="text" value={title} onChange={onChangeTitle}/>
        <button>Create <PlusCircle size="20" /> </button>
      </form>
    </header>
  );
}

Header.propTypes = {
  onAddTask : PropTypes.any.isRequired
}

export default Header;
