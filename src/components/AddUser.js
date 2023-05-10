import React from "react";
import { Save, ArrowRightSquareFill } from "react-bootstrap-icons";
import { InputBox } from "./InputBox";

export function AddUserForm(props){

    const handleSubmit= (event) => {
        event.preventDefault();
        

        // Read Form Data
        const formData = new FormData(event.target);

        // Convert FormData to Object
        const user = Object.fromEntries(formData.entries());

        // Check if the input box is empty
        if(!user.fullName || !user.address || !user.phoneNumber || !user.email){
            console.log("Please enter all fields");
            return;
        }

        // Send Data to Server
        if(props.user.id){
        fetch("http://localhost:3004/users/" +props.user.id ,{
            method:"PATCH",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(user)

        })
        .then((response)=> {
            if(!response.ok){
                throw new Error("Network response was not OK");
            }
           return response.json()
        })
        .then((data)=> props.showList());
    }
    else{
        fetch("http://localhost:3004/users/" ,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(user)

        })
        .then((response)=> {
            if(!response.ok){
                throw new Error("Network response was not OK");
            }
           return response.json()
        })
        .then(()=> props.showList());
        console.log(user)

    }
}
       
    return(
        <>
        <h2 class="textheader">{props.user.id? "Edit the User":" Add a User"}</h2>
        <div className="row">
            <div className="col-lg-6 mx-auto">
                  <form onSubmit={handleSubmit}>

                        <InputBox BoxName="Name:" name="fullName" props={props.user.fullName}/>
                        <InputBox BoxName="Address:" name="address" props={props.user.address}/>
                        <InputBox BoxName="Phone Number:" name="phoneNumber" props={props.user.phoneNumber}/>
                        <InputBox BoxName="Email:" name="email" props={props.user.email}/>

                       <div className="row">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <button type="submit" className="btn btn-sm btn-success"><Save class="icon"/></button>
                            </div>
                            <div className="col-sm 4 d-grid">
                                <button onClick={()=> props.showList()} type="button" className="btn btn-sm btn-danger"><ArrowRightSquareFill class="icon"/></button>
                            </div>
                       </div>
                  </form>
            </div>
        </div>
        </>
    );
}