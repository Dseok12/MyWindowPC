import '../common.scss';
import './header.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header'>
      <div className='inner'>
        <div className='contWrap'>
          <div className='nav_box'>
            <Link to='/'>
              <h1 className='logo'>투두리스트</h1>
            </Link>
            <ul className='menu_box'>
              <li><Link to='/todoinput'>TodoList Input</Link></li>
              <li><Link to='/todolist'>TodoList Result</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header