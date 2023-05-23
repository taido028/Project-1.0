import { Trash } from "react-bootstrap-icons";
import { DeleteButton } from "components/DeleteButton";
import { GroupRemoveButton } from "./GroupRemoveButton";

/**
 * One member as a table row
 * @param {*} param0
 * @returns
 */
export const GroupTableRow = ({ index, group, actions, gid }) => {
  //change email callback
  /*
    const onChangeEmail = (value) => {
        if (actions.GroupUpdate) {
            const payload = {group: {id: gid}, user: {...user, email: value}}
            actions.onGroupUpdate(payload)
        }
    }
    */

  return (
    <tr>
      <td>{index}</td>
      <td>{group.id}</td>
      <td>{group.name}</td>
      {
        <td>
          <GroupRemoveButton
            page={{ id: gid }}
            group={group}
            actions={actions}
          />
        </td>
      }
    </tr>
  );
};