import { authorizedFetch } from "../fetch/authorizedFetch";

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
                  group{
                     id
                     name
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

export const AuthorizationPageQuery = (id) =>
  authorizedFetch("/gql", {
    body: JSON.stringify(AuthorizationPageQueryJSON(id)),
  });
