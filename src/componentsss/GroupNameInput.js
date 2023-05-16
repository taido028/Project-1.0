
import { TextInput} from "./TextInput"
export const GroupNameInput = ({group, actions}) => {
    const onchange = (value) => {
        //console.log("changed", value)

        actions.groupAsyncUpdate({...group, name: value})
            .then(json=>console.log("GroupNameInput", json.data.groupUpdate.msg))
    }
    return (
        <TextInput id={group.id} value={group.name} placeholder={"název skupiny"} onChange={onchange}/>
    )
}