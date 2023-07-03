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
  // handle input change
  const handleChange = (event) => {
    const value = event.target.value;
    setId(value);
  };

  // check if group already exist
  const GroupCheck = page.groups.find((g) => g.group.id === id);

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

      <button className="cancel" onClick={onCancel}>
        <ArrowLeft className="icon" />
        Return
      </button>
      <button
        className="save"
        onClick={() => {
          if (!GroupCheck) {
            actions.onMutationAddGroup({
              page: page,
              groupId: id,
              accesslevel: 1,
            });
          }

          onCancel();
        }}
      >
        <SaveFill className="icon" />
        Save
      </button>
    </>
  );
};

export default GroupInput;
