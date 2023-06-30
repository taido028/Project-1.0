import { ArrowLeft, SaveFill } from "react-bootstrap-icons";

/**
 * UserInput is a component that renders a form to input the user's ID and two buttons.
 * The 'Return' button dismisses the input form, while the 'Save' button calls the
 * provided actions to add a user and dismisses the form.
 *
 * @component
 *
 * @param {Object} props - The properties that define the UserInput component
 * @param {Object} props.page - The page where the user will be added
 * @param {Object} props.actions - The actions that can be performed on the user
 * @param {Function} props.onCancel - A callback function to dismiss the form
 * @param {string} props.id - The user's ID
 * @param {Function} props.setId - A callback function to update the user's ID
 *
 * @returns {JSX.Element} The UserInput component
 */

const UserInput = ({ page, actions, onCancel, id, setId }) => {
  // handle input change
  const handleChange = (event) => {
    const value = event.target.value;
    setId(value);
  };

  // check if user already exist
  const UserCheck = page.users.find((u) => u.user.id === id);

  // Render form with input and two buttons
  return (
    <>
      <label>
        User's ID:
        <input
          type="text"
          className="inputbox"
          name="id"
          value={id}
          placeholder="Enter user ID "
          onChange={handleChange}
        />{" "}
      </label>

      <button
        className="btn btn-sm btn-warning"
        onClick={onCancel}
        class="cancel"
      >
        <ArrowLeft class="icon" />
        Return
      </button>

      <button
        className="btn btn-sm btn-success"
        class="save"
        onClick={() => {
          if (!UserCheck) {
            actions.onMutationAddUser({
              page: page,
              userId: id,
              accesslevel: 1,
            });
          }

          onCancel();
        }}
      >
        <SaveFill class="icon" />
        Save
      </button>
    </>
  );
};

export default UserInput;
