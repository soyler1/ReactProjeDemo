import React from "react";
import { Menu, Container } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import CartSummary from "./CartSummary";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home">Anasayfa</Menu.Item>

          <Menu.Item name="messages">Mesajlar</Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item>
              <CartSummary />
            </Menu.Item>

            <Menu.Item>
              <SignedIn />
            </Menu.Item>
            <Menu.Item>
              <SignedOut />
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
