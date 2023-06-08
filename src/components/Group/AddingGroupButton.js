import { useState, useCallback } from "react";
import { PersonFillAdd, SaveFill, ArrowLeft } from "react-bootstrap-icons";
export const Adding_Group = ({
  setState0,
  setState1,
  state,
  id,
  page,
  actions,
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
    const handleChange = (event) => {
      const value = event.target.value;
      id = value;
    };

    return (
      <>
        <label>
          Group's Id:
          <input
            type="text"
            name="name"
            value={id}
            placeholder="Enter group name"
            onChange={handleChange}
          />{" "}
        </label>

        <button
          className="btn btn-sm btn-warning"
          class="cancel"
          onClick={setState0}
        >
          <ArrowLeft class="iconadd"></ArrowLeft>Return
        </button>
        <button
          className="btn btn-sm btn-success"
          onClick={() => {
            actions.onMutationAddGroup({
              page: page,
              groupId: id,
              accesslevel: 1,
            });
            setState0();
          }}
          class="save"
        >
          <SaveFill class="iconadd"></SaveFill>Save
        </button>
      </>
    );
  }
};

export const Adding_Group_Button = ({ page, actions }) => {
  const [state, setState] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setState0 = useCallback(() => setState(0));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setState1 = useCallback(() => setState(1));

  return (
    // eslint-disable-next-line react/jsx-pascal-case
    <Adding_Group
      state={state}
      setState0={setState0}
      setState1={setState1}
      page={page}
      actions={actions}
    >
      <PersonFillAdd />
    </Adding_Group>
  );
};
