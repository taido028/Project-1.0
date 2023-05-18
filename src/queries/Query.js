import { authorizedFetch } from "../fetch/authorizedFetch"


export const GroupQueryJSON = (id) => ({
    "query":
       `query($id: ID!){
           authorizationById (id: $id){
               id
               users {
                  id 
                  user {
                     id
                     email
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
       "variables": {"id": id}
})

export const GroupQuery = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(GroupQueryJSON(id)),
    })