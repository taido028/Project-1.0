import Card from "react-bootstrap/Card";

import { GroupTable } from "./GroupTable";

/**
 * Component that displays a card containing a list of group members.
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.page - The page object, which is passed to the GroupTable component
 * @param {Object} props.actions - An object with actions that can be performed, passed to the GroupTable component
 * @returns {JSX.Element} A card containing the group list rendered by the GroupTable component
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
