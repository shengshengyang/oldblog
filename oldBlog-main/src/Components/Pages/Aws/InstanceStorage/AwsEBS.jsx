import React, {Fragment} from 'react';
import {Breadcrumbs, H5, H6, Image, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import EBSModify from "../../../../assets/images/aws/EBS-modify.png";
import EBSDeleteAter from "../../../../assets/images/aws/EBSDeleteAfter.png";
import EBSSnapshot from "../../../../assets/images/aws/AWSEBSSnapshot.png";
import EBSRecycle from "../../../../assets/images/aws/EBSRecycle.jpeg";

const AWSEBS = () => {

    return (
        <Fragment>
            <Breadcrumbs mainTitle='EBS (Elastic Block Store)' parent='AwsStorageSummary' title='Sample Card'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5>EBS是什麼?</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"7"}>
                                <P>可以在個體執行時連結的雲端處存空間,通常只能連到一個instance,有進階配置可連到多個instance,而一個instance
                                    可以連接
                                    <span className={"font-primary"}>多個</span>EBS
                                </P>
                                <P>可免費使用的量為 <span className={"font-danger"}>30GB type General Purpose (SSD) / month </span>
                                </P>
                                <P> 有以下幾個特點: </P>
                                <P>&nbsp;<strong className={"text-danger"}> network drive </strong> –
                                    由雲端連接，仍有可能有些許延遲</P>
                                <P>&nbsp;<strong className={"text-danger"}> locked to Available Zone </strong> –
                                    綁AZ,不同區域無法連接,如果要跨區複製必須先製作snapshot</P>
                                <P>&nbsp;<strong className={"text-danger"}> provisioned capacity </strong> –
                                    必須預先配置容量，如GBs, IOPS, 可隨時間增加</P>
                            </Col>
                            <Col md={"5"}>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${EBSModify}`, alt: '',}}/>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>EBS 設定</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"5"}>
                                <P>可調整在instance 被刪除時自動移除，也可以調整成不要移除</P>
                                <P>也可以透過console / AWS CLI 來做設定</P>
                                <P><span className={"font-secondary"}>即使要關掉instance也建議保留主volume</span> </P>
                            </Col>
                            <Col md={"7"}>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${EBSDeleteAter}`, alt: ''}}/>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row>
                            <Col md={"5"}>
                                <P>若沒有移除可以透過相同的EBS來快速恢復已刪除的instance, 也可以透過EBS的<span className={"font-primary"}>snapshot</span> 來備份到其他區域
                                    ，來使服務更快部屬到其他區域(AZ)
                                </P>
                            </Col>
                            <Col md={"7"}>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${EBSSnapshot}`, alt: ''}}/>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>EBS Snapshot 類型</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"5"}>
                                <div>
                                    <H6> <span className={"font-primary"}>EBS Snapshot Archive </span></H6>
                                    可以將Snapshot 移入<span className={"font-secondary"}>archive tier </span>,可以便宜
                                    <span className={"font-secondary"}>75%</span>,但如果要依快照做復原的話要等待
                                    <span className={"font-danger"}>24 - 72 </span> hr
                                </div>
                                <br/>
                                <br/>
                                <br/>
                                <div>
                                    <H6> <span className={"font-primary"}>Recycle Bin for EBS Snapshots </span></H6>
                                    <P>可設定刪除規則避免誤刪,可設定存在時間(1 day -> 1 yr)</P>
                                </div>
                            </Col>
                            <Col md={"7"}>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${EBSRecycle}`, alt: ''}}/>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AWSEBS;
