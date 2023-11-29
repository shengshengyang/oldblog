import React, { Fragment } from 'react';
import {Breadcrumbs, H5, LI,Image,UL} from '../../../AbstractElements';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import SvgIcon from "../../Common/SvgIcon";
import {SocialProfileStatus} from "../../../Data/Social";
import SocialLinks from "../../Common/SocialLinks";

const PersonalProfile = () => {
  return (
    <Fragment>
      <Breadcrumbs parent='Pages' title='Sample Card' />
      <Container fluid={true}>
        <Row>
          <Col sm='0' md='3' lg='3'></Col>
          <Col sm='12' md='6' lg='6'>
                <Card className='social-profile'>
                  <CardBody>
                    <div className='social-img-wrap'>
                      <div className='social-img'>
                        <Image attrImage={{ src: `${require ('../../../assets/images/logo/cat-logo.png')}`, alt: 'profile' }} />
                      </div>
                      <div className='edit-icon'>
                        <SvgIcon iconId='profile-check' />
                      </div>
                    </div>
                    <div className='social-details'>
                      <span className='f-light'>楊竣盛 Dean Yang</span>
                      <SocialLinks/>
                      <UL attrUL={{ className: 'social-follow' }}>
                        {SocialProfileStatus.map((item, i) => (
                            <LI key={i}>
                              <H5 attrH5={{ className: 'mb-0' }}>{item.active}</H5>
                              <span className='f-light'>{item.title}</span>
                            </LI>
                        ))}
                      </UL>
                    </div>
                  </CardBody>
                </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default PersonalProfile;
