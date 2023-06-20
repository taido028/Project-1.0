import { authorizedFetch } from "../fetch/authorizedFetch";
/**
 * Function that returns the GraphQL query string for the AuthorizationPageQuery operation.
 *
 * @param {string} id - The id of the authorization.
 * @returns {Object} The GraphQL query string and variables for the AuthorizationPageQuery operation.
 */

export const AuthorizationPageQueryJSON = (id) => ({
  query: `query($id: ID!){
           authorizationById (id: $id){
               id
               users {
                  id 
                  accesslevel
                  user {
                     id
                     name
                     surname
                     email
                     valid
                     lastchange
                  }    
               }
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
               roleTypes{
                id
                roleType{
                    id
                    name
                }
                group{
                    id
                    name
                }
               }
           }
       }`,
  variables: { id: id },
});
/**
 * Function that performs a GraphQL request to get the authorization details.
 *
 * @function
 * @param {string} id - The id of the authorization.
 * @returns {Promise} A promise that resolves to the response of the GraphQL request.
 */

export const AuthorizationPageQuery = (id) =>
  authorizedFetch("/gql", {
    body: JSON.stringify(AuthorizationPageQueryJSON(id)),
  });
