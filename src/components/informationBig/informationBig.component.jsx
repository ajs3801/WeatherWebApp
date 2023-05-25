import React from 'react'

import './informationBig.styles.scss';

const InformationBig = ({title, content}) => {
  return (
    <div className='informationBig_container'>
      <h2 className='informationBig_title'>{title}</h2>
      <p className='informationBig_content'>{content}</p>
    </div>
  )
}

export default InformationBig