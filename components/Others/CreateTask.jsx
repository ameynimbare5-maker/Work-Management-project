

export const CreateTask = () => {
  return (
    <div className="mt-7">
            <form className=" flex flex-wrap w-full p-1 ">
              <div className="w-1/2">
                  <div className="m-2 ">
                      <h1 className="mb-1" >Task title</h1>
                      <input type="text" placeholder="eg..Make UI Design" name="" id="" className="border-gray-300 border-2 bg-transparent rounded w-3/5 py-1 px-2" />
                  </div>

                  <div className="m-2">
                    <h1 className="mb-1">Date</h1>
                    <input type="date" name="" id="" className="border-gray-300 border-2 rounded w-3/5 py-1 px-2" />
                  </div>

                  <div className="m-2">
                    <h1 className="mb-1">Assign to </h1>
                    <input type="text" name="" id="" placeholder="Employes name" className="border-gray-300 border-2 rounded w-3/5 py-1 px-2"/>
                  </div>

                  <div className="m-2">
                    <h1 className="mb-1">Category</h1>
                    <input type="text" placeholder="Design Dev etc.." name="" id="" className="border-gray-300 border-2 rounded w-3/5 py-1 px-2"/>
                  </div>


              </div>

              <div className="p-1 w-2/5 flex flex-col items-start">
                <h1  className="mb-1">Description</h1>
                <textarea className="border-2 border-gray-400 w-full py-2 px-4 rounded mb-4" name="" id="" cols="50" rows="8"></textarea>
                <button className="bg-green-400 py-2 w-full" type="submit">Create Task</button>
              
              </div>
             
            </form>
          </div>

  )
}
