import React from 'react';
import { LI, UL } from '../../AbstractElements';
const SocialLinks = () => {
  return (
    <UL attrUL={{horizontal:true, className: 'd-flex justify-content-center card-social' }}>
      <LI>
        <a href='https://github.com/shengshengyang' target='_blank' rel="noreferrer">
          <i className='fa fa-github' />
        </a>
      </LI>
      <LI>
        <a href='mailto:i64991189@gs.ncku.edu.tw' target='_blank' rel="noreferrer">
          <i className='fa fa-envelope' />
        </a>
      </LI>
      <LI>
        <a href='https://www.instagram.com/yangmaha_0212' target='_blank' rel="noreferrer">
          <i className='fa fa-instagram' />
        </a>
      </LI>
    </UL>
  );
};

export default SocialLinks;
