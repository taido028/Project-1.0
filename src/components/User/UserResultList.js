import { Card } from "react-bootstrap";
import { PlusSquareFill } from "react-bootstrap-icons";
/**
 * UserResultList component is used to display a list of users that match the search.
 *
 * @param {Object} props - The properties that define the component's behavior and display.
 * @param {Array} props.UsersList - An array containing user objects that match the search.
 * @param {Object} props.actions - An object containing bound actions for dispatch.
 * @param {Object} props.page - The page data where the user is being added.
 * @param {function} props.onChange - The function to execute when a user is added.
 *
 * @returns {JSX.Element} The UserResultList component.
 */

export const UserResultList = ({ UsersList, actions, page, onChange }) => {
  //Check the size of UsersList before rendering (because of function map)
  if (UsersList.length > 0) {
    return (
      <Card className="result-list-card">
        <table>
          <tbody>
            {UsersList.map((u) => (
              <tr className="resultlist" key={u.id}>
                <td className="user">
                  {u.name} {"  "} {u.surname}
                </td>

                <td className="user">
                  <button>
                    <PlusSquareFill
                      //className="addsearch"
                      onClick={() => {
                        actions.onMutationAddUser({
                          page: page,
                          userId: u.id,
                          accesslevel: 1,
                        });

                        //Change state to 0 to hide the UserResultList
                        onChange();
                      }}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    );
  } else {
    return <Card>No user found</Card>;
  }
};
