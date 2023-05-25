import './futureTime.styles.scss';

import WbCloudyIcon from '@mui/icons-material/WbCloudy';

import { useSelector } from 'react-redux';
import { selectCurrentTime } from '../../store/time/time.selector';

const FutureTime = ({ temperature }) => {
  const currentTime = useSelector(selectCurrentTime);
  
  return (
    <div className='futureTime_container'>
      <h2 className='futureTime_title'>{currentTime}분 후 날씨</h2>
      <div className='futureTime_content'>
        <WbCloudyIcon sx={{ fontSize: 50, color: 'grey' }}/>
        <h2 className='futureTime_temperature'>{temperature}°C</h2>
      </div>
    </div>
  );
};

export default FutureTime;