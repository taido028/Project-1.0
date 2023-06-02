export const UpdateUserMutation = (user) => (dispatch, getState) => {
  const authorizationUpdateUserMutationJSON = (user) => {
    return {
      query: `mutation ($id:ID!, $name:String!, $surname:String!, $email:String!, $lastchange:DateTime!, $valid:Boolean!){
            userUpdate(user :{
              id: $id
              name: $name
              surname: $surname
              email: $email
              valid: $valid
              lastchange: $lastchange
            })
            {
              id
              msg
            }
          }
      `,
      variables: {
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        valid: true,
        lastchange: user.lastchange,
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
    body: JSON.stringify(authorizationUpdateUserMutationJSON(user)),
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
