import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Mail, User} from 'react-feather';

import { LI, UL, P } from '../../../AbstractElements';
import CustomizerContext from '../../../_helper/Customizer';

const UserHeader = () => {
  const history = useNavigate();
  const [name, setName] = useState('Dean Yang');
  const { layoutURL } = useContext(CustomizerContext);

  useEffect(() => {
    setName(localStorage.getItem('Name') ? localStorage.getItem('Name') : name);
  }, []);
  const UserMenuRedirect = (redirect) => {
    history(redirect);
  };

  return (
    <li className='profile-nav onhover-dropdown pe-0 py-0'>
      <div className='media profile-media'>
        <div className='media-body'>
            <span className={"font-primary"}>Keep coding...</span>
          <P attrPara={{ className: 'mb-0 font-roboto' }}>
            about me <i className='middle fa fa-angle-down'></i>
          </P>
        </div>
      </div>
      <UL attrUL={{ className: 'simple-list profile-dropdown onhover-show-div' }}>
        <LI
          attrLI={{
            onClick: () => UserMenuRedirect(`${process.env.PUBLIC_URL}/personal/profile/${layoutURL}`),
          }}>
          <User />
          <span>my Profile </span>
        </LI>
        <LI
            attrLI={{
              onClick: () => UserMenuRedirect(`${process.env.PUBLIC_URL}/working/cat/${layoutURL}`),
            }}>
          <Mail />
          <span>mail</span>
        </LI>
      </UL>
    </li>
  );
};

export default UserHeader;
