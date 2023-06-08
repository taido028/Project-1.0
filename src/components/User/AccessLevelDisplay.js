import { Book, Pencil } from "react-bootstrap-icons";

export const AccessLevelDisplay = ({ user, page }) => {
  // get userlist from page
  const UserList = page.users;

  // find the user in the userlist
  const Target = UserList.find((u) => u.user.id === user.id);

  // if the accesslevel is 1, return a book icon
  if (Target.accesslevel === 1) return <Book class="read" />;
  // if the accesslevel is 2, return a pencil icon
  else if (Target.accesslevel === 2) return <Pencil class="write" />;
};
