import { DeleteButton } from "components/DeleteButton";
import { Trash } from "react-bootstrap-icons";
/**
 * Component that displays a button for removing a group.
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.page - The page object, which contains a list of groups
 * @param {Object} props.group - The group object to be removed
 * @param {Object} props.actions - An object with actions that can be performed, used to remove the group and update the page
 * @returns {JSX.Element} A button that, when clicked, removes the group and updates the page
 */

export const GroupRemoveButton = ({ page, group, actions }) => {
  /**
   * Function that gets called when the remove button is clicked. It removes the group from the page, logs the deleted group in the console,
   * and updates the page.
   */

  const onClick = () => {
    // Remove group from store
    actions.onGroupRemove({ page: page, group: group });

    // Find the target group
    const GroupList = page.groups;
    const Target = GroupList.find((g) => g.group.id === group.id);

    // Remove group from server
    actions.onMutationRemoveGroup({
      groupId: group.id,
      page: page,
      accesslevel: Target.accesslevel,
    });

    // Show deleted group in console
    console.log("Group deleted: " + group.name);
  };
  return (
    <DeleteButton onClick={onClick}>
      <Trash />
    </DeleteButton>
  );
};
