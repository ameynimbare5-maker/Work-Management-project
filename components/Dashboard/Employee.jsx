import { TaskListNumbers } from "../Others/TaskListNumbers";
import  Header  from "../Others/Header";
import { TaskList } from "../TaskList/TaskList";
 const Employee = () => {
  return (
    <>
    <div className="h-screen w-screen bg-[#1C1C1C]">
      <Header/>
      <TaskListNumbers/>
      <TaskList/>
    </div>
    </>
  )
}
export default Employee; 