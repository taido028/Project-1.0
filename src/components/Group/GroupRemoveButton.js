import { DeleteButton } from "components/DeleteButton";
import { Trash } from "react-bootstrap-icons";

export const GroupRemoveButton = ({ page, group, actions }) => {
  const onClick = () => {
    actions.onGroupRemove({ page: page, group: group });
    actions.onMutationUpdateGrouo({ group: group, groupvalid: false });
    console.log("User deleted");
    //console.log(group);
    actions.pageFetch(page.id);
  };
  return (
    <DeleteButton onClick={onClick}>
      <Trash />
    </DeleteButton>
  );
};
