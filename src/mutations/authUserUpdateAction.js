export const UpdateUserMutation = (user, uservalid) => (dispatch, getState) => {
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
              user
              {
                id
                name
                surname
                email
                valid
                lastchange
              }
            }
          }
      `,
      variables: {
        id: user.id,
        name: user.name,
        surname: user.surname,
        email: user.email,
        valid: uservalid,
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
        return json;
      })
      .then((json) => {
        console.log("Updated User");
        console.log(json.data.userUpdate.user);
      })
  );
};
