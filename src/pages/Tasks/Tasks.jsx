    import React, { useState } from "react";
    import TaskForm from "../../components/TaskForm/TaskForm"
    import TaskList from "../../components/TaskList/TaskList"
    import {useAuth} from "../../context/AuthContext"
    import Header from "../../components/Header/Header"
    import "./Tasks.css"

    function Tasks (){
        const [tasks, setTasks] = useState([]);

        return (
            <div className="task-box">
        
            <Header title="Tasks" />

            <TaskList tasks={tasks} setTasks={setTasks} />
            </div>
        )
    }

    export default Tasks