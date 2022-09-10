import React from "react";
import {Dropdown} from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
      <Dropdown style={{marginTop:'0.5em'}} item text="Sepetiniz" >
        <Dropdown.Menu>
          <Dropdown.Item>Sepete Git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
