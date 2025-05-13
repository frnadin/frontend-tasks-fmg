import Title from "../../components/Title/Title";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import TaskButton from "../../components/TaskButton/TaskButton";
import Header from "../../components/Header/Header";
import React from "react";
import "./Home.css";

function Home() {
    return (
        <>
            <div className="home-box">
                <Header title="Home" />
                <Title />
                
                <div className="button-container">
                    <TaskButton />
                    <LogoutButton />
                </div>
            </div>
        </>
    )
}

export default Home