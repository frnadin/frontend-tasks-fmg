import Title from "../../components/Title/Title";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import TaskButton from "../../components/TaskButton/TaskButton";
import Header from "../../components/Header/Header";

function Home (){
    return (
        <>
        <Header title="Home" />
        <Title/>
        
        <LogoutButton />
        <TaskButton />
        </>
    )
}

export default Home