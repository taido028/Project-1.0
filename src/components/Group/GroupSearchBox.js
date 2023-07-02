import { useState, useCallback } from "react";
import { GroupResultList } from "./GroupResultList";
import { getGroupByLetters } from "mutations/GroupByLettersAsyncAction";
import { Card } from "react-bootstrap";
/**
 * GroupSearchBox component enables group search functionality.
 *
 * @param {object} props - Component props.
 * @param {object} props.page - The current page object.
 * @param {object} props.actions - An object containing various action dispatch functions.
 *
 * @returns {JSX.Element} The rendered GroupSearchBox component.
 */

export const GroupSearchBox = ({ page, actions }) => {
  //UseState to control input letters and result GroupsList
  const [letters, setLetters] = useState("");
  const [GroupsList, setGroupsList] = useState("");

  //State to control the display of GroupSearchBox
  const [state, setState] = useState(0);

  const setState0 = useCallback(() => setState(0), []);
  const setState1 = useCallback(() => setState(1), []);

  //Handle the change of input letters
  const handleLettersChange = (event) => {
    setState1();
    const value = event.target.value;
    setLetters(value);

    getGroupByLetters(value).then((GroupsList) => {
      // Filter out the users those are already in the table
      if (page.groups.length > 0) {
        page.groups.forEach((group) => {
          GroupsList = GroupsList.filter((g) => g.id !== group.group.id);
          setGroupsList(GroupsList);
        });
      } else {
        setGroupsList(GroupsList);
      }
    });
  };

  //Return the GroupSearchBox base on state (default state = 0)
  return state === 1 ? (
    <Card>
      <input
        placeholder={"Input group's name"}
        className="searchbox"
        value={letters}
        onChange={handleLettersChange}
      />
      <GroupResultList
        GroupsList={GroupsList}
        actions={actions}
        page={page}
        onChange={setState0}
      />
    </Card>
  ) : (
    <Card>
      <input
        placeholder={"Input group's name"}
        className="searchbox"
        value={""}
        onChange={handleLettersChange}
      />
    </Card>
  );
};
