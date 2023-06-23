import Card from "react-bootstrap/Card";
import { UsersTable } from "./UserTable";

/**
 * Renders a card containing a list of group members.
 */
export const UsersCard = ({ page, actions }) => {
  return (
    <Card className="user-card-background">
      <Card.Header>
        <Card.Title className="usercard-title">List of Users</Card.Title>
      </Card.Header>
      <Card.Body>
        <UsersTable page={page} actions={actions} />
      </Card.Body>
    </Card>
  );
};
