import React, { useEffect, useState } from "react";
import { DeleteButton } from "./DeleteButton";
import { Trash, PencilSquare, PersonFillAdd } from "react-bootstrap-icons";
import { deleteUser, fetchUsers } from "./DeleteUser";


export function UserList(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => fetchUsers(setUsers), []);

  function deleteUserHandler(id){
    deleteUser(id, () => fetchUsers(setUsers));
  }

  return (
    <div className="app-container">
      <div className="container-fluid p-5 bg-success text-white text-center">
        <h1 class="topheader">Work Flow</h1>

        <style>{`.topheader {}`}</style>
      </div>
      <h2 className="text-center mb-2">List of Users</h2>
      <table class="first">
        <thead>
          <tr>
            <th class="top">#</th>
            <th class="top">Name</th>
            <th class="top">Address</th>
            <th class="top">Phone Number</th>
            <th class="top">Email</th>
            <th class="top">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td class="user">{index + 1}</td>
                <td class="user">{user.fullName}</td>
                <td class="user">{user.address}</td>
                <td class="user">{user.phoneNumber}</td>
                <td class="user">{user.email}</td>
                <td class="user">
                  <button
                    onClick={()=> props.showForm(user)}
                    type="button"
                    className="btn btn-primary btn-sm me-2"
                  >
                    <PencilSquare class="icon"/>
                  </button>
                  <DeleteButton
                    onClick={() => deleteUserHandler(user.id)}
                    type="button"
                    className="btn btn-danger btn-sm "
                  ><Trash class="icon"/>
                  </DeleteButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        onClick={() => props.showForm({})}
        class= "add"><PersonFillAdd class="iconadd"/>Add a user
      </button>
    </div>
  );
}