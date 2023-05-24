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
      <td>{index}</td>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.email}</td>
      <td>
        <UserRemoveButton page={{ id: gid }} user={user} actions={actions} />
      </td>
    </tr>
  );
};
