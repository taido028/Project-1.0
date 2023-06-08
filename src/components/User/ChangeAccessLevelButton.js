import { ArrowUpSquareFill, ArrowDownSquareFill } from "react-bootstrap-icons";

export const ChangeAccessLevelButton = ({ user, page, actions }) => {
  // get userlist from page
  const UserList = page.users;

  // find the user in the userlist
  const Target = UserList.find((u) => u.user.id === user.id);

  // if the accesslevel is 2, return a down icon
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
  // if the accesslevel is 1, return an up icon
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
