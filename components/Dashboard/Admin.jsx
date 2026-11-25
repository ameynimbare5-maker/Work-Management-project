import Header from "../Others/Header";
import { CreateTask } from "../Others/CreateTask";
import { Alltask } from "../Others/Alltask";
const Admin = () => {
  return (
    <div className="bg-[#1c1c1c] w-full p-8 h-full ">
          
          <Header/>
          <CreateTask/>
          <Alltask/>

    </div>
  )
}
 export default Admin;