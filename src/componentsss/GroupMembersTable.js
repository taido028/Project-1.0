import { Adding_Member_Button } from "./AddingUserButton"
import { GroupMemberTableRow } from "./GroupMemberTableRow"

/**
 * List of members as a table
 * @param {*} param0 
 * @returns 
 */
export const GroupMembersTable = ({group, actions}) => {
    //console.log(group.memberships)
    return (
        <table className="table table-hover table-stripped">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
               <> {group?.users?.map(
                    (u, index) => <GroupMemberTableRow key={u.user.id} user={u.user} index={index + 1} actions={actions} gid={group.id}/>
                   
                )} <br/>

                <Adding_Member_Button group={group} actions={actions}/>
                </>
            </tbody>
        </table>
      
    )
}