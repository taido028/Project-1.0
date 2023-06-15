import { DeleteButton } from "components/DeleteButton";
import { Trash } from "react-bootstrap-icons";

export const GroupRemoveButton = ({ page, group, actions }) => {
  const onClick = () => {
    // remove group from page
    actions.onGroupRemove({ page: page, group: group });

    const GroupList = page.groups;
    const Target = GroupList.find((g) => g.group.id === group.id);

    actions.onMutationRemoveGroup({
      groupId: group.id,
      page: page,
      accesslevel: Target.accesslevel,
    });

    // show deleted group in console
    console.log("User deleted");
    console.log(group);

    // update page
    //actions.pageFetch(page.id);
  };
  return (
    <DeleteButton onClick={onClick}>
      <Trash />
    </DeleteButton>
  );
};
