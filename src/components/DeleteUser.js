export function fetchUsers(setUsers) {
  fetch("http://localhost:3004/data")

    .then((response) => {
      if (!response.ok) {
        throw new Error("Unexpected Server Response");
      }
      return response.json();
    })

    .then((data) => {
      setUsers(data);
    })
    
    .catch((error) => console.log("Error: ", error));
}

export function deleteUser(id, fetchUsers){
  fetch("http://localhost:3004/data/" + id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => fetchUsers());
}