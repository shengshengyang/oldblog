import React, {Fragment} from 'react';
import {Breadcrumbs, H5, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';

const AwsStorageSummary = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='EC2 Instance Storage' title='Sample Card'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5>總結重點</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-warning"}>
                                        EBS volumes
                                    </CardHeader>
                                    <CardBody>
                                        <P>
                                            在EC2創建時連接到個體的網路硬碟，會存在於地區（ＡＺ）, 要備份到其他區域必須透過
                                            EBS snapshot
                                        </P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-primary"}>
                                        AMI
                                    </CardHeader>
                                    <CardBody>
                                        <P>用來預先設定要創建的EC2 </P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-primary"}>
                                        EC2 Image Builder
                                    </CardHeader>
                                    <CardBody>
                                        <P>自動建立,測試,分配各類AMI</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-secondary"}>
                                        EC2 Instance Store
                                    </CardHeader>
                                    <CardBody>
                                        <P>連結到EC2 的高性能硬碟，在個體結束時一起消失</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-secondary"}>
                                        EFS
                                    </CardHeader>
                                    <CardBody>
                                        <P>連接 IAM </P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-secondary"}>
                                        EFS-IA
                                    </CardHeader>
                                    <CardBody>
                                        <P>On-Demand, Spot, Reserved (Standard +
                                            Convertible + Scheduled), Dedicated Host, Dedicated Instance</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-danger"}>
                                        FSx for Windows
                                    </CardHeader>
                                    <CardBody>
                                        <P>On-Demand, Spot, Reserved (Standard +
                                            Convertible + Scheduled), Dedicated Host, Dedicated Instance</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-danger"}>
                                        FSx for Lustre
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

export default AwsStorageSummary;
