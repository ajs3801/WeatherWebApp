import React, { Fragment } from 'react'

import { Information } from '../../components/information/information.component';
import Weather from '../../components/weather/weather.component';
import SelectTime from '../../components/selectTime/selectTime.component';
import InformationBig from '../../components/informationBig/informationBig.component';
import FutureTime from '../../components/futureTime/futureTime.component';

import './home.styles.scss';

import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <Fragment>
      <div className='home_container'>
        <Information title={"현재 위치"} content={"서울특별시 영등포구 여의대방로 20길"}/>
        <Weather temperature={"17"}/>
        <SelectTime />
        <FutureTime temperature={"19"}/>
        <InformationBig title={"오늘의 날씨"} content={"하루종일 맑네요. 우산을 챙길 필요는 없을 것 같아요"}/>
      </div>
      

      <Outlet />
    </Fragment>
  );
}

export default Home;