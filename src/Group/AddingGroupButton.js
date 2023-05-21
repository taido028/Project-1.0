import { useState, useCallback } from "react";
import { PersonFillAdd, Save, X } from "react-bootstrap-icons";
import { v1 } from "uuid";

export const Adding_Group = ({
  new_group,
  set_new_group,
  onClick,
  setState0,
  setState1,
  state,
}) => {
  if (state === 0) {
    return (
      <button
        className="btn btn-sm btn-primary"
        onClick={setState1}
        class="add"
      >
        <PersonFillAdd class="iconadd"></PersonFillAdd>Add
      </button>
    );
  } else {
    function handleChange(event) {
      const value = event.target.value;
      set_new_group({ ...new_group, [event.target.name]: value });
    }

    return (
      <>
        <label>
          Group Name:
          <input
            type="text"
            name="name"
            value={new_group.name}
            placeholder="Enter group name"
            onChange={handleChange}
          />{" "}
        </label>

        <button className="btn btn-sm btn-warning" onClick={setState0}>
          <X></X>
        </button>
        <button className="btn btn-sm btn-success" onClick={onClick}>
          <Save></Save>Save
        </button>
      </>
    );
  }
};

export const Adding_Group_Button = ({ page, actions }) => {
  const [new_group, set_new_group] = useState({
    id: v1(),
    name: "",
  });
  const onClick = () => {
    set_new_group({ ...new_group, id: v1() });
    const group = {
      id: new_group.id,
      group: { ...new_group, id: v1() },
    };
    actions.onGroupAdd({ group, page });
    /*
    const membership = {userId = user.user.id, groupId = group.id}
    */
  };
  const [state, setState] = useState(0);
  const setState0 = useCallback(() => setState(0));
  const setState1 = useCallback(() => setState(1));

  return (
    <Adding_Group
      new_group={new_group}
      state={state}
      setState0={setState0}
      setState1={setState1}
      set_new_group={set_new_group}
      onClick={onClick}
    >
      <PersonFillAdd></PersonFillAdd> Add a group{" "}
    </Adding_Group>
  );
};
