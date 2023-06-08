import { Book, Pencil } from "react-bootstrap-icons";

export const AccessLevelDisplay = ({ group, page }) => {
  const GroupList = page.groups;
  const Target = GroupList.find((g) => g.group.id === group.id);
  if (Target.accesslevel === 1) return <Book class="read" />;
  else if (Target.accesslevel === 2) return <Pencil class="write" />;
};
