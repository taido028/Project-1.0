import React from "react";
import { Save, ArrowRightSquareFill } from "react-bootstrap-icons";

export const EditableRow = ({ index , editFormData , handleEditFormChange , handleCancelClick }) => 
{
  return (
    <tr>
      <td>
          {index} {/* index (different from ID) */} 
      </td>

      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
          class="inputbox"
        ></input>
      </td>

      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
          class="inputbox"
        ></input>
      </td>
      
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
          class="inputbox"
        ></input>
      </td>

      <td>
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
          class="inputbox"
        ></input>
      </td>
      
      <td>
        {/* Save Button */}
        <button type="submit" className="btn btn-sm btn-success">
          <Save/>
        </button>

        {/* Cancel Button */}
        <button type="button" className="btn btn-sm btn-danger" onClick={handleCancelClick}>
          <ArrowRightSquareFill/>
        </button>
      </td>
    </tr>
  );
};