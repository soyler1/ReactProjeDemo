import React from "react";
import { Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import {Dropdown} from "semantic-ui-react"

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Menu.Item name="home">Anasayfa</Menu.Item>

        <Menu.Item name="messages">Mesajlar</Menu.Item>

        <Menu.Menu position="right">
          <Dropdown item text="Sepetiniz">
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Sepete Git</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <SignedIn />
          </Menu.Item>
          <Menu.Item>
            <SignedOut />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}
