import React, {Fragment} from 'react';
import {Breadcrumbs, H5, Image, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import EBSModify from "../../../../assets/images/aws/EBS-modify.png";
import {ArrowRight, RotateCcw} from "react-feather";

const AWSAMI = () => {

    return (
        <Fragment>
            <Breadcrumbs mainTitle='AMI (Amazon Machine Image)' parent='AwsStorageSummary' title='Sample Card'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5>AMI是什麼?</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"7"}>
                                <P>pre-configured virtual machine image ,可以包含啟動instance 所需的所有訊息包含：
                                    <strong><span
                                        className={"font-primary"}>software, configuration, OS, monitoring</span>
                                    </strong>
                                    可以更快速的佈建instances 因為已經pre-packaged
                                </P>
                                <P>AMI <span className={"font-secondary"}>有綁定區域</span>，但可以被複製到各區域去啟動個體</P>
                                <P>可以從下列幾項去佈建 instances: </P>
                                <P>&nbsp;<strong className={"text-danger"}> Public AMI </strong> –
                                    由aws 所提供</P>
                                <P>&nbsp;<strong className={"text-danger"}> Self AMI </strong> –
                                    自己創建</P>
                                <P>&nbsp;<strong className={"text-danger"}> AWS Marketplace AMI </strong> –
                                    其他人佈建好的AMI(可能需要費用)</P>
                            </Col>
                            <Col md={"5"}>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${EBSModify}`, alt: '',}}/>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>EC2 image builder</H5>
                    </CardHeader>
                    <CardBody>
                        <P>EC2 image builder 是用來自動產生Virtual Machine 或 container image </P>
                        <P>會自動經過步驟:
                            <strong className={"font-primary"}> creation </strong> <ArrowRight/>
                            <strong className={"font-primary"}> maintain </strong> <ArrowRight/>
                            <strong className={"font-primary"}> validation </strong> <ArrowRight/>
                            <strong className={"font-primary"}> test </strong> <RotateCcw/>
                        </P>
                        <P>也可以使用排程來做更新,此服務為<span>免費</span> ，只需要付新創建的instances 費用</P>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AWSAMI;
