import React, {Fragment} from 'react';
import {Breadcrumbs, H5, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row, Table} from 'reactstrap';
import IconUL from "../../../Common/IconUL";
import SnowFlow from "../../../../assets/images/aws/aws-snow-flow.png";
import SnowMobile from "../../../../assets/images/aws/aws-snowmobile.png";
import SnowFamily from "../../../../assets/images/aws/aws-snow-family-1024x323.png";
import DangerPTitle from "../../../Common/DangerPTitle";
import {CheckCircle, X} from "react-feather";


const AwsS3Snow = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Snow' title='aws'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5> Aws Snow Family</H5>
                    </CardHeader>
                    <CardBody>
                        <Card>
                            <CardHeader><H5><span className={"font-primary"}>Snow 是什麼? </span> </H5></CardHeader>
                            <CardBody>
                                <P>考慮到透過網路上傳大量資料會遇到許多的挑戰，如連線、頻寬、網路費用、連線穩定等，於是用
                                    <span className={"font-danger"}>實體</span>的方式蒐集資料並最後回傳aws </P>
                                <Row>
                                    <Col md={"6"}>
                                        <H5><span className={"font-warning"}>資料轉移</span> </H5>
                                        <IconUL icon={"fa fa-caret-right"} contentArray={["Snowcone" , "Snowball Edge" , "Snowmobile"]}/>
                                    </Col>
                                    <Col md={"6"}>
                                        <H5><span className={"font-warning"}>邊緣運算</span> </H5>
                                        <IconUL icon={"fa fa-caret-right"} contentArray={["Snowcone" , "Snowball Edge" ]}/>
                                        <P>可以run EC2 instances 及 AWS lambda (use AWS IoT Greengrass)</P>
                                        <P/>
                                    </Col>
                                    <img src={SnowFamily} style={{width: "100%"}} alt=""/>
                                    <P/>
                                    <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/DQzBbzvqj9k"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen></iframe>
                                </Row>
                                <P/>
                                <Card style={{border: "solid", borderWidth: "2px", borderColor: "green", textAlign: "center", fontSize: "16px"}}>
                                    <CardBody>
                                        snow family 簡言之就是可用來離線傳輸資料的裝置，若預期資料的上傳會超過一周，請使用
                                    </CardBody>
                                </Card>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader><H5><span className={"font-primary"}>Snowball Edge</span></H5></CardHeader>
                            <CardBody>
                                <P>用來移動TB 或 PB 等級的資料進出aws，並依照資料轉移的工作收費</P>
                                <DangerPTitle title={"Snowball Edge Storage Optimized"} content={"80 TB HDD,最大 40 vCPUs, 80 GiB 記憶體, 可做儲存叢集(clustering ) "}/>
                                <DangerPTitle title={"Snowball Edge Compute Optimized"} content={"42 TB HDD 或 28TB NVMe, 104 vCPUs, 416 GiB of RAM, Optional GPU, Optional GPU"}/>
                                <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/bxSD1Nha2k8"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader><H5><span className={"font-primary"}>AWS Snowcone & Snowcone SSD</span></H5></CardHeader>
                            <CardBody>
                                <P>體積小好攜帶(2.1 kg)，可帶去各種困難環境，並提供儲存、運算、資料傳輸功能，相較於snowball的大體積有方便之優勢</P>
                                <P>2 CPUs / 4 GB 記憶體 / type C充電或可選擇電池</P>
                                <P><span className={"font-warning"}>也可以聯網與 aws 做 dataSync</span></P>
                                <DangerPTitle title={"Snowcone"} content={"8TB HDD storage"}/>
                                <DangerPTitle title={"Snowcone SSD"} content={"14TB SSD storage"}/>
                                <img src={SnowFlow} style={{width: "100%"}} alt=""/>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader><H5><span className={"font-primary"}>Snowmobile</span></H5></CardHeader>
                            <CardBody>
                                <P>長達 45 英尺的加固貨櫃，由貨櫃聯結車拖行，每輛 Snowmobile 可傳輸高達 100 PB 的資料,如果超過10PB的用量就會比snowball好</P>
                                <P>高安全性，有溫控、GPS、24 / 7 台監視器</P>
                                <img src={SnowMobile} style={{width: "100%"}} alt=""/>
                                <a href='https://d1.awsstatic.com/Product-Page-Diagram_AWS-Snowmobile%402x.4f7215d254697f7cb01d2e7189b81cb660165260.png' rel='noreferrer' target='_blank'>https://d1.awsstatic.com/Product-Page-Diagram_AWS-Snowmobile%402x.4f7215d254697f7cb01d2e7189b81cb660165260.png</a>
                            </CardBody>
                        </Card>
                    </CardBody>
                    <Card>
                        <CardBody>
                            <Table hover={true}>
                                <thead>
                                <tr>
                                    <th></th>
                                    <th>Snowcone & Snowcone SSD</th>
                                    <th>Snowball Edge Storage Optimized</th>
                                    <th>Snowmobile</th>
                                </tr>
                                </thead>
                                <tbody className={"align-items-center"}>
                                <tr >
                                    <td>容量</td>
                                    <td>8TB HDD / 14TB SSD</td>
                                    <td>80TB 可用</td>
                                    <td>&lt; 100PB</td>
                                </tr>
                                <tr >
                                    <td>移轉大小</td>
                                    <td>線上 / 離線最大 24TB</td>
                                    <td>離線 最大到petabytes</td>
                                    <td>離線 最大到exabytes</td>
                                </tr>
                                <tr>
                                    <td>資料同步</td>
                                    <td><span className={"font-success"}><CheckCircle/></span> </td>
                                    <td><span className={"font-danger"}><X/></span></td>
                                    <td><span className={"font-danger"}><X/></span></td>
                                </tr>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardHeader>
                            <H5><span className={"font-primary"}>AWS OpsHub</span></H5>
                        </CardHeader>
                        <CardBody>
                            <P>snow family 的後台，可以AWS OpsHub在用戶端電腦上執行諸如解除鎖定和設定單一或叢集裝置、傳輸檔案，以及啟動和管理
                                Snow Family 裝置上執行的執行個體等工作，將snow api GUI 化</P>
                            <iframe width="100%" height="400vh" src="https://www.youtube.com/embed/0Q7s7JiBCf0"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                        </CardBody>
                    </Card>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsS3Snow;
