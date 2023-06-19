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
