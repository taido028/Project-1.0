import { Trash } from 'react-bootstrap-icons';
import { TextInput } from './TextInput';
import { DeleteButton } from 'components/DeleteButton';
import { GroupMemberRemoveButton } from './GroupMemberRemoveButton';


/**
 * One member as a table row
 * @param {*} param0 
 * @returns 
 */
export const GroupMemberTableRow = ({ user, actions, gid}) => {
    
    //remove button action
    const onclick = () => {
        const payload = {group: {id: gid}, user: user}
        actions.onGroupMemberRemove(payload)
    }

    //change email callback
    const onChangeEmail = (value) => {
        if (actions.GroupMemberUpdate) {
            const payload = {group: {id: gid}, user: {...user, email: value}}
            actions.onGroupMemberUpdate(payload)
        }
    }

    
   
    return (
        <tr>
            <td>{user.id}</td>
            
            
            <td>
                <TextInput placeholder={"email"} id={user.id} value={user.email} onChange={onChangeEmail}/>
            </td>
            <td>
                <DeleteButton onClick={onclick}><Trash /> Smaž</DeleteButton><br/>
                <GroupMemberRemoveButton group={{id: gid}} user={user} actions={actions} />
            </td>
        </tr>
    )
}