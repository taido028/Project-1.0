import { AddingGroupButton } from "./AddingGroupButton";
import { GroupTableRow } from "./GroupTableRow";
import { GroupSearchBox } from "./GroupSearchBox";
/**
 * Component that displays a list of group members as a table.
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.page - The page object, which contains a list of groups
 * @param {Object} props.actions - An object with actions that can be performed, passed to the GroupTableRow and AddingGroupButton components
 * @returns {JSX.Element} A table with each row rendered by the GroupTableRow component and a button rendered by the AddingGroupButton component
 */

export const GroupTable = ({ page, actions }) => {
  return (
    <div>
      <table className="group-table">
        <thead>
          <tr className="first top">
            <th className="first top">Id</th>
            <th className="first top">Group Name</th>
            <th className="first top">Access Level</th>
            <th className="first top">Actions</th>
            <th className="first top">Change level</th>
          </tr>
        </thead>
        <tbody>
          {page?.groups?.map((u) => (
            <GroupTableRow
              key={u.group.id}
              group={u.group}
              actions={actions}
              page={page}
            />
          ))}
        </tbody>
      </table>
      <AddingGroupButton page={page} actions={actions} />
      <div className="searchbar">
        <h3>Group search box: </h3>
        <GroupSearchBox page={page} actions={actions} />
      </div>
    </div>
  );
};
