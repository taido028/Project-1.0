import { DeleteButton } from "components/DeleteButton";
import { Trash } from "react-bootstrap-icons";

export const UserRemoveButton = ({ page, user, actions }) => {
  const onClick = () => {
    console.log("delete user");
    actions.onMutationUpdateUser({ user: user, uservalid: false });
    //RefetchPage(page.id).then((page) => actions.onPageUpdate(page));
    //actions.onUserRemove({ user: user, page: page });
    console.log("User deleted");
    console.log(user);
    actions.onUserUpdate({ user: user, page: page });
    //actions.pageFetch(page.id);
  };
  return (
    <DeleteButton onClick={onClick}>
      <Trash />
    </DeleteButton>
  );
};
