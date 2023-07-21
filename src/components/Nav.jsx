import React from 'react'
import {BsBagFill} from 'react-icons/bs'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
export default function NavHeader() {
  return (
    <div className='Header'>
        <div className='Header-Content'>
            <p className='header-title'>Your Machine</p>
          <BsBagFill className='icon-header'></BsBagFill>
            
        </div>
        <div className='nav'>
            <ul className='nav-bar'>
            <CustomLink  to={'/'}>Initial Page</CustomLink>
            <CustomLink  to={'/about'}>About</CustomLink>
            <CustomLink  to={'/services'}>Services</CustomLink>
            <CustomLink  to={'/contact'}>Contact</CustomLink>
            <CustomLink  to={'/store'}>Store</CustomLink>
            </ul>
            
        </div>
    </div>
  )
}

function CustomLink ({to, children}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  console.log(isActive)
  
  return(
    <li>
      <Link className={isActive? 'link' : ''} to={to}>{children}</Link>
    </li>
  )
}