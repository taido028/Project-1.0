import { Card } from "react-bootstrap";
import { PlusSquareFill } from "react-bootstrap-icons";
/**
 * GroupResultList component displays a list of groups and allows adding a group.
 *
 * @param {object} props - Component props.
 * @param {Array} props.GroupsList - An array of groups to be displayed.
 * @param {object} props.actions - An object containing various action dispatch functions.
 * @param {object} props.page - Current page object.
 * @param {Function} props.onChange - Function to be called when a change event occurs.
 *
 * @returns {JSX.Element} The rendered GroupResultList component.
 */

export const GroupResultList = ({ GroupsList, actions, page, onChange }) => {
  //Check the size of GroupsList before rendering (because of function map)
  if (GroupsList.length > 0) {
    return (
      <Card className="result-list-card">
        <table>
          <tbody>
            {GroupsList.map((g) => (
              <tr className="resultlist" key={g.id}>
                <td className="user">
                  {g.name} {"  "} {g.surname}
                </td>

                <td className="user">
                  <button className="button-with-icon">
                    <PlusSquareFill
                      className="addsearch"
                      onClick={() => {
                        actions.onMutationAddGroup({
                          page: page,
                          groupId: g.id,
                          accesslevel: 1,
                        });

                        //Change state to 0 to hide the GroupResultList
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
    return <Card>No group found</Card>;
  }
};
