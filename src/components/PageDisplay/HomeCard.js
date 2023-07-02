import React from "react";
import Card from "react-bootstrap/Card";
/**
 * The HomeCard component is used to display basic information and features on the home page.
 * It also shows a logo and the current year.
 *
 * @returns {JSX.Element} The HomeCard component.
 */

export const HomeCard = () => {
  const logoUrl =
    "https://upload.wikimedia.org/wikipedia/commons/d/da/Logo_of_UO.svg";
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <img className="logo" src={logoUrl} alt="Logo" />
      <Card className="home-card-background">
        <Card.Header>Features</Card.Header>
        <Card.Body>
          <Card.Title>Adding</Card.Title>
          <Card.Text>
            Add a user or group by typing its ID or you can add it by searching
            its names
          </Card.Text>
          <Card.Title>Deleting</Card.Title>
          <Card.Text>Remove a user or group </Card.Text>
          <Card.Title>Changing Access Level</Card.Title>
          <Card.Text>
            Allow to change the user's access or edit permission in this page
          </Card.Text>
        </Card.Body>
      </Card>
      <div>
        <div>
          <h2 className=" contributors-container">Contributors</h2>
          <div className="names-container">
            <span>Do Quang Tai </span>
            {" * ------ * "}
            <span>Bui Minh Quang </span>
          </div>
        </div>
      </div>

      <div>© {currentYear} All Rights Reserved</div>
    </div>
  );
};
