import React from 'react'
import {Nav} from './index'
import Logo from '../static/images/Logo.svg';

function Header() {
  return (
    <header>
        <img src={Logo}></img>
        <Nav />
    </header>
  )
}

export default Header