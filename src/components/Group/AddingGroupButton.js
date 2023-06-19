import { useState, useCallback } from "react";
import { PersonFillAdd } from "react-bootstrap-icons";
import { GroupForm } from "./GroupForm";

/**
 * Component for the button that initiates the adding of a group.
 */
export const AddButton = ({ onClick }) => {
  return (
    <button className="btn btn-sm btn-primary" onClick={onClick} class="add">
      <PersonFillAdd class="iconadd" />
      Add
    </button>
  );
};

export const AddingGroupButton = ({ page, actions }) => {
  const [state, setState] = useState(0);
  const [id, setId] = useState("");
  const setState0 = useCallback(() => setState(0));
  const setState1 = useCallback(() => setState(1));

  return state === 0 ? (
    <AddButton onClick={setState1} />
  ) : (
    <GroupForm
      page={page}
      actions={actions}
      onCancel={setState0}
      id={id}
      setId={setId}
    />
  );
};
