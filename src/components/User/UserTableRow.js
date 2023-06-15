import { UserRemoveButton } from "./RemovingUserButton";
import { AccessLevelDisplay } from "components/User/AccessLevelDisplay";
import { ChangeAccessLevelButton } from "components/User/ChangeAccessLevelButton";
/**
 * One member as a table row
 * @param {*} param0
 * @returns
 */
export const UserTableRow = ({ user, actions, page }) => {
  //change email callback
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
