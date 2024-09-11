import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";

function App() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate =useNavigate()
  // const [data,setdata]=useState([])
  useEffect(() => {
    axios
      .get("http://localhost:3030/users")
      .then((res) => {
        console.log(res.data);
        console.log(Object.keys(res.data[0]));
        setColumns(Object.keys(res.data[0]));
        setRecords(res.data);
        // Handle the response data
      })
      .catch((error) => {
        console.error("There was an error!", error); // Handle the error
      });
  }, []);

  function handleDelete(id){
    const conf = window.confirm("Do you want to delete")
    if(conf){
      axios.delete('http://localhost:3030/users/'+id)
   .then(res=>{
    alert("data Delete successfully !")
    navigate('/')
}).catch(err=>console.log(err))
    }
   
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mb-[20px]  pl-[250px] ">
     
       
          <Link
            to="/create"
            className="  border p-[10px] rounded-lg bg-[#028A0F] mx-[10px]"
          >
            Add +
          </Link>
       
      </div>
      <div>
        <div>
        <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                 
                 
                  {columns.map((c, i) => {
                  return (
                    <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" key={i}>
                      {c}
                    </th>
                  );
                })}
                <th scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {records.map(person => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.id}</div>
                          
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.name}</div>
                      {/* <div className="text-sm text-gray-500">{person.department}</div> */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                      >
                      {person.email}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                            <Link to={`/update/${person.id}`} className="border bg-[#5DBB63] p-[5px] rounded-lg">UPDATE</Link>
                            <button onClick={(e)=>handleDelete(person.id)} className="border bg-[red] p-[5px] rounded-lg">
                            DELETE</button>
                      </div>
                     
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
         
        </div>
      </div>
    </div>
  );
}

export default App;
