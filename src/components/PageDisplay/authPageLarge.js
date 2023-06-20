import Card from "react-bootstrap/Card";
import { UsersCard } from "components/User/UserCard";
//import { PageUsersCard } from "./PageUsersCard";
import { GroupCard } from "components/Group/GroupCard";
/**
 * Component for a page that displays user and group cards.
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.page - The page object, which is passed to the UsersCard and GroupCard components
 * @param {Object} props.actions - An object with actions that can be performed, passed to the UsersCard and GroupCard components
 * @returns {JSX.Element} A card with a page title, and user and group cards
 *
 *
 */
export const PageLarge = ({ page, actions }) => {
  return (
    <Card className="page-background">
      <Card.Header className="page-title-background">
        <Card.Title className="page-title">AuthorizationPage</Card.Title>
      </Card.Header>
      <Card.Body>
        <UsersCard page={page} actions={actions} />
        {/*<PageUsersCard page={page} actions={actions} />}
        {<h1>---------</h1>*/}
        <GroupCard page={page} actions={actions} />
      </Card.Body>
    </Card>
  );
};
