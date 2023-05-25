import './selectTime.styles.scss';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import { setCurrentTime } from '../../store/time/time.action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectCurrentTime } from '../../store/time/time.selector';

const SelectTime = () => {
  const currentTime = useSelector(selectCurrentTime);
  const dispatch = useDispatch();

  const decrease = () => {
    if (currentTime > 0) {
      dispatch(setCurrentTime(currentTime-30))
    }
  }

  const increase = () => {
    if (currentTime < 150) {
      dispatch(setCurrentTime(currentTime+30))
    }
  }

  return (
    <div className='selectTime_location'>
      <ArrowLeftIcon sx={{ fontSize: 40 }} onClick={decrease}/>
      <div className='selectTime_content'>{currentTime}분 후</div>
      <ArrowRightIcon sx={{ fontSize: 40 }} onClick={increase}/>
    </div>
  );
};

export default SelectTime;