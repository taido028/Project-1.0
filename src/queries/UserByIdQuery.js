import { authorizedFetch } from "fetch/authorizedFetch";
import { actions } from "store/store";

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

export const getUserById = async (id, page) => {
  try {
    const response = await authorizedFetch("/gql", {
      body: JSON.stringify(UserByIdQueryJSON(id)),
    });

    if (response.ok) {
      const data = await response.json();
      const user = data.data.userById; // Retrieve the user data

      actions.onMutationUpdateUser({ user: user, uservalid: true });
      actions.onMutationAddUser({ pageId: page.id, userId: id });

      actions.pageFetch(page.id);
      //actions.onUserAdd({ user: user, page: page });

      // if you can fix duplicated fetch data
      //then you can use the function below
      //actions.onUserAdd({ user: user, page: page });

      return user; // Return the user data
    } else {
      throw new Error("Error fetching user data");
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching user data");
  }
};
