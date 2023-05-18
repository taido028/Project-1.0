import { Trash } from 'react-bootstrap-icons';
import { TextInput } from './TextInput';
import { DeleteButton } from 'components/DeleteButton';
import { GroupMemberRemoveButton } from './GroupMemberRemoveButton';


/**
 * One member as a table row
 * @param {*} param0 
 * @returns 
 */
export const GroupMemberTableRow = ({ index, user, actions, gid}) => {
    

    //change email callback
    const onChangeEmail = (value) => {
        if (actions.GroupMemberUpdate) {
            const payload = {group: {id: gid}, user: {...user, email: value}}
            actions.onGroupMemberUpdate(payload)
        }
    }

    
   
    return (
        <tr>
            <td>{index}</td>
            <td>{user.id}</td>
            <td>
                <TextInput placeholder={"email"} id={user.id} value={user.email} onChange={onChangeEmail}/>
            </td>
            <td>
                <GroupMemberRemoveButton group={{id: gid}} user={user} actions={actions} />
            </td>
        </tr>
    )
}