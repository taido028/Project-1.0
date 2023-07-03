import { Book, Pencil } from "react-bootstrap-icons";

/**
 * AccessLevelDisplay component
 *
 * @component
 *
 * @param {Object} props
 * @param {Object} props.user - The user object
 * @param {Object} props.page - The page object
 *
 * @returns {JSX.Element} If the access level is 1, return a book icon, else if it's 2, return a pencil icon
 */

export const AccessLevelDisplay = ({ user, page }) => {
  // get userlist from page
  const UserList = page.users;

  // find the user in the userlist
  const Target = UserList.find((u) => u.user.id === user.id);

  // if the accesslevel is 1, return a book icon
  if (Target.accesslevel === 1) return <Book className="read" />;
  // if the accesslevel is 2, return a pencil icon
  else if (Target.accesslevel === 2) return <Pencil className="write" />;
};
