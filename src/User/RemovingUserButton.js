import { DeleteButton } from "components/DeleteButton";
import { Trash } from "react-bootstrap-icons";

export const UserRemoveButton = ({ page, user, actions }) => {
  const onClick = () => {
    console.log("delete user");
    actions.onUserRemove({ page: page, user: user });
  };
  return (
    <DeleteButton onClick={onClick}>
      <Trash /> Delete
    </DeleteButton>
  );
};
