import { DeleteButton } from "components/DeleteButton";
import { Trash } from "react-bootstrap-icons";

export const UserRemoveButton = ({ page, user, actions }) => {
  const onClick = () => {
    // remove user from page
    //actions.onUserRemove({ page: page, user: user });

    const UserList = page.users;
    const Target = UserList.find((u) => u.user.id === user.id);

    actions.onMutationRemoveUser({
      userId: user.id,
      page: page,
      accesslevel: Target.accesslevel,
    });

    actions.onUserRemove({ page: page, user: user });

    // show deleted user in console
    console.log("User deleted");
    console.log(user);
  };
  return (
    <DeleteButton onClick={onClick}>
      <Trash />
    </DeleteButton>
  );
};
