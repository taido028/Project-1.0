import { ArrowUpSquareFill, ArrowDownSquareFill } from "react-bootstrap-icons";

export const ChangeAccessLevelButton = ({ user, page, actions }) => {
  const UserList = page.users;
  const Target = UserList.find((u) => u.user.id === user.id);
  if (Target.accesslevel === 2)
    return (
      <ArrowDownSquareFill
        class="down"
        onClick={() => {
          actions.onMutationAddUser({
            userId: user.id,
            accesslevel: 1,
            page: page,
          });
        }}
      />
    );
  else if (Target.accesslevel === 1)
    return (
      <ArrowUpSquareFill
        class="up"
        onClick={() => {
          actions.onMutationAddUser({
            userId: user.id,
            accesslevel: 2,
            page: page,
          });
        }}
      />
    );
};
