import { AddingUserButton } from "./AddingUserButton";
import { UserTableRow } from "./UserTableRow";
import { UserSearchBox } from "./UserSearchBox";
/**
 * Renders a table displaying a list of users. Each user has an id, name, surname,
 * email, access level and associated actions. There's also an option to add a new user.
 *
 * @component
 *
 * @param {Object} props - The properties passed to this component.
 * @param {Object} props.page - Page object which contains information about the users.
 * @param {Object} props.actions - Actions which can be performed on a user.
 *
 * @returns {JSX.Element} JSX to create a table of users.
 */

export const UsersTable = ({ page, actions }) => {
  return (
    <div>
      <tr>
        <table className="table table-hover table-stripped" class="user-table">
          <thead>
            <tr class="first top">
              <th class="first top">Id</th>
              <th class="first top">Name</th>
              <th class="first top">Surname</th>
              <th class="first top">Email</th>
              <th class="first top">Access Level</th>
              <th class="first top">Actions</th>
            </tr>
          </thead>
          <tbody>
            <>
              {" "}
              {page?.users?.map((u) => (
                <UserTableRow
                  key={u.user.id}
                  user={u.user}
                  actions={actions}
                  page={page}
                />
              ))}{" "}
            </>
          </tbody>
        </table>
      </tr>

      <tr>
        <td>
          <AddingUserButton page={page} actions={actions} />
        </td>

        <td className="searchbar">
          <td>
            <h3>User search box: </h3>
          </td>
          <td>
            <UserSearchBox page={page} actions={actions} />
          </td>
        </td>
      </tr>
    </div>
  );
};
