import { Adding_User_Button } from "./AddingUserButton";
import { UserTableRow } from "./UserTableRow";

/**
 * List of members as a table
 * @param {*} param0
 * @returns
 */
export const UsersTable = ({ page, actions }) => {
  const indexcheck = (user, index) => {
    if (user.valid === true) return index + 1;
    else return index;
  };

  return (
    <table className="table table-hover table-stripped">
      <thead>
        <tr class="first top">
          <th>#</th>
          <th class="first top">Id</th>
          <th class="first top">Jméno</th>
          <th class="first top">Příjmení</th>
          <th class="first top">Email</th>
          <th class="first top">Actions</th>
        </tr>
      </thead>
      <tbody>
        <>
          {" "}
          {page?.users?.map((u, index) => (
            <UserTableRow
              key={u.user.id}
              user={u.user}
              index={indexcheck(u.user, index)}
              actions={actions}
              gid={page.id}
            />
          ))}{" "}
          <br />
          <Adding_User_Button page={page} actions={actions} />
        </>
      </tbody>
    </table>
  );
};
