import { useState,useEffect } from "react";
import { DeleteButton } from "./DeleteButton";
export function DeleteUser(user, handleDeleteClick){

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
    useEffect(()=>fetchUsers(),[])

    return(
          <DeleteButton onClick={() => handleDeleteClick(user.id)}>
          </DeleteButton>
    );
}
    
    