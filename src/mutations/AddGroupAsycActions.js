import { actions } from "store/store";
import { authorizedFetch } from "fetch/authorizedFetch";

/**
 * An asynchronous function that creates a mutation to add a group.
 * This function first prepares the query and variables, then makes a POST request to the server.
 * After receiving the response, it dispatches relevant actions to update the application state.
 *
 * @function
 * @param {string} groupId - The ID of the group to be added.
 * @param {Object} page - The current page object.
 * @param {number} accesslevel - The access level to be assigned to the group.
 * @returns {Function} A function that dispatches actions to update the application state.
 */

export const AddGroupMutation =
  (groupId, page, accesslevel) => (dispatch, getState) => {
    // Function to construct the JSON for the mutation request.
    const authorizationAddGroupMutationJSON = () => {
      return {
        query: `mutation (
            $authorizationId: ID!
            $groupId: ID!
            $accesslevel: Int!
          ) {
            authorizationAddGroup(
              authorization: {
                authorizationId: $authorizationId
                groupId: $groupId
                accesslevel: $accesslevel
              }
            ) {
              id
              msg
              authorization{
                id
                groups{
                  id
                  accesslevel
                  group{
                    id
                    name
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
          groupId: groupId,
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
      body: JSON.stringify(authorizationAddGroupMutationJSON()),
    };

    // Make the authorized fetch request and handle the response.
    return authorizedFetch("/api/gql", params)
      .then((resp) => resp.json())
      .then((json) => {
        return json;
      })
      .then((json) => {
        // Extract the list of groups and the new page from the response.
        const groups = json.data.authorizationAddGroup.authorization.groups;
        const newpage = json.data.authorizationAddGroup.authorization;

        // Find the newly added group in the list of groups.
        const FilterGroup = groups.filter(
          (groups) => groups.group.id === groupId
        )[0];
        const AddedGroup = FilterGroup.group;

        // Check if the group is already present on the page.
        const CheckGroup = page.groups.find(
          (groups) => groups.group.id === groupId
        );

        if (!CheckGroup) {
          // Log the added group and dispatch an action to add it to the state.
          console.log("Added group:");
          console.log(AddedGroup);

          // Add group to store
          actions.onGroupAdd({ group: AddedGroup, page: newpage });

          console.log("Sucessfully added new group");
        } else {
          // If the group is already present, log an update message and dispatch an action to update it.
          console.log("Group's accesslevel updated " + accesslevel);
          actions.onGroupUpdate({
            group: AddedGroup,
            page: newpage,
            accesslevel: accesslevel,
          });
        }
      });
  };
