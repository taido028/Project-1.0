import { authorizedFetch } from "fetch/authorizedFetch";

/**
 * An asynchronous function that creates a mutation to remove a user.
 * This function first prepares the query and variables, then makes a POST request to the server.
 * It does not dispatch any actions to update the application state after receiving the response.
 *
 * @function
 * @param {string} userId - The ID of the user to be removed.
 * @param {Object} page - The current page object.
 * @param {number} accesslevel - The access level to be assigned to the user.
 * @returns {Function} A function that makes a fetch request but does not dispatch any actions.
 */

export const RemoveUserMutation =
  (userId, page, accesslevel) => (dispatch, getState) => {
    // Function to construct the JSON for the mutation request.
    const authorizationRemoveUserMutationJSON = () => {
      return {
        query: `mutation (
        $authorizationId: ID!
        $userId: ID!
        $accesslevel: Int!
      ) {
        authorizationRemoveUser(
          authorization: {
            authorizationId: $authorizationId
            userId: $userId
            accesslevel: $accesslevel
          }
        ) {
          id
          msg
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
      body: JSON.stringify(authorizationRemoveUserMutationJSON()),
    };

    // Make the authorized fetch request and handle the response.
    return authorizedFetch("/api/gql", params)
      .then((resp) => resp.json())
      .then((json) => {
        return json;
      });
  };
