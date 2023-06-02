export const AddUserMutation = (userId, pageId) => (dispatch, getState) => {
  const authorizationAddUserMutationJSON = (userId, pageId) => {
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
        }
      }
    `,
      variables: {
        authorizationId: pageId,
        userId: userId,
        accesslevel: 1,
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
    body: JSON.stringify(authorizationAddUserMutationJSON(userId, pageId)),
  };

  return (
    fetch("/api/gql", params)
      //return authorizedFetch('/api/gql', params)
      .then((resp) => resp.json())
      .then((json) => {
        window.location.reload(true);
        return json;
      })
  );
};
