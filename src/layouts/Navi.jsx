import React, {useState} from "react";
import { Menu, Container } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import CartSummary from "./CartSummary";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navi() {
  const {cartItems} = useSelector(state => state.cart);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const history = useNavigate();

  function handleSignOut(params){
    setIsAuthenticated(false);
    history('/');
  }

  function handleSignIn(params){
    setIsAuthenticated(true);
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" as={NavLink} to='/'>Anasayfa</Menu.Item>
          <Menu.Item name="messages">Mesajlar</Menu.Item>
          <Menu.Menu position="right">
          {cartItems.length>0&&<CartSummary />}
          {isAuthenticated? <SignedIn signOut = {handleSignOut}/> 
          : <SignedOut signIn = {handleSignIn} />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
