import { authorizedFetch } from "fetch/authorizedFetch";

export const UserQueryJSON = (id) => ({
  query: `query ($id: ID!) {
            userById(id: $id) {
                id
                name
                surname
                email
                valid
                lastchange
                }
            }
        }`,
  variables: { id: id },
});
export const UserQuery = (id) =>
  authorizedFetch("/gql", {
    body: JSON.stringify(UserQueryJSON(id)),
  });
