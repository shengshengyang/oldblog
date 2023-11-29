import React, {Fragment} from 'react';
import {Breadcrumbs, H6} from '../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import s3Intro from "../../../assets/images/aws/aws-s3-intro.png";
import IconUL from "../../Common/IconUL";

const example = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='' parent='Java' title='Sample Card'/>
            <Container fluid={true}>
                <Row>
                    <Col sm={"12"}>
                        <Card>
                            <CardHeader>
                                <H6> </H6>
                            </CardHeader>
                            <CardBody>
                                <IconUL icon={"fa fa-caret-right"} contentArray={["Snowcone" , "Snowball Edge" ]}/>
                                <img src={s3Intro} style={{width: "100%"}} alt=""/>
                                <a href='https://aws.amazon.com/tw/s3/' rel='noreferrer' target='_blank'>https://aws.amazon.com/tw/s3/</a>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default example;
