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
  if (user.valid === true) {
    return (
      <tr>
        <td class="user">{user.id}</td>
        <td class="user">{user.name}</td>
        <td class="user">{user.surname}</td>
        <td class="user">{user.email}</td>
        <td class="user">
          <AccessLevelDisplay user={user} page={page} />
        </td>
        <td class="user">
          <td>
            <UserRemoveButton
              page={{ id: page.id }}
              user={user}
              actions={actions}
            />
          </td>
          <td>
            <ChangeAccessLevelButton
              page={page}
              user={user}
              actions={actions}
            />
          </td>
        </td>
      </tr>
    );
  }
};
