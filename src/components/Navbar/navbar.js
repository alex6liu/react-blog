import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className='navbar'>
    <Link to='/'>首页</Link>
    <Link to='/posts'>文章</Link>
    <Link to='/write'>写文章</Link>
    <Link to='/edit'>编辑文章</Link>
  </div>
);

export default Navbar;