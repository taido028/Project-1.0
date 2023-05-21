import { Adding_User_Button } from "./AddingUserButton";
import { UserTableRow } from "./UserTableRow";

/**
 * List of members as a table
 * @param {*} param0
 * @returns
 */
export const UsersTable = ({ page, actions }) => {
  //console.log(group.memberships)
  return (
    <table className="table table-hover table-stripped">
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <>
          {" "}
          {page?.users?.map((u, index) => (
            <UserTableRow
              key={u.user.id}
              user={u.user}
              index={index + 1}
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
