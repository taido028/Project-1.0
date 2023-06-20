import { UserRemoveButton } from "./RemovingUserButton";
import { AccessLevelDisplay } from "components/User/AccessLevelDisplay";
import { ChangeAccessLevelButton } from "components/User/ChangeAccessLevelButton";
/**
 * Represents one user as a row in the table. Each user has an id, name, surname,
 * email, access level and associated actions. There's also an option to remove the user
 * and change their access level.
 *
 * @component
 *
 * @param {Object} props - The properties passed to this component.
 * @param {Object} props.user - User object containing information about the user.
 * @param {Object} props.actions - Actions which can be performed on the user.
 * @param {Object} props.page - Page object which contains information about the users.
 *
 * @returns {JSX.Element} JSX to create a row in the user table.
 */

export const UserTableRow = ({ user, actions, page }) => {
  return (
    <tr>
      <td className="user">{user.id}</td>
      <td className="user">{user.name}</td>
      <td className="user">{user.surname}</td>
      <td className="user">{user.email}</td>
      <td className="user">
        <AccessLevelDisplay user={user} page={page} />
      </td>
      <td className="user">
        <td>
          <UserRemoveButton page={page} user={user} actions={actions} />
        </td>
        <td>
          <ChangeAccessLevelButton page={page} user={user} actions={actions} />
        </td>
      </td>
    </tr>
  );
};
