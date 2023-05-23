import Card from "react-bootstrap/Card";

/**
 * Renders a card containing a list of group members.
 */
export const PageUsersCard = ({ page, actions }) => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>User</Card.Title>
      </Card.Header>
      <Card.Body>{JSON.stringify(page.users)}</Card.Body>
    </Card>
  );
};
