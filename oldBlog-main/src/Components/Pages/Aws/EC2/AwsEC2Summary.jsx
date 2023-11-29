import React, {Fragment} from 'react';
import {Breadcrumbs, H5, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';

const AwsEC2Summary = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Summary' parent='AwsEC2Guideline' title='Summary'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5> 總結重點</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-primary"}>
                                        EC2 Instance
                                    </CardHeader>
                                    <CardBody>
                                        <P>AMI (OS) + Instance Size (CPU + RAM) + Storage + security groups + EC2 User Data</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-warning"}>
                                        Security Groups
                                    </CardHeader>
                                    <CardBody>
                                        <P>EC2 的防火牆</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-primary"}>
                                        EC2 User Data
                                    </CardHeader>
                                    <CardBody>
                                        <P>script 在初次建立時自動跑一次</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-secondary"}>
                                        SSH
                                    </CardHeader>
                                    <CardBody>
                                        <P>終端機連線到EC2 (port 22)</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-secondary"}>
                                        EC2 Instance Role
                                    </CardHeader>
                                    <CardBody>
                                        <P>連接 IAM </P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-danger"}>
                                        Purchasing Options
                                    </CardHeader>
                                    <CardBody>
                                        <P>On-Demand, Spot, Reserved (Standard +
                                            Convertible + Scheduled), Dedicated Host, Dedicated Instance</P>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsEC2Summary;
