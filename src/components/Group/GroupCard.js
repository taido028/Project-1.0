import Card from "react-bootstrap/Card";

import { GroupTable } from "./GroupTable";

/**
 * Renders a card containing a list of group members.
 */
export const GroupCard = ({ page, actions }) => {
  return (
    <Card className="group-card-background">
      <Card.Header>
        <Card.Title className="groupcard-title">List of Groups</Card.Title>
      </Card.Header>
      <Card.Body>
        <GroupTable page={page} actions={actions} />
      </Card.Body>
    </Card>
  );
};
