
import './information.styles.scss';

export const Information = ({ title, content }) => {

  return (
    <div className="information_container">
      <h2 className='information_title'>{title}</h2>
      <p className='information_content'>{content}</p>
    </div>
  );
};