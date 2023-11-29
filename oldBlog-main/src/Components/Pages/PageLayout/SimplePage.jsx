import React, { Fragment } from 'react';
import { Breadcrumbs, Image} from '../../../AbstractElements';
import { Container } from 'reactstrap';
import CountdownData from "../ComingSoon/CountdownData";
import logo from '../../../assets/images/logo/cat-logo.png';

const SamplePage = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='貓貓趕工中' parent='Pages' title='Sample Card' />
      <Container fluid={true}>
        <Fragment>
          <div className="page-wrapper" id="pageWrapper">
            {/* <!-- Page Body Start--> */}
            <Container fluid={true} className='p-0'>
              <div className='comingsoon'>
                <div className='comingsoon-inner text-center'>
                  <a href='/'>
                    <Image attrImage={{ src: `${logo}`, alt: '' }} />
                  </a>
                  <div className='countdown' id='clockdiv'>
                    <CountdownData />
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </Fragment>
      </Container>
    </Fragment>
  );
};

export default SamplePage;
