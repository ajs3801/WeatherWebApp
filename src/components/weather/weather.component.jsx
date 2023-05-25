import './weather.styles.scss';

import WbSunnyIcon from '@mui/icons-material/WbSunny';

const Weather = ({ temperature }) => {
  return (
    <div className='weather_container'>
      <h2 className='weather_title'>현재 날씨</h2>
      <div className='weather_content'>
        <WbSunnyIcon sx={{ fontSize: 50, color: 'orange'}}/>
        <h2 className='weather_temperature'>{temperature}°C</h2>
      </div>
    </div>
  );
};

export default Weather;