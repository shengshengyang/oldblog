import React, {Fragment, useState} from 'react';
import {Breadcrumbs, H5, H6, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import file from "../../../../assets/images/aws/aws-lambda-file.png";
import stream from "../../../../assets/images/aws/aws-lambda-stream.png";
import web from "../../../../assets/images/aws/aws-lambda-web.png";
import iot from "../../../../assets/images/aws/aws-lambda-iot.png";
import mobile from "../../../../assets/images/aws/aws-lambda-moblile.png";
import apiGateWay from "../../../../assets/images/aws/aws-api-gateway.png";
import IconUL from "../../../Common/IconUL";
import {Link} from "react-router-dom";

const AwsServerless = () => {
    const [BasicTab, setBasicTab] = useState('1');
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Amazon Serverless services' title='Amazon Serverless services' parent='AwsComputeSummary'/>
            <Container fluid={false }>
                <Card>
                    <CardHeader>
                        <H5>Lambda</H5>
                    </CardHeader>
                    <CardBody>
                        <P> AWS Lambda 是一種無伺服器、事件推動的運算服務，無需佈建或管理伺服器，依照所使用時間付費</P>
                        <Row>
                            <Col md={6}>
                                <Card>
                                    <CardBody>
                                        <P>可使用之語言: </P>
                                        <IconUL icon={"fa fa-check"} contentArray={["Node.js", "Python", "Java(8)", "C#", "Golang", "C#/Powershell", "Ruby", "Custom Runtime API (ex. Rust)"]}/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Card>
                                    <CardBody>
                                        <P>優點: </P>
                                        <IconUL icon={"fa fa-thumbs-up"} contentArray={["依照每次的request及計算時間收費", "aws其他的相容性好", "依事件驅動", "支援多語言",
                                            "可在CloudWatch監控"]}/>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                         <br/>
                        <Nav tabs>
                            <NavItem>
                                <NavLink href='#' className={BasicTab === '1' ? 'active' : ''} onClick={() => setBasicTab('1')}>檔案處理</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='#' className={BasicTab === '2' ? 'active' : ''} onClick={() => setBasicTab('2')}>串流處理</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='#' className={BasicTab === '3' ? 'active' : ''} onClick={() => setBasicTab('3')}>Web應用程式</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='#' className={BasicTab === '4' ? 'active' : ''} onClick={() => setBasicTab('4')}>Iot後端</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='#' className={BasicTab === '5' ? 'active' : ''} onClick={() => setBasicTab('5')}>行動後端</NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={BasicTab}>
                            <TabPane className='fade show' tabId='1'>
                                <P attrPara={{ className: 'mb-0 m-t-30' }}>
                                    <img src={file} style={{width: "100%"}} alt=""/>
                                </P>
                            </TabPane>
                            <TabPane className='fade show' tabId='2'>
                                <P attrPara={{ className: 'mb-0 m-t-30' }}>
                                    <img src={stream} style={{width: "100%"}} alt=""/>
                                </P>
                            </TabPane>
                            <TabPane className='fade show' tabId='3'>
                                <P attrPara={{ className: 'mb-0 m-t-30' }}>
                                    <img src={web} style={{width: "100%"}} alt=""/>
                                </P>
                            </TabPane>
                            <TabPane className='fade show' tabId='4'>
                                <P attrPara={{ className: 'mb-0 m-t-30' }}>
                                    <img src={iot} style={{width: "100%"}} alt=""/>
                                </P>
                            </TabPane>
                            <TabPane className='fade show' tabId='5'>
                                <P attrPara={{ className: 'mb-0 m-t-30' }}>
                                    <img src={mobile} style={{width: "100%"}} alt=""/>
                                </P>
                            </TabPane>
                        </TabContent>
                        <P/>
                        <P>付費連結可參考
                        <a href={"https://aws.amazon.com/tw/lambda/pricing/"} target={"_blank"} rel={"noreferrer"}>https://aws.amazon.com/tw/lambda/pricing/</a>
                        </P>

                        <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/eOBq__h4OJ4"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5> API Gateway</H5>
                    </CardHeader>
                    <CardBody>
                        <P>建立、發佈、維護、監控和保護任何規模的 REST、HTTP 和 WebSocket API</P>
                        <IconUL icon={"fa fa-check"} contentArray={["以 HTTP 為基礎","啟用無狀態的用戶端伺服器通訊。", "實作標準 HTTP 方法，例如 GET、POST、PUT、PATCH 和 DELETE"]}/>
                        <br/>
                        <img src={apiGateWay} style={{width: "100%"}} alt=""/>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>Batch</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"6"}>
                                <P>任何規模的批次處理、ML 模型訓練以及分析，會自動啟用<span className={"font-primary"}>EC2 instances</span>或<span
                                    className={"font-primary"}>Spot instances</span>
                                    ，可以自行設定排程
                                </P>
                                <P>Batch jobs 會被定義為 <span className={"font-danger"}>Docker image</span>並跑在
                                    <Link className='ms-2' to={`${process.env.PUBLIC_URL}/aws/compute/ECS/:layout`}>
                                        ECS
                                    </Link>上</P>
                            </Col>
                            <Col md={"6"}>
                                <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/j_iI1DzSi5g"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>

                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>Batch vs Lambda</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"6"}>
                                <Card>
                                    <CardHeader>
                                        <H6><span className={"font-warning"}>Lambda</span> </H6>
                                    </CardHeader>
                                    <CardBody>
                                        <P>受時間限制</P>
                                        <P>受限runtimes</P>
                                        <P>會因為暫存空間受限</P>
                                        <P>Servelsee</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={"6"}>
                                <Card>
                                    <CardHeader>
                                        <H6><span className={"font-warning"}>Batch</span> </H6>
                                    </CardHeader>
                                    <CardBody>
                                        <P>沒有時間限制</P>
                                        <P>只要可以被包成Docker image都可以使用</P>
                                        <P>儲存空間看EBS / instance store</P>
                                        <P>依據EC2 規則來跑</P>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>Lightsail</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"6"}>
                                <P>新手友善，同時具備server, storage, databases, networking</P>
                                <P>常用在web application(LAMP, Nginx, MEAN, Node.js…)</P>
                                <P>Websites (WordPress, Magento, Plesk, Joomla)</P>
                                <P>測試環境</P>
                            </Col>
                            <Col md={"6"}>
                                <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/wzhTAwRbdXw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            </Col>
                        </Row>

                    </CardBody>
                </Card>

            </Container>
        </Fragment>
    );
};

export default AwsServerless;
