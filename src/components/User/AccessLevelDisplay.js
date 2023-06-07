import { Book, Pencil } from "react-bootstrap-icons";

export const AccessLevelDisplay = ({ user, page }) => {
  const UserList = page.users;
  const Target = UserList.find((u) => u.user.id === user.id);
  if (Target.accesslevel === 1) return <Book class="read" />;
  else if (Target.accesslevel === 2) return <Pencil class="write" />;
};
