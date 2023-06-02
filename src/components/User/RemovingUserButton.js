import { DeleteButton } from "components/DeleteButton";
import { Trash } from "react-bootstrap-icons";

export const UserRemoveButton = ({ page, user, actions }) => {
  const onClick = () => {
    console.log("delete user");
    actions.onMutationUpdateUser({ user: user });
    window.location.reload(true);
  };
  return (
    <DeleteButton onClick={onClick}>
      <Trash />
    </DeleteButton>
  );
};
