import '../styles/tasks.css';
import Task from "../components/Task";

function Tasks(){

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
            <Task />
        </div>
    </section>
    )
}

export default Tasks;