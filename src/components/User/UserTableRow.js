import { UserRemoveButton } from "./RemovingUserButton";

/**
 * One member as a table row
 * @param {*} param0
 * @returns
 */
export const UserTableRow = ({ index, user, actions, gid }) => {
  //change email callback
  const onChangeEmail = (value) => {
    if (actions.UserUpdate) {
      const payload = { group: { id: gid }, user: { ...user, email: value } };
      actions.onUserUpdate(payload);
    }
  };

  return (
    <tr>
      <td class="user">{index}</td>
      <td class="user">{user.id}</td>
      <td class="user">{user.name}</td>
      <td class="user">{user.surname}</td>
      <td class="user">{user.email}</td>
      <td class="user">
        <UserRemoveButton page={{ id: gid }} user={user} actions={actions} />
      </td>
    </tr>
  );
};
