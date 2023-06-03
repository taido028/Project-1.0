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
          onClick={() => onClick(page, id)}
          class="save"
        >
          <SaveFill class="iconadd"></SaveFill>Save
        </button>
      </>
    );
  }
};

export const Adding_User_Button = ({ page, actions }) => {
  const onClick = (page, userId) => {
    getUserById(userId).then((user) => {
      console.log(user);
      // Use the user data for other operations
      actions.onMutationUpdateUser({ user: user, uservalid: true });
      //actions.onUserAdd({ user: user, page: page });
      actions.onMutationAddUser({ pageId: page.id, userId: userId });
      window.location.reload(true);
    });
    /*
      .catch((error) => {
        console.error(error);
      });
      */
  };
  const [state, setState] = useState(0);
  const setState0 = useCallback(() => setState(0));
  const setState1 = useCallback(() => setState(1));

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
