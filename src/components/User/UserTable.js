import { AddingUserButton } from "./AddingUserButton";
import { UserTableRow } from "./UserTableRow";
import { UserSearchBox } from "./UserSearchBox";

export const UsersTable = ({ page, actions }) => {
  return (
    <div>
      <table className="user-table">
        <thead>
          <tr className="first top">
            <th className="first top">Id</th>
            <th className="first top">Name</th>
            <th className="first top">Surname</th>
            <th className="first top">Email</th>
            <th className="first top">Access Level</th>
            <th className="first top">Actions</th>
            <th className="first top">Change level</th>
          </tr>
        </thead>
        <tbody>
          {page?.users?.map((u) => (
            <UserTableRow
              key={u.user.id}
              user={u.user}
              actions={actions}
              page={page}
            />
          ))}
        </tbody>
      </table>
      <AddingUserButton page={page} actions={actions} />
      <div className="searchbar">
        <h3>User search box: </h3>
        <UserSearchBox page={page} actions={actions} />
      </div>
    </div>
  );
};
