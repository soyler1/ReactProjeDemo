import React from 'react'
import { NavLink } from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

export default function Categories() {
  return (
    <div>
        <Menu vertical>
        <Menu.Item name='Anasayfa' as={NavLink} to='/'/>
        <Menu.Item name='Bildirimler'/>
        <Menu.Item name='Boş Sayfa'/>
      </Menu>
    </div>
  )
}
