import { DeleteButton } from "components/DeleteButton"
import { Trash } from "react-bootstrap-icons"

export const GroupMemberRemoveButton = ({group, user, actions}) => {
    const onClick = () => {
        console.log('delete user')
        actions.onGroupMemberRemove({group: group, user: user})
    }
    return (
       <DeleteButton onClick={onClick}><Trash/> Delete</DeleteButton>
    )
}