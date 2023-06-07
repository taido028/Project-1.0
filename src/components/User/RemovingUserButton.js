import { DeleteButton } from "components/DeleteButton";
import { Trash } from "react-bootstrap-icons";

export const UserRemoveButton = ({ page, user, actions }) => {
  const onClick = () => {
    actions.onMutationUpdateUser({ user: user, uservalid: false });
    console.log("User deleted");
    console.log(user);
    actions.pageFetch(page.id);
  };
  return (
    <DeleteButton onClick={onClick}>
      <Trash />
    </DeleteButton>
  );
};
