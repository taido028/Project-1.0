import Card from "react-bootstrap/Card";

import { GroupTable } from "./GroupTable";

/**
 * Renders a card containing a list of group members.
 */
export const GroupCard = ({ page, actions }) => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>List of Groups</Card.Title>
      </Card.Header>
      <Card.Body>
        <GroupTable page={page} actions={actions} />
      </Card.Body>
    </Card>
  );
};
