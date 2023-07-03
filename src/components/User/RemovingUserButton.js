import { DeleteButton } from "components/DeleteButton";
import { Trash } from "react-bootstrap-icons";
/**
 * UserRemoveButton is a component that allows the removal of a user when clicked.
 *
 * @component
 *
 * @param {Object} props - The properties that define the UserRemoveButton component
 * @param {Object} props.page - The page containing the user
 * @param {Object} props.user - The user that needs to be removed
 * @param {Object} props.actions - The actions that can be performed on the user
 *
 * @returns {JSX.Element} The UserRemoveButton component
 */

export const UserRemoveButton = ({ page, user, actions }) => {
  const onClick = () => {
    // Get list of users from page
    const UserList = page.users;

    // Find the user that matches the given user id
    const Target = UserList.find((u) => u.user.id === user.id);

    // remove user form server
    actions.onMutationRemoveUser({
      userId: user.id,
      page: page,
      accesslevel: Target.accesslevel,
    });

    // Call action to remove user from state
    actions.onUserRemove({ page: page, user: user });

    // show deleted user in console
    console.log("User deleted: " + user.name);
  };
  return (
    <DeleteButton onClick={onClick}>
      <Trash />
    </DeleteButton>
  );
};
