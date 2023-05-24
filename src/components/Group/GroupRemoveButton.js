import { DeleteButton } from "components/DeleteButton";
import { Trash } from "react-bootstrap-icons";

export const GroupRemoveButton = ({ page, group, actions }) => {
  const onClick = () => {
    console.log("delete user");
    actions.onGroupRemove({ page: page, group: group });
  };
  return (
    <DeleteButton onClick={onClick}>
      <Trash />
    </DeleteButton>
  );
};
