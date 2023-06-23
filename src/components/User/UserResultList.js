import { Card } from "react-bootstrap";
import { PlusSquareFill } from "react-bootstrap-icons";

export const UserResultList = ({ UsersList, actions, page, onChange }) => {
  if (UsersList.length > 0) {
    return (
      <Card className="result-list-card">
        {UsersList.map((u) => (
          <tr className="resultlist">
            <td>
              {u.name} {"  "} {u.surname}
            </td>

            <td>
              <PlusSquareFill
                className="addsearch"
                onClick={() => {
                  actions.onMutationAddUser({
                    page: page,
                    userId: u.id,
                    accesslevel: 1,
                  });
                  onChange();
                }}
              />
            </td>
          </tr>
        ))}
      </Card>
    );
  } else {
    return <Card>No user found</Card>;
  }
};
