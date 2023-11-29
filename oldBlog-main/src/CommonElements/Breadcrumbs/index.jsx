import React, { Fragment, useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import H3 from '../Headings/H3Element';
import CustomizerContext from '../../_helper/Customizer';
import SvgIcon from '../../Components/Common/SvgIcon';
import {routes} from "../../Route/Routes";


const Breadcrumbs = (props) => {
  const { layoutURL } = useContext(CustomizerContext);

  function findUrlStringByComponentName(componentName) {
    for (const route of routes) {
      if (route.Component && route.componentName === componentName) {
        return route.path;
      }
    }
    return ""; // Component not found
  }

  return (
    <Fragment>
      <Container fluid={true}>
        <div className='page-title'>
          <Row>
            <Col xs='6'>
              <H3>{props.mainTitle}</H3>
            </Col>
            <Col xs='6'>
              <ol className='breadcrumb'>
                <li className='breadcrumb-item'>
                  <Link to={`${process.env.PUBLIC_URL}/${layoutURL}`}>
                    <SvgIcon iconId='stroke-home' />
                  </Link>
                </li>
                {props.parent && (
                    <li className='breadcrumb-item'>
                      <Link to={findUrlStringByComponentName(props.parent)}>
                        {props.parent}
                      </Link>
                    </li>
                )}
                <li className='breadcrumb-item'>
                  {props.mainTitle}
                </li>
              </ol>
            </Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
};

export default Breadcrumbs;
