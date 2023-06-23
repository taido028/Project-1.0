import { useState, useCallback } from "react";

/**
 * A reusable DeleteButton component that manages its internal state to ask for confirmation before triggering an action.
 * The DeleteButton first appears in a "warning" state. When clicked, it transitions to a "confirmation" state.
 * If clicked again, it triggers the provided onClick function.
 *
 * @component
 *
 * @param {Object} props - The properties passed to this component.
 * @param {React.ReactNode} props.children - The child elements to be rendered within this button.
 * @param {Function} props.onClick - The function to be executed when the button is confirmed (clicked in "confirmation" state).
 *
 * @returns {JSX.Element} A JSX element representing the delete button in one of two states: "warning" or "confirmation".
 */

export const DeleteButton = ({ children, onClick }) => {
  const [state, setState] = useState(0);

  const setState0 = useCallback(() => setState(0), []);
  const setState1 = useCallback(() => setState(1), []);

  if (state === 0) {
    return (
      <button className="btn btn-sm btn-warning" onClick={setState1}>
        {children}
      </button>
    );
  } else {
    return (
      <>
        <button className="btn btn-sm btn-warning" onClick={setState0}>
          {children}
        </button>
        <button className="btn btn-sm btn-danger" onClick={onClick}>
          {children}
        </button>
      </>
    );
  }
};
