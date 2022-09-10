import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownDivider } from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
      <Dropdown style={{ marginTop: "0.5em" }} item text="Sepetiniz">
        <Dropdown.Menu>
          <Dropdown.Item>Laptop</Dropdown.Item>
          <Dropdown.Item>Televizyon</Dropdown.Item>
          <Dropdown.Item>Telefon</Dropdown.Item>
          <DropdownDivider />
          <Dropdown.Item as={NavLink} to='/cart'>Sepete Git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
