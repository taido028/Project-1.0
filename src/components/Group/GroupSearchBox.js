import { useState, useCallback } from "react";
import { GroupResultList } from "./GroupResultList";
import { getGroupByLetters } from "mutations/GroupByLettersAsyncAction";
import { Card } from "react-bootstrap";

export const GroupSearchBox = ({ page, actions }) => {
  const [letters, setLetters] = useState("");
  const [GroupsList, setGroupsList] = useState("");

  const [state, setState] = useState(0);

  const setState0 = useCallback(() => setState(0), []);
  const setState1 = useCallback(() => setState(1), []);

  const handleLettersChange = (event) => {
    const value = event.target.value;
    setLetters(value);
    getGroupByLetters(value).then((GroupsList) => {
      // Filter out the users that are already in the table
      if (page.groups.length > 0) {
        page.groups.forEach((group) => {
          GroupsList = GroupsList.filter((g) => g.id !== group.group.id);
          setGroupsList(GroupsList);
        });
      } else {
        setGroupsList(GroupsList);
      }
      setState1();
    });
  };

  return state === 1 ? (
    <Card>
      <tr>
        <input
          placeholder={"Input group's name"}
          className="searchbox"
          value={letters}
          onChange={handleLettersChange}
        />
      </tr>
      <tr>
        <GroupResultList
          GroupsList={GroupsList}
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
        <GroupResultList
          GroupsList={""}
          actions={actions}
          page={page}
          onChange={setState0}
        />
      </tr>
    </Card>
  );
};
