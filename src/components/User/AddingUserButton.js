import { useState, useCallback } from "react";
import { PersonFillAdd, SaveFill, ArrowLeft } from "react-bootstrap-icons";
export const Adding_User = ({
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
    return (
      <>
        <label>
          User's ID:
          <input type="text" name="id" value={id} placeholder="Enter user ID" />
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
            actions.onMutationAddUser({
              page: page,
              userId: id,
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

export const Adding_User_Button = ({ page, actions }) => {
<<<<<<< HEAD
  const onClick = (userId) => {
    actions.onMutationAddUser({ page: page, userId: userId });
    setState(0);
  };
=======
  const [state, setState] = useState(0);
  const setState0 = useCallback(() => setState(0));
  const setState1 = useCallback(() => setState(1));
>>>>>>> f1ea2702e3797392bde28b80f444fcbb9448190d

  return (
    <Adding_User
      state={state}
      setState0={setState0}
      setState1={setState1}
      page={page}
      actions={actions}
    >
      <PersonFillAdd></PersonFillAdd> Add a user{" "}
    </Adding_User>
  );
};
