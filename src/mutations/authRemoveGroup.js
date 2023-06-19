import { authorizedFetch } from "fetch/authorizedFetch";

export const RemoveGroupMutation =
  (groupId, page, accesslevel) => (dispatch, getState) => {
    const authorizationRemoveGroupMutationJSON = () => {
      return {
        query: `mutation (
        $authorizationId: ID!
        $groupId: ID!
        $accesslevel: Int!
      ) {
        authorizationRemoveGroup(
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
      body: JSON.stringify(authorizationRemoveGroupMutationJSON()),
    };

    return authorizedFetch("/api/gql", params)
      .then((resp) => resp.json())
      .then((json) => {
        return json;
      });
  };
