export const UpdateGroupMutation =
  (group, groupvalid) => (dispatch, getState) => {
    const authorizationUpdateGroupMutationJSON = (group) => {
      return {
        query: `mutation ($id:ID!, $name:String!, $valid:Boolean!, $lastchange:DateTime!){
            groupUpdate(group :{
              id: $id
              name: $name
              valid: $valid
              lastchange: $lastchange
            })
            {
              id
              msg
              group{
                id
                name
                valid
                lastchange
              }
            }
          }
        `,
        variables: {
          id: group.id,
          name: group.name,
          valid: groupvalid,
          lastchange: group.lastchange,
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
      body: JSON.stringify(authorizationUpdateGroupMutationJSON(group)),
    };

    return (
      fetch("/api/gql", params)
        //return authorizedFetch('/api/gql', params)
        .then((resp) => resp.json())
        .then((json) => {
          return json;
        })
        .then((json) => {
          //console.log("Updated Group");
          //console.log(json.data.groupUpdate.group);
        })
    );
  };
