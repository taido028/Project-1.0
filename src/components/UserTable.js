import React, { useEffect, useState } from "react";
import { DeleteButton } from "./DeleteButton";
import { Trash } from "react-bootstrap-icons";

export function UserList (props) {

    const [users, setUsers] = useState([]);
    
    function fetchUsers(){
          fetch("http://localhost:3004/users")
          .then((response)=> {
            if(!response.ok){
                throw new Error("Unexpected Server Response");
            }
            return response.json()}
          )
          .then((data)=>{
            //console.log(data)
            setUsers(data);
          })
          .catch((error)=>console.log("Error: ", error));    
    }

    useEffect (()=> fetchUsers(), []);

 
    function deleleUser(id)
    {
      fetch("http://localhost:3004/users/" + id  ,{
            method:'DELETE'
      })
        .then((response)=>  response.json())
        .then((data)=> fetchUsers());
    }


    
    return(
        <div className="app-container">
        <div className="container-fluid p-5 bg-success text-white text-center">
          <h1 class = "topheader" >Work Flow</h1>
          
          <style>
            .topheader {
              
            }
          </style>
        </div>
            <h2 className="text-center mb-2">List of Users</h2>
        <table className="table table-hover table-stripped">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {  
                users.map((user, index)=>{
                return (
                    <tr key={index}>
                        
                        <td>{index+1}</td>
                        <td>{user.fullName}</td>
                        <td>{user.address}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.email}</td>
                        <td>
                            <button type="button" className="btn btn-primary btn-sm me-2">Edit</button>
                            <DeleteButton onClick={()=> deleleUser(user.id) } type="button" className="btn btn-danger btn-sm "><Trash/></DeleteButton>
                        </td>
                    </tr>
                );
            })}
          </tbody>
        </table>
        <button onClick={()=> props.showForm()} type="button" className="btn btn-primary me-2">Add a User</button>
        </div>
    );
}