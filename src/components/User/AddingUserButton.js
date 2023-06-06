import { useState, useCallback } from "react";
import { PersonFillAdd, SaveFill, ArrowLeft } from "react-bootstrap-icons";
import { getUserById } from "queries/UserByIdQuery";
export const Adding_User = ({
  page,
  setState0,
  setState1,
  state,
  id,
  onClick,
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
      id = value;
    }

    return (
      <>
        <label>
          User's ID:
          <input
            type="text"
            name="id"
            value={id}
            placeholder="Enter user ID"
            onChange={handleChange}
          />
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
          onClick={() => onClick(id)}
          class="save"
        >
          <SaveFill class="iconadd"></SaveFill>Save
        </button>
      </>
    );
  }
};

export const Adding_User_Button = ({ page, actions }) => {
  const onClick = (userId) => {
    actions.onMutationAddUser({ page: page, userId: userId });
    setState(0);
  };

  return (
    <Adding_User
      state={state}
      setState0={setState0}
      setState1={setState1}
      page={page}
      onClick={onClick}
    >
      <PersonFillAdd></PersonFillAdd> Add a user{" "}
    </Adding_User>
  );
};
