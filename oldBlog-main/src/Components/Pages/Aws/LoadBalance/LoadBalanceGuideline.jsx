import React, {Fragment, useState} from 'react';
import {Breadcrumbs, Btn, H5, H6, Image, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Collapse, Container, Row} from 'reactstrap';
import DangerPTitle from "../../../Common/DangerPTitle";
import {ArrowRight} from "react-feather";
import AwsAlb from "../../../../assets/images/aws/aws-alb.png";
import AwsNlb from "../../../../assets/images/aws/aws-nlb.png";
import AwsGlb from "../../../../assets/images/aws/aws-glb.png";
import PrimaryPTitle from "../../../Common/PrimaryPTitle";

const LoadBalanceGuideline = () => {

    const [isOpen, setIsOpen] = useState({
        1: false,
        2: false,
    });

    function toggle(id) {
        setIsOpen(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }

    return (
        <Fragment>
            <Breadcrumbs mainTitle='Elastic Load Balance'  title='Sample Card'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader><H6>什麼是 Load Balance?</H6>  </CardHeader>
                    <CardBody>
                        <P>用來分配前端的request到 multi-server, 分為三種使用方式</P>
                        <Row>
                            <Col md={"4"}>
                                <Card>
                                    <CardHeader className={"text-center font-primary"}><H6> Application Load
                                        Balancer</H6></CardHeader>
                                    <CardBody>
                                        <P>HTTP / HTTPS / RPC protocols</P>
                                        <P>HTTP Routing </P>
                                        <P>靜態DNS (URL)</P>
                                        <Image attrImage={{className: 'img-fluid d-inline', src: `${AwsAlb}`, alt: '',}}/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={"4"}>
                                <Card>
                                    <CardHeader className={"text-center font-primary"}><H6> Network Load Balancer</H6></CardHeader>
                                    <CardBody>
                                        <P>TCP / UDP protocols (Layer 4)</P>
                                        <DangerPTitle title={"High Performance"} content={"每秒數百萬次請求"}/>
                                        <DangerPTitle title={"靜態IP"} content={"經動態IP"}/>
                                        <Image attrImage={{className: 'img-fluid d-inline', src: `${AwsNlb}`, alt: '',}}/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={"4"}>
                                <Card>
                                    <CardHeader className={"text-center font-primary"}><H6> Gateway Load Balancer</H6></CardHeader>
                                    <CardBody>
                                        <P>GENEVE Protocol on IP Packets (Layer 3)</P>
                                        <DangerPTitle title={"Route Traffic to Firewalls"} content={"可管理EC2 instance"}/>
                                        <P>Intrusion detection</P>
                                        <Image attrImage={{className: 'img-fluid d-inline', src: `${AwsGlb}`, alt: '',}}/>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H6>Load Balance 的特點 </H6>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col sm={"6"}>
                                <Card>
                                    <CardHeader>
                                        <H6><span className={"font-primary"}> Scalability 可擴展性</span></H6>
                                    </CardHeader>
                                    <CardBody>
                                        <P>application / system 可以隨使用loads 自己變大縮小 分為兩種:</P>
                                        <Row>
                                            <Col lg={"6"}>
                                                <Card className={'card-absolute'}>
                                                    <CardHeader className={"card-no-border"}>
                                                        <Btn attrBtn={{color: 'primary', onClick: () => toggle(1)}}>Vertical Scalability</Btn>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <P>增加 instance size</P>
                                                        <Collapse isOpen={isOpen[1]}>
                                                            <Card>
                                                                <CardBody>
                                                                    <P>增加 instance <span className={"font-danger"}>本身的 size</span>, like: t2.micro<ArrowRight/>t2.large</P>
                                                                    <P>常用在不能停的系統上面，如DB</P>
                                                                    <P>硬體還是會有限制最高可以增加的上限</P>
                                                                    <P>從: t2.nano - 0.5G of RAM, 1 vCPU</P>
                                                                    <P>到: u-12tb1.metal – 12.3 TB of RAM, 448 vCPUs</P>
                                                                </CardBody>
                                                            </Card>
                                                        </Collapse>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col lg={"6"}>
                                                <Card className={'card-absolute'}>
                                                    <CardHeader className={"card-no-border"}>
                                                        <Btn attrBtn={{color: 'secondary', onClick: () => toggle(2)}}>Horizontal Scalability</Btn>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <P>增加 instance number</P>
                                                        <Collapse isOpen={isOpen[2]}>
                                                            <Card>
                                                                <CardBody>
                                                                    <P>增加 Instances 的<span className={"font-danger"}>數量</span> ，每個增加的instance與原本的instance 配置是相同的
                                                                        <ArrowRight/>常用在網頁或應用程式</P>
                                                                    <P>可以設定 Auto Scaling Group 及使用Load Balance 來做分配</P>
                                                                </CardBody>
                                                            </Card>
                                                        </Collapse>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>

                                    </CardBody>
                                </Card>
                            </Col>
                            <Col sm={"6"}>
                                <Card>
                                    <CardHeader>

                                        <H6><span className={"font-primary"}> High Availability 高使用性</span></H6>
                                    </CardHeader>
                                    <CardBody>
                                       <P>使用 horizontal scaling 的方式使application 至少跑在<span className={"font-primary"}>兩個以上</span>  的Availability Zones(AZ)</P>
                                       <P>主要用來防止意外事件造成<span className={"font-primary"}>資料中心流失</span>  </P>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader><H5>Auto Scaling Group</H5></CardHeader>
                    <CardBody>
                        <P>用來設定自動增加的群組，不管事垂直或水平增加皆可設定，設定後可以自動連接至 load balance</P>
                        <P>確認我們有最基本的instance 數量, 或不超過最多的數量</P>
                        <P>自動替換 unhealthy instances</P>
                        <Card>
                            <CardHeader className={"card-no-border "}><H5><span className={"font-primary"}>Scaling Strategies</span></H5> </CardHeader>
                            <CardBody>
                                <DangerPTitle title={"Manual Scaling"} content={" 手動更新ASG的size"}/>
                                <DangerPTitle title={"Dynamic Scaling"} content={"依照需求資動更新，會有以下幾種"}/>
                                <PrimaryPTitle title={"1. Simple / Step Scaling"} content={" CloudWatch alarm 後啟動 +2 unit 或 -1 unit"}/>
                                <PrimaryPTitle title={"2. Target Tracking Scaling"} content={"ex: 想要平均的 CPU 在 40%"}/>
                                <PrimaryPTitle title={"3. Scheduled Scaling"} content={"根據已知的模式更新(預期有顛峰期就預先增加，休息期減少)"}/>
                                <DangerPTitle title={"Predictive Scaling"} content={"依照機器學習續預測未來可能會塞車的狀況"}/>
                            </CardBody>
                        </Card>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default LoadBalanceGuideline;
