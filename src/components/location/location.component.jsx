import './location.styles.scss';

import useGeolocation from '../../utils/location/location.utils';

const Location = () => {
  const location = useGeolocation();

  return (
    <div className='location_container'>
      <h2 className='information_title'>{title}</h2>
      <p className='information_content'>{content}</p>
    </div>
  );
};

export default Location;