import { DeleteButton } from "components/DeleteButton";
import { Trash } from "react-bootstrap-icons";

export const GroupRemoveButton = ({ page, group, actions }) => {
  const onClick = () => {
    // remove group from page
    actions.onGroupRemove({ page: page, group: group });

    // update group valid to false in server
    actions.onMutationUpdateGroup({ group: group, groupvalid: false });

    // show deleted group in console
    console.log("User deleted");
    console.log(group);

    // update page
    actions.pageFetch(page.id);
  };
  return (
    <DeleteButton onClick={onClick}>
      <Trash />
    </DeleteButton>
  );
};
