import { authorizedFetch } from "../fetch/authorizedFetch"


export const GroupQueryJSON = (id) => ({
    "query":
       `query($id: ID!){
        groupTypeById (id: $id)
        {
               id
               lastchange
           
        }
    }`,
       "variables": {"id": id}
})

export const GroupQuery = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(GroupQueryJSON(id)),
    })