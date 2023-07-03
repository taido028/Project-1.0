import { useState, useCallback } from "react";
import { PersonFillAdd } from "react-bootstrap-icons";
import GroupInput from "./GroupInput";

/**
 * Component for the button that initiates the adding of a group.
 * @component
 * @param {Object} props - Component props
 * @param {function} props.onClick - Function to execute when the button is clicked
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
 * Component that displays a button to add a group or a form to input the group's details.
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.page - The page object
 * @param {Object} props.actions - An object with actions that can be performed, includes `onMutationAddGroup`
 */

export const AddingGroupButton = ({ page, actions }) => {
  const [state, setState] = useState(0);
  const [id, setId] = useState("");
  const setState0 = useCallback(() => setState(0), []);
  const setState1 = useCallback(() => setState(1), []);

  return state === 0 ? (
    <AddButton onClick={setState1} />
  ) : (
    <GroupInput
      page={page}
      actions={actions}
      onCancel={setState0}
      id={id}
      setId={setId}
    />
  );
};
