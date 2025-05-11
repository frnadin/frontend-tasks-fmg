import Title from "../../components/Title/Title";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import TaskButton from "../../components/TaskButton/TaskButton";

function Home (){
    return (
        <>
        <Title/>
        <LogoutButton />
        <TaskButton />
        </>
    )
}

export default Home