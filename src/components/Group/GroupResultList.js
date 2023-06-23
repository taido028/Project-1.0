import { Card } from "react-bootstrap";
import { PlusSquareFill } from "react-bootstrap-icons";

export const GroupResultList = ({ GroupsList, actions, page, onChange }) => {
  //Check the size of GroupsList before rendering (because of function map)
  if (GroupsList.length > 0) {
    return (
      <Card className="result-list-card">
        {GroupsList.map((g) => (
          <tr className="resultlist">
            <td>
              {g.name} {"  "} {g.surname}
            </td>

            <td>
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
            </td>
          </tr>
        ))}
      </Card>
    );
  } else {
    return <Card>No group found</Card>;
  }
};
