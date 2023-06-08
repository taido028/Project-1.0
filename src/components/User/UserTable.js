import { Adding_User_Button } from "./AddingUserButton";
import { UserTableRow } from "./UserTableRow";
/**
 * List of members as a table
 * @param {*} param0
 * @returns
 */
export const UsersTable = ({ page, actions }) => {
  return (
    <table className="table table-hover table-stripped">
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
          <br />
          <Adding_User_Button page={page} actions={actions} />
        </>
      </tbody>
    </table>
  );
};
