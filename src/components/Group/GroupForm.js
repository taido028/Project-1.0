import { ArrowLeft, SaveFill } from "react-bootstrap-icons";
/**
 * Component for the form that allows to add a group.
 */
export const GroupForm = ({ page, actions, onCancel, id, setId }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    setId(value);
  };

  return (
    <>
      <label>
        Group's Id:
        <input
          type="text"
          name="name"
          value={id}
          placeholder="Enter group'ID "
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
