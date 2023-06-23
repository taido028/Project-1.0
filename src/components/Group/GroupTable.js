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
  //console.log(group.memberships)
  return (
    <div>
      <tr>
        <table className="table table-hover table-stripped" class="group-table">
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
            </>
          </tbody>
        </table>
      </tr>

      <td>
        <AddingGroupButton page={page} actions={actions} />
      </td>

      <td>
        <div className="searchbar">
          <td>
            <h3>Group's search box: </h3>
          </td>
          <td>
            <GroupSearchBox page={page} actions={actions} />
          </td>
        </div>
      </td>
    </div>
  );
};
