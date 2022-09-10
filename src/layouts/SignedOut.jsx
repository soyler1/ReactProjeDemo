import React from 'react'
import {Button, Menu} from 'semantic-ui-react'

export default function SignedOut(props) {
  return (
    <div>
      <Menu.Item style={{marginBottom:'0.5em'}}>
        <Button primary onClick={props.signIn}>Giriş Yap</Button>
        <Button style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
      </Menu.Item>
    </div>
  )
}
