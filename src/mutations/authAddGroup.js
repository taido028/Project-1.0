import { actions } from "store/store";

export const AddGroupMutation =
  (groupId, page, accesslevel) => (dispatch, getState) => {
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

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      redirect: "follow", // manual, *follow, error
      body: JSON.stringify(authorizationAddGroupMutationJSON()),
    };

    return fetch("/api/gql", params)
      .then((resp) => resp.json())
      .then((json) => {
        return json;
      })
      .then((json) => {
        // Get group list from response
        const groups = json.data.authorizationAddGroup.authorization.groups;
        const newpage = json.data.authorizationAddGroup.authorization;

        // Get the added group from group list
        const FilterGroup = groups.filter(
          (groups) => groups.group.id === groupId
        )[0];
        const AddedGroup = FilterGroup.group;

        const CheckGroup = page.groups.find(
          (groups) => groups.group.id === groupId
        );

        if (!CheckGroup) {
          // Show added user in console
          console.log("Added group:");
          console.log(AddedGroup);

          // Add user to store
          actions.onGroupAdd({ group: AddedGroup, page: newpage });

          console.log("Sucessfully added new group");
        } else {
          console.log("Group's accesslevel updated " + accesslevel);
          actions.onGroupUpdate({
            group: AddedGroup,
            page: newpage,
            accesslevel: accesslevel,
          });
        }
      });
  };
