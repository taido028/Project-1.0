import { authorizedFetch } from "fetch/authorizedFetch";

export const RemoveUserMutation =
  (userId, page, accesslevel) => (dispatch, getState) => {
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
          authorization{
            id
            users{
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

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      redirect: "follow", // manual, *follow, error
      body: JSON.stringify(authorizationRemoveUserMutationJSON()),
    };

    return authorizedFetch("/api/gql", params)
      .then((resp) => resp.json())
      .then((json) => {
        return json;
      });
  };
