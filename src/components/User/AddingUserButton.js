import { useState, useCallback } from "react";
import { PersonFillAdd } from "react-bootstrap-icons";
import UserInput from "./UserInput";

/**
 * AddButton is a button that initiates adding of a user.
 * @component
 * @param {Object} props
 * @param {function} props.onClick - Function to be executed on button click
 * @returns {JSX.Element} Add button
 */

export const AddButton = ({ onClick }) => {
  return (
    <button className="add" onClick={onClick}>
      <PersonFillAdd className="iconadd" />
      Add
    </button>
  );
};

/**
 * AddingUserButton is a button that shows the form for adding a new user or an add button, based on the state.
 *
 * @component
 *
 * @param {Object} props
 * @param {Object} props.page - Page object
 * @param {Object} props.actions - Actions object
 *
 * @returns {JSX.Element} UserInput form or AddButton based on the state
 */
export const AddingUserButton = ({ page, actions }) => {
  const [state, setState] = useState(0);
  const [id, setId] = useState("");
  const setState0 = useCallback(() => setState(0), []);
  const setState1 = useCallback(() => setState(1), []);

  return state === 0 ? (
    <AddButton onClick={setState1} />
  ) : (
    <UserInput
      page={page}
      actions={actions}
      onCancel={setState0}
      id={id}
      setId={setId}
    />
  );
};
