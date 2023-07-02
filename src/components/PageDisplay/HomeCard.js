import React from "react";
import Card from "react-bootstrap/Card";
import { PlusSquareFill } from "react-bootstrap-icons";
import { Trash } from "react-bootstrap-icons";
import { ArrowDownUp } from "react-bootstrap-icons";
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
        <Card.Header className="homecard-title">Features</Card.Header>
        <Card.Body>
          <Card.Title>
            <h4 className="adding">
              Adding <PlusSquareFill className="icon" />
            </h4>
          </Card.Title>
          <Card.Text>
            Add a user or group base on ID or name in search box
          </Card.Text>
          <Card.Title>
            <h4 className="deleting">
              Deleting <Trash className="icon" />
            </h4>
          </Card.Title>
          <Card.Text>Remove a user or group </Card.Text>
          <Card.Title>
            <h4 className="changing">
              Changing Access Level <ArrowDownUp className="icon" />
            </h4>
          </Card.Title>
          <Card.Text>
            Allow to change the user's access or edit permission in this page
          </Card.Text>
        </Card.Body>
      </Card>
      <div>
        <div>
          <h2 className=" contributors-container end endtitle">Contributors</h2>
          <div className="names-container end">
            <h5>Do Quang Tai </h5>
            {" * ------ * "}
            <h5>Bui Minh Quang </h5>
          </div>
        </div>
      </div>

      <h6 className="end">© {currentYear} All Rights Reserved</h6>
    </div>
  );
};
