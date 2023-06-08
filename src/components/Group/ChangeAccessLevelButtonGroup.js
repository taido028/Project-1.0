import { ArrowUpSquareFill, ArrowDownSquareFill } from "react-bootstrap-icons";

export const ChangeAccessLevelButtonGroup = ({ group, page, actions }) => {
  const GroupList = page.groups;
  const Target = GroupList.find((g) => g.group.id === group.id);
  if (Target.accesslevel === 2)
    return (
      <ArrowDownSquareFill
        class="down"
        onClick={() => {
          actions.onMutationAddGroup({
            groupId: group.id,
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
          actions.onMutationAddGroup({
            groupId: group.id,
            accesslevel: 2,
            page: page,
          });
        }}
      />
    );
};
