import { useState, useCallback } from "react";
import { getUserByLetters } from "mutations/UserByLetterAsyncActions";
import { UserResultList } from "components/User/UserResultList";
import { Card } from "react-bootstrap";

export const UserSearchBox = ({ page, actions }) => {
  //UseState to control input letters and result UsersList
  const [letters, setLetters] = useState("");
  const [UsersList, setUsersList] = useState("");

  //State to control the display of UserSearchBox
  const [state, setState] = useState(0);

  const setState0 = useCallback(() => setState(0), []);
  const setState1 = useCallback(() => setState(1), []);

  //Handle the change of input letters
  const handleLettersChange = (event) => {
    setState1();
    const value = event.target.value;
    setLetters(value);
    getUserByLetters(value).then((UsersList) => {
      //Filter out the users that are already in the table
      if (page.users.length > 0) {
        page.users.forEach((user) => {
          UsersList = UsersList.filter((u) => u.id !== user.user.id);
          setUsersList(UsersList);
        });
      } else {
        setUsersList(UsersList);
      }
    });
  };

  //Return the UserSearchBox base on state (default state = 0)
  return state === 1 ? (
    <Card>
      <tr>
        <input
          placeholder={"Input user's name or surname"}
          className="searchbox"
          value={letters}
          onChange={handleLettersChange}
        />
      </tr>
      <tr>
        <UserResultList
          UsersList={UsersList}
          actions={actions}
          page={page}
          onChange={setState0}
        />
      </tr>
    </Card>
  ) : (
    <Card>
      <tr>
        <input
          placeholder={"Input user's name or surname"}
          className="searchbox"
          value={""}
          onChange={handleLettersChange}
        />
      </tr>
      <tr>
        <UserResultList
          UsersList={""}
          actions={actions}
          page={page}
          onChange={setState0}
        />
      </tr>
    </Card>
  );
};
