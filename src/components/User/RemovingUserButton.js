import { DeleteButton } from "components/DeleteButton";
import { Trash } from "react-bootstrap-icons";

export const UserRemoveButton = ({ page, user, actions }) => {
  const onClick = () => {
    console.log("delete user");
    actions.onMutationUpdateUser({ user: user, uservalid: false });
    actions.onUserRemove({ user: user, page: page });
  };
  return (
    <DeleteButton onClick={onClick}>
      <Trash />
    </DeleteButton>
  );
};
