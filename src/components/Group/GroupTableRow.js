import AccessLevelDisplay from "components/Group/AccessLevelDisplay";
import { GroupRemoveButton } from "./RemovingGroupButton";
import { ChangeAccessLevelButtonGroup } from "./ChangeAccessLevelButtonGroup";

/**
 * Component that displays a group member as a row in a table.
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.group - The group object to be displayed in the row
 * @param {Object} props.actions - An object with actions that can be performed, passed to the GroupRemoveButton and ChangeAccessLevelButtonGroup components
 * @param {Object} props.page - The page object, which is passed to the AccessLevelDisplay, GroupRemoveButton, and ChangeAccessLevelButtonGroup components
 * @returns {JSX.Element} A table row displaying the group member information, an access level display, a remove button, and a change access level button
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
