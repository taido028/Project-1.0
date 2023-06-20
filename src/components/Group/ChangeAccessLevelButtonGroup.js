import { ArrowUpSquareFill, ArrowDownSquareFill } from "react-bootstrap-icons";
/**
 * Component that displays a button to change the access level of a group.
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.group - The group whose access level may be changed
 * @param {Object} props.page - The page object, which contains a list of groups
 * @param {Object} props.actions - An object with actions that can be performed, includes `onMutationAddGroup`
 * @returns {JSX.Element|null} An upward arrow button if the group's access level is 1, a downward arrow button if the access level is 2, or null if the access level is neither
 */

export const ChangeAccessLevelButtonGroup = ({ group, page, actions }) => {
  const GroupList = page.groups;
  const Target = GroupList.find((g) => g.group.id === group.id);
  if (Target.accesslevel === 2)
    return (
      <ArrowDownSquareFill
        class="down"
        onClick={() => {
          actions.onMutationAddGroup({
            groupId: group.id,
            accesslevel: 1,
            page: page,
          });
        }}
      />
    );
  else if (Target.accesslevel === 1)
    return (
      <ArrowUpSquareFill
        class="up"
        onClick={() => {
          actions.onMutationAddGroup({
            groupId: group.id,
            accesslevel: 2,
            page: page,
          });
        }}
      />
    );
  else return null;
};
