import { DeleteButton } from "components/DeleteButton"

export const GroupMemberRemoveButton = ({group, user, actions}) => {
    const onClick = () => {
        console.log('jdu smazat uzivatele')
        actions.onGroupMemberRemove({group: group, user: user})
    }
    return (
        <DeleteButton onClick={onClick}>Del</DeleteButton>
    )
}