import { actions } from "store/store";

export const AddUserMutation =
  (userId, page, accesslevel) => (dispatch, getState) => {
    const authorizationAddUserMutationJSON = () => {
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
              accesslevel
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
      body: JSON.stringify(authorizationAddUserMutationJSON()),
    };

    return fetch("/api/gql", params)
      .then((resp) => resp.json())
      .then((json) => {
        return json;
      })
      .then((json) => {
        // Get user list from response
        const users = json.data.authorizationAddUser.authorization.users;

        const newpage = json.data.authorizationAddUser.authorization;

        // Get the added user from user list
        const FilterUser = users.filter((users) => users.user.id === userId)[0];
        const AddedUser = FilterUser.user;

        const CheckUser = page.users.find((users) => users.user.id === userId);

        if (!CheckUser) {
          // Show added user in console
          console.log("Added user:");
          console.log(AddedUser);

          // Add user to store
          actions.onUserAdd({ user: AddedUser, page: newpage });

          console.log("Sucessfully added new user");
        } else {
          console.log("User's accesslevel updated " + accesslevel);
          actions.onUserUpdate({
            user: AddedUser,
            page: newpage,
            accesslevel: accesslevel,
          });
        }
      });
  };
