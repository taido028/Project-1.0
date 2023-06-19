import { AddingGroupButton } from "./AddingGroupButton";
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
        <tr class="first top">
          <th class="first top">Id</th>
          <th class="first top">Group Name</th>
          <th class="first top">Access Level</th>
          <th class="first top">Actions</th>
        </tr>
      </thead>
      <tbody>
        <>
          {" "}
          {page?.groups?.map((u) => (
            <GroupTableRow
              key={u.group.id}
              group={u.group}
              actions={actions}
              page={page}
            />
          ))}{" "}
          <br />
          <AddingGroupButton page={page} actions={actions} />
        </>
      </tbody>
    </table>
  );
};
