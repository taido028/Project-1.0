import { useState, useCallback } from "react";
import { PersonFillAdd, SaveFill, ArrowLeft } from "react-bootstrap-icons";
import { v1 } from "uuid";
import { ADD_USER_MUTATION } from "mutations/authAddUser";
import { useMutation, gql } from "@apollo/client";
import { Mutation } from "react-query";

export const Adding_User = ({
  new_user,
  set_new_user,
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
      set_new_user({ ...new_user, [event.target.name]: value });
    }

    return (
      <>
        <label>
          User's first name:
          <input
            type="text"
            name="name"
            value={new_user.name}
            placeholder="Enter user first name"
            onChange={handleChange}
          />{" "}
        </label>
        <label>
          User's surname:
          <input
            type="text"
            name="surname"
            value={new_user.lastName}
            placeholder="Enter user surname"
            onChange={handleChange}
          />{" "}
        </label>
        <label>
          User's email address:
          <input
            type="text"
            name="email"
            value={new_user.email}
            placeholder="Enter user email"
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
          onClick={onClick}
          class="save"
        >
          <SaveFill class="iconadd"></SaveFill>Save
        </button>
      </>
    );
  }
};

export const Adding_User_Button = ({ page, actions }) => {
  const [new_user, set_new_user] = useState({
    id: v1(),
    name: "",
    surname: "",
    email: "",
  });

  const [addUserMutation] = useMutation(ADD_USER_MUTATION);

  const onClick = () => {
    set_new_user({ ...new_user, id: v1() });
    const user = {
      id: new_user.id,
      user: { ...new_user, id: v1() },
    };
    actions.onUserAdd({ user, page });
    //const membership = {userId = user.user.id, groupId = group.id}

    addUserMutation({
      variables: {
        authorizationId: page.id,
        userId: user.id,
      },
    });
  };
  const [state, setState] = useState(0);
  const setState0 = useCallback(() => setState(0));
  const setState1 = useCallback(() => setState(1));

  return (
    <Adding_User
      new_user={new_user}
      state={state}
      setState0={setState0}
      setState1={setState1}
      set_new_user={set_new_user}
      onClick={onClick}
    >
      <PersonFillAdd></PersonFillAdd> Add a user{" "}
    </Adding_User>
  );
};
