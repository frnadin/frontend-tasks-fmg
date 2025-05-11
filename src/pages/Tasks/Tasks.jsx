import React, { useState } from "react";
import TaskForm from "../../components/TaskForm/TaskForm"
import TaskList from "../../components/TaskList/TaskList"
import {useAuth} from "../../context/AuthContext"


function Tasks (){
    const [tasks, setTasks] = useState([]);

    return (
        <>
        {/* <TaskForm/> */}
        <TaskList tasks={tasks} setTasks={setTasks} />
        </>
    )
}

export default Tasks