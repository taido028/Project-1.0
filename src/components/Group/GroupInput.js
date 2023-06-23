import { ArrowLeft, SaveFill } from "react-bootstrap-icons";
/**
 * Component for the form that allows adding a group.
 * @component
 * @param {Object} props - Component props
 * @param {Object} props.page - The page object
 * @param {Object} props.actions - An object with actions that can be performed, includes `onMutationAddGroup`
 * @param {function} props.onCancel - Function to execute when canceling group addition
 * @param {string} props.id - The id of the group to be added
 * @param {function} props.setId - Function to update the id of the group to be added
 * @returns {JSX.Element} A form-like structure with a text input for group ID, a cancel button, and a save button.
 */

const GroupInput = ({ page, actions, onCancel, id, setId }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    setId(value);
  };

  return (
    <>
      <label>
        Group's Id:
        <input
          type="id"
          name="name"
          value={id}
          placeholder="Enter group ID "
          className="inputbox"
          onChange={handleChange}
        />{" "}
      </label>

      <button
        className="btn btn-sm btn-warning"
        onClick={onCancel}
        class="cancel"
      >
        <ArrowLeft class="icon"></ArrowLeft>Return
      </button>
      <button
        className="btn btn-sm btn-success"
        class="save"
        onClick={() => {
          actions.onMutationAddGroup({
            page: page,
            groupId: id,
            accesslevel: 1,
          });
          onCancel();
        }}
      >
        <SaveFill class="icon" />
        Save
      </button>
    </>
  );
};

export default GroupInput;
