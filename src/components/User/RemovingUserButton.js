import { DeleteButton } from "components/DeleteButton";
import { Trash } from "react-bootstrap-icons";

export const UserRemoveButton = ({ page, user, actions }) => {
  const onClick = () => {
    // remove user from page
    actions.onUserRemove({ page: page, user: user });

    // update user valid to false in server
    actions.onMutationUpdateUser({ user: user, uservalid: false });

    // show deleted user in console
    console.log("User deleted");
    console.log(user);

    // update page
    actions.pageFetch(page.id);
  };
  return (
    <DeleteButton onClick={onClick}>
      <Trash />
    </DeleteButton>
  );
};
