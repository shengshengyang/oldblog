import React, { Fragment, useState, useLayoutEffect, useContext } from 'react';
import { Col } from 'reactstrap';
import { AlignCenter } from 'react-feather';
import { Link } from 'react-router-dom';
import { Image } from '../../../AbstractElements';
import CustomizerContext from '../../../_helper/Customizer';
import NotificationSlider from './NotificationSlider';
import CatIcon from "../../../assets/images/logo/cat-logo.png";

const Leftbar = () => {
  const { mixLayout, toggleSidebar, layout, layoutURL } = useContext(CustomizerContext);
  const [sidebartoggle, setSidebartoggle] = useState(true);
  const width = useWindowSize();
  const layout1 = localStorage.getItem('sidebar_layout') || layout;

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
        if (window.innerWidth <= 1007) {
          toggleSidebar(true);
          document.querySelector('.page-wrapper').className = 'page-wrapper compact-wrapper';
        } else {
          toggleSidebar(false);
        }
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  const responsive_openCloseSidebar = (toggle) => {
    if (width <= 991) {
      document.querySelector('.page-header').className = 'page-header';
      document.querySelector('.sidebar-wrapper').className = 'sidebar-wrapper ';
      document.querySelector('.bg-overlay').classList.add('active');
    } else {
      if (toggle) {
        setSidebartoggle(!toggle);
        document.querySelector('.page-header').className = 'page-header close_icon';
        document.querySelector('.sidebar-wrapper').className = 'sidebar-wrapper close_icon ';
        document.querySelector('.mega-menu-container').classList.remove('d-block');
      } else {
        setSidebartoggle(!toggle);
        document.querySelector('.page-header').className = 'page-header';
        document.querySelector('.sidebar-wrapper').className = 'sidebar-wrapper ';
      }
    }
  };

  return (
    <Fragment>
      <Col className='header-logo-wrapper col-auto p-0' id='out_side_click'>
        <div className='logo-wrapper'>
          {layout1 !== 'compact-wrapper dark-sidebar' && layout1 !== 'compact-wrapper color-sidebar' && mixLayout ? (
              <Link to={`${process.env.PUBLIC_URL}/${layoutURL}`}>
                <Image attrImage={{ className: 'img-fluid d-inline', src: `${CatIcon}`, alt: '',style: { maxWidth: '45px' } }} />
                Dean Yang
              </Link>
          ) : (
              <Link to={`${process.env.PUBLIC_URL}/${layoutURL}`}>
                <Image attrImage={{ className: 'img-fluid d-inline', src: `${CatIcon}`, alt: '',style: { maxWidth: '45px' } }} />
                Dean Yang
              </Link>
          )}
        </div>
        <div className='toggle-sidebar' onClick={() => responsive_openCloseSidebar(sidebartoggle)} style={window.innerWidth <= 991 ? { display: 'block' } : { display: 'none' }}>
          <AlignCenter className='status_toggle middle sidebar-toggle' id='sidebar-toggle' />
        </div>
      </Col>
      <Col xxl='5' xl='6' lg='5' md='4' sm='3' className='left-header p-0'>
        <NotificationSlider />
      </Col>
    </Fragment>
  );
};

export default Leftbar;
