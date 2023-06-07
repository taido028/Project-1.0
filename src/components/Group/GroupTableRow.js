import { Trash } from "react-bootstrap-icons";
import { DeleteButton } from "components/DeleteButton";
import { GroupRemoveButton } from "./GroupRemoveButton";

/**
 * One member as a table row
 * @param {*} param0
 * @returns
 */
export const GroupTableRow = ({ index, group, actions, gid }) => {
  return (
    <tr>
      <td class="user">{index}</td>
      <td class="user">{group.id}</td>
      <td class="user">{group.name}</td>
      {
        <td class="user">
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
