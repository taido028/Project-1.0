import Card from "react-bootstrap/Card";
import { UsersCard } from "components/User/UserCard";
//import { PageUsersCard } from "./PageUsersCard";
import { GroupCard } from "components/Group/GroupCard";
/**
 * Renders a card describing a group im detailed form.
 * @param {*} param0
 * @returns
 */
export const PageLarge = ({ page, actions }) => {
  return (
    <Card>
      <Card.Header className="page-title-background">
        <Card.Title className="page-title">AuthorizationPage</Card.Title>
      </Card.Header>
      <Card.Body>
        <h1>---------</h1>
        <UsersCard page={page} actions={actions} />
        <h1>---------</h1>
        {/*<PageUsersCard page={page} actions={actions} />}
        {<h1>---------</h1>*/}
        <GroupCard page={page} actions={actions} />
        <h1>---------</h1>
      </Card.Body>
    </Card>
  );
};
