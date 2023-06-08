import { actions } from "store/store";

export const AddUserMutation =
  (userId, page, accesslevel) => (dispatch, getState) => {
    const authorizationAddUserMutationJSON = (userId) => {
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
      body: JSON.stringify(authorizationAddUserMutationJSON(userId)),
    };

    return (
      fetch("/api/gql", params)
        //return authorizedFetch('/api/gql', params)
        .then((resp) => resp.json())
        .then((json) => {
          return json;
        })
        .then((json) => {
          // Get user list from response
          const users = json.data.authorizationAddUser.authorization.users;

          // Get the added user from user list
          const FilterUser = users.filter(
            (users) => users.user.id === userId
          )[0];
          //console.log("Added user:");
          const AddedUser = FilterUser.user;
          //console.log(AddedUser);

          // Get the new page from response
          const page = json.data.authorizationAddUser.authorization;

          // update valid for user already exist in store with valid = false
          actions.onMutationUpdateUser({ user: AddedUser, uservalid: true });
          actions.pageFetch(page.id);
          //actions.onUserUpdate({ user: AddedUser, page: page });
          //actions.onPageUpdate(page);

          console.log("Sucessfully added new user");
        })
    );
  };
