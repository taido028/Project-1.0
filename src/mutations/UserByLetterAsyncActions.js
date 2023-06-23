import { authorizedFetch } from "fetch/authorizedFetch";

export const UserByLettersQueryJSON = (letters) => ({
  query: `query($letters: String!){
              userByLetters (letters: $letters){
                    id
                    name
                    surname
                    email
                    valid
                    lastchange
                 }
              }`,
  variables: { letters: letters },
});

export const getUserByLetters = async (letters) => {
  try {
    const response = await authorizedFetch("/gql", {
      body: JSON.stringify(UserByLettersQueryJSON(letters)),
    });

    if (response.ok) {
      const data = await response.json();

      // Retrieve the user data
      const UsersList = data.data.userByLetters;

      // Return the user data
      return UsersList;
    } else {
      throw new Error("Error fetching user data");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching user data");
  }
};
