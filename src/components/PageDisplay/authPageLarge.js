import Card from "react-bootstrap/Card";
import { UsersCard } from "components/User/UserCard";
//import { PageUsersCard } from "./PageUsersCard";
import { GroupCard } from "components/Group/GroupCard";
import { useState, useCallback } from "react";
import { ArrowDown } from "react-bootstrap-icons";
import { HomeCard } from "./HomeCard";

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
        {/*<PageUsersCard page={page} actions={actions} />}
        {<h1>---------</h1>*/}
        <PageTabButton page={page} actions={actions} />
      </Card.Body>
    </Card>
  );
};

const PageTabButton = ({ page, actions }) => {
  //Using different states to display different cards (default is 0 which is home tab)
  const [state, setState] = useState(0);

  const setState0 = useCallback(() => setState(0), []);
  const setState1 = useCallback(() => setState(1), []);
  const setState2 = useCallback(() => setState(2), []);

  //Arrow to indicate which tab is currently selected
  const CurrentTabArrow = () => {
    return (
      <div>
        <ArrowDown className="icon" />
        <ArrowDown className="icon" />
        <ArrowDown className="icon" />
      </div>
    );
  };

  return (
    <div>
      <button
        class={`hometab ${state === 0 ? "active" : ""}`}
        onClick={setState0}
      >
        <h3>Home</h3>
        {state === 0 && <CurrentTabArrow />}
      </button>

      <button
        class={`usertab ${state === 1 ? "active" : ""}`}
        onClick={setState1}
      >
        <h3>Users List</h3>
        {state === 1 && <CurrentTabArrow />}
      </button>

      <button
        class={`grouptab ${state === 2 ? "active" : ""}`}
        onClick={setState2}
      >
        <h3>Groups List</h3>
        {state === 2 && <CurrentTabArrow />}
      </button>

      <CardDisplay page={page} actions={actions} state={state} />
    </div>
  );
};

const CardDisplay = ({ page, actions, state }) => {
  //Display the card based on the state
  return state === 0 ? (
    <div>
      <HomeCard />
    </div>
  ) : state === 1 ? (
    <UsersCard page={page} actions={actions} />
  ) : (
    <GroupCard page={page} actions={actions} />
  );
};
