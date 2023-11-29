import React, {Fragment} from 'react';
import {Breadcrumbs, H5, Image, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import EFSConnection from "../../../../assets/images/aws/EFSCConnection.png";
import EBSCompareEFS from "../../../../assets/images/aws/EBS-compare-EFS.png";
import EFSIA from "../../../../assets/images/aws/EFS-IA.png";

const AWSEFS = () => {

    return (
        <Fragment>
            <Breadcrumbs mainTitle='EFS (Elastic File System)' parent='AwsStorageSummary' title='Sample Card'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5>EFS是什麼?</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"7"}>
                                <P>可被安裝在
                                    <span className={"font-primary"}>數百個</span>instances 的 雲端檔案系統(network file system)
                                </P>
                                <P>可以使用在Linux並且 <span className={"font-danger"}>支援多地區</span></P>
                                <P> 彈性大但是貴(gp2的3倍),沒有相關節約計畫 </P>
                            </Col>
                            <Col md={"5"}>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${EFSConnection}`, alt: '',}}/>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>EBS vs EFS</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"4"}>
                                <P>主要不同點在要跨區使用時,EBS需透過snapshot複製備份後在新的AZ創建,EFS則可以直接使用</P>
                            </Col>
                            <Col md={"8"}>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${EBSCompareEFS}`, alt: ''}}/>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>EFS Infrequent Access (EFS-IA)</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"8"}>
                                <P>跟一般的EFS相比, <span className={"font-primary"}>Storage class</span>可以省下約
                                    <span className={"font-danger"}>92%</span>的費用</P>
                                <P>透過布建<span className={"font-primary"}> Lifecycle Policy</span>,
                                    EFS可以自動將久未使用的檔案移動至 EFS-IA
                                </P>
                            </Col>
                            <Col md={"4"}>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${EFSIA}`, alt: ''}}/>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AWSEFS;
