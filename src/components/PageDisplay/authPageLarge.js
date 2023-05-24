import Card from "react-bootstrap/Card";
import { UsersCard } from "components/User/UserCard";
import { PageUsersCard } from "./PageUsersCard";
import { GroupCard } from "components/Group/GroupCard";
/**
 * Renders a card describing a group im detailed form.
 * @param {*} param0
 * @returns
 */
export const PageLarge = ({ page, actions }) => {
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          AuthorizationPage
          <br />
          ID of the page: {page.id} <br />
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <UsersCard page={page} actions={actions} />
        <PageUsersCard page={page} actions={actions} />
        <GroupCard page={page} actions={actions} />
      </Card.Body>
      <Card.Body>{JSON.stringify(page)}</Card.Body>
    </Card>
  );
};
