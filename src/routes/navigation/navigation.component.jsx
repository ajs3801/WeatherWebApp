import React, { Fragment } from 'react'

import './navigation.styles.scss';

import { Outlet } from 'react-router-dom';

import WbSunnyIcon from '@mui/icons-material/WbSunny';

export const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation_container'>
        <p className='navigation_title'>한 눈에 보는 날씨</p>
        <WbSunnyIcon sx={{ fontSize: 32, color: 'white'}}/>
      </div>
      <Outlet />
    </Fragment>
  );
};