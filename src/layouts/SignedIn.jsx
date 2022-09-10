import React from 'react'
import {Dropdown, Menu, Image} from 'semantic-ui-react'

export default function SignedIn() {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right"  src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png'/>
        <Dropdown text='Kılıçarslan' pointing="top left">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info"/>
            <Dropdown.Item text="Oturumu Kapat" icon="sign-out"/>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}


