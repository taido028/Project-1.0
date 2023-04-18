import React, { useState } from "react";
import { UserList } from "./UserTable";
import { AddUserForm } from "./AddUser";

export function User(){
    const [users, setUser] = useState(<UserList showForm={showForm} />)

    function showList(){
        setUser(<UserList showForm={showForm} />);
    }

    function showForm(user){
        setUser(<AddUserForm user={user} showList={showList} />);

    }
    return(
        <div className="container my-5">
            {users}
        </div>
    );
}


