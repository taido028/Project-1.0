import { Adding_Group_Button } from "./AddingGroupButton";
import { GroupTableRow } from "./GroupTableRow";

/**
 * List of members as a table
 * @param {*} param0
 * @returns
 */
export const GroupTable = ({ page, actions }) => {
  //console.log(group.memberships)
  return (
    <table className="table table-hover table-stripped">
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Group Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <>
          {" "}
          {page?.groups?.map((u, index) => (
            <GroupTableRow
              key={u.group.id}
              group={u.group}
              index={index + 1}
              actions={actions}
              gid={page.id}
            />
          ))}{" "}
          <br />
          <Adding_Group_Button page={page} actions={actions} />
        </>
      </tbody>
    </table>
  );
};
