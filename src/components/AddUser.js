import React from "react";
import { Save, ArrowRightSquareFill } from "react-bootstrap-icons";

export function AddUserForm(props){

    const handleSubmit= (event) => {
        event.preventDefault();

        // read form data
        const formData = new FormData(event.target);

        // convert formData to object
        const user = Object.fromEntries(formData.entries());

        if(!user.fullName || !user.address || !user.phoneNumber || !user.email){
            console.log("Please enter all fields");
            return;
        }

        fetch("http://localhost:3004/users",{
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
        .then((data)=> console.log(data))
        .then(()=> props.showList());
    }
       
    return(
        <>
        <h2 class="textheader">Add a User</h2>
        <div className="row">
            <div className="col-lg-6 mx-auto">
                  <form onSubmit={handleSubmit}>
                       <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Name:</label>
                            <div className="col-sm-8">
                                 <input className="form-control"
                                        name="fullName"
                                        defaultValue=""
                                        class="inputbox"/>
                            </div>
                       </div>

                       <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Address:</label>
                            <div className="col-sm-8">
                                 <input className="form-control"
                                        name="address"
                                        defaultValue=""
                                        class="inputbox"/>
                            </div>
                       </div>

                       <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">PhoneNumber:</label>
                            <div className="col-sm-8">
                                 <input className="form-control"
                                        name="phoneNumber"
                                        defaultValue=""
                                        class="inputbox"/>
                            </div>
                       </div>

                       <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Email:</label>
                            <div className="col-sm-8">
                                 <input className="form-control"
                                        name="email"
                                        defaultValue=""
                                        class="inputbox"/>
                            </div>
                       </div>

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