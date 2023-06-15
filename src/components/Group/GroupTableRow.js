import { AccessLevelDisplay } from "components/Group/AccessLevelDisplay";
import { GroupRemoveButton } from "./RemovingGroupButton";
import { ChangeAccessLevelButtonGroup } from "./ChangeAccessLevelButtonGroup";

/**
 * One member as a table row
 * @param {*} param0
 * @returns
 */
export const GroupTableRow = ({ group, actions, page }) => {
  return (
    <tr>
      <td class="user">{group.id}</td>
      <td class="user">{group.name}</td>
      <td class="user">
        <AccessLevelDisplay group={group} page={page} />
      </td>
      <td class="user">
        <td>
          <GroupRemoveButton page={page} group={group} actions={actions} />
        </td>
        <td>
          <ChangeAccessLevelButtonGroup
            page={page}
            group={group}
            actions={actions}
          />
        </td>
      </td>
    </tr>
  );
};
