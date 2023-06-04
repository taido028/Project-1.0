import { authorizedFetch } from "fetch/authorizedFetch";

export const UserByIdQueryJSON = (id) => ({
  query: `query($id: ID!){
              userById (id: $id){
                    id
                    name
                    surname
                    email
                    valid
                    lastchange
                 }
              }`,
  variables: { id: id },
});

export const getUserById = async (id) => {
  try {
    const response = await authorizedFetch("/gql", {
      body: JSON.stringify(UserByIdQueryJSON(id)),
    });

    if (response.ok) {
      const data = await response.json();
      const user = data.data.userById; // Retrieve the user data
      return user; // Return the user data
    } else {
      throw new Error("Error fetching user data");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching user data");
  }
};
