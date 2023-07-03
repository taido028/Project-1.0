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
  // get grouplist from page
  const GroupList = page.groups;

  // find the group in the grouplist
  const Target = GroupList.find((g) => g.group.id === group.id);

  // return icon base on accesslevel
  return Target.accesslevel === 2 ? (
    <button className="button-with-icon">
      <ArrowDownSquareFill
        className="down"
        onClick={() => {
          actions.onMutationAddGroup({
            groupId: group.id,
            accesslevel: 1,
            page: page,
          });
        }}
      />
    </button>
  ) : (
    <button className="button-with-icon">
      <ArrowUpSquareFill
        className="up"
        onClick={() => {
          actions.onMutationAddGroup({
            groupId: group.id,
            accesslevel: 2,
            page: page,
          });
        }}
      />
    </button>
  );
};
