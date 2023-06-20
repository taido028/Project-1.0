import { Book, Pencil } from "react-bootstrap-icons";

/**
 * Displays an icon based on the access level of a group.
 * The access level is determined by searching through the groups on the given page.
 *
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.group - The group object, it contains the group id.
 * @param {Object} props.page - The page object, it contains a list of groups with their access levels.
 * @returns {JSX.Element} A `Book` icon for read access (access level 1), a `Pencil` icon for write access (access level 2), or nothing if no matching group is found or if the access level doesn't match 1 or 2.
 */
const AccessLevelDisplay = ({ group, page }) => {
  const GroupList = page.groups;
  const Target = GroupList.find((g) => g.group.id === group.id);
  if (Target?.accesslevel === 1) return <Book className="read" />;
  else if (Target?.accesslevel === 2) return <Pencil className="write" />;
};

export default AccessLevelDisplay;
