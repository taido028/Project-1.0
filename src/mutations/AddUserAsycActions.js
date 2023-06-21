import { actions } from "store/store";
import { authorizedFetch } from "fetch/authorizedFetch";

/**
 * An asynchronous function that creates a mutation to add a user.
 * This function first prepares the query and variables, then makes a POST request to the server.
 * After receiving the response, it dispatches relevant actions to update the application state.
 *
 * @function
 * @param {string} userId - The ID of the user to be added.
 * @param {Object} page - The current page object.
 * @param {number} accesslevel - The access level to be assigned to the user.
 * @returns {Function} A function that dispatches actions to update the application state.
 */

export const AddUserMutation =
  (userId, page, accesslevel) => (dispatch, getState) => {
    const authorizationAddUserMutationJSON = () => {
      // Function to construct the JSON for the mutation request.
      return {
        query: `mutation (
        $authorizationId: ID!
        $userId: ID!
        $accesslevel: Int!
      ) {
        authorizationAddUser(
          authorization: {
            authorizationId: $authorizationId
            userId: $userId
            accesslevel: $accesslevel
          }
        ) {
          id
          msg
          authorization{
            id
            users{
              accesslevel
              id
              user{
                id
                name
                surname
                email
                valid
                lastchange
              }
            }
          }
        }
      }
    `,
        variables: {
          authorizationId: page.id,
          userId: userId,
          accesslevel: accesslevel,
        },
      };
    };

    // Parameters for the fetch request.
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      redirect: "follow", // manual, *follow, error
      body: JSON.stringify(authorizationAddUserMutationJSON()),
    };

    // Make the authorized fetch request and handle the response.
    return authorizedFetch("/api/gql", params)
      .then((resp) => resp.json())
      .then((json) => {
        return json;
      })
      .then((json) => {
        // Extract the list of users and the new page from the response.
        const users = json.data.authorizationAddUser.authorization.users;
        const newpage = json.data.authorizationAddUser.authorization;

        // Find the newly added user in the list of users.
        const FilterUser = users.filter((users) => users.user.id === userId)[0];
        const AddedUser = FilterUser.user;

        // Check if the user is already present on the page.
        const CheckUser = page.users.find((users) => users.user.id === userId);

        if (!CheckUser) {
          // Log the added user and dispatch an action to add it to the state.
          console.log("Added user:");
          console.log(AddedUser);

          // Add user to store
          actions.onUserAdd({ user: AddedUser, page: newpage });
          console.log("Sucessfully added new user");
        } else {
          // If the user is already present, log an update message and dispatch an action to update it.
          console.log("User's accesslevel updated: " + accesslevel);
          actions.onUserUpdate({
            user: AddedUser,
            page: newpage,
            accesslevel: accesslevel,
          });
        }
      });
  };
