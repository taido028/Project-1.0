import React, { useState } from "react";
import { UserList } from "./UserTable";
import { AddUserForm } from "./AddUser";

export function User(){
    const [user, setUser] = useState(<UserList showForm={showForm} />)

    function showList(){
        setUser(<UserList showForm={showForm} />);
    }

    function showForm(){
        setUser(<AddUserForm showList={showList} />);

    }
    return(
        <div className="container my-5">
            {user}
        </div>
    );
}


