import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import catLogo from "../../assets/images/logo/cat-logo.png"
import CustomizerContext from '../../_helper/Customizer';

const SidebarIcon = () => {
  const { layoutURL } = useContext(CustomizerContext);
  return (
    <div className="logo-icon-wrapper">
      <Link to={`${process.env.PUBLIC_URL}/pages/sample-page/${layoutURL}`}>
        <img
          className="img-logo"
          src={catLogo}
          alt=""
          style={{ maxWidth: '45px' }}
        />
      </Link>
    </div>
  );
};

export default SidebarIcon;