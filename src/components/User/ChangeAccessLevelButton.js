import { ArrowUpSquareFill, ArrowDownSquareFill } from "react-bootstrap-icons";

/**
 * ChangeAccessLevelButton is a component that allows changing user's access level by clicking on it.
 * If the current access level of the user is 2, it renders a down arrow icon which on click will reduce the access level to 1.
 * If the current access level of the user is 1, it renders an up arrow icon which on click will increase the access level to 2.
 *
 * @component
 *
 * @param {Object} props - The properties that define the ChangeAccessLevelButton component
 * @param {Object} props.user - The user for whom the access level is to be changed
 * @param {Object} props.page - The page containing the user
 * @param {Object} props.actions - The actions that can be performed on the user
 *
 * @returns {JSX.Element} The ChangeAccessLevelButton component
 */

export const ChangeAccessLevelButton = ({ user, page, actions }) => {
  // get userlist from page
  const UserList = page.users;

  // find the user in the userlist
  const Target = UserList.find((u) => u.user.id === user.id);

  // return icon base on accesslevel
  return Target.accesslevel === 2 ? (
    <button className="button-with-icon">
      <ArrowDownSquareFill
        className="down"
        onClick={() => {
          actions.onMutationAddUser({
            userId: user.id,
            accesslevel: 1,
            page: page,
          });
        }}
      />
    </button>
  ) : (
    <button className="button-with-icon">
      <ArrowUpSquareFill
        className="up"
        onClick={() => {
          actions.onMutationAddUser({
            userId: user.id,
            accesslevel: 2,
            page: page,
          });
        }}
      />
    </button>
  );
};
