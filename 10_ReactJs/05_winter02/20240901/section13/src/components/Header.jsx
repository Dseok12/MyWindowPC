import React from 'react';
import "./css/Header.css";
import { memo } from 'react';

const Header = () => {
  return (
    <div className='HeaderWrap'>
      <h3>오늘은 🗓️</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
};

export default memo(Header);