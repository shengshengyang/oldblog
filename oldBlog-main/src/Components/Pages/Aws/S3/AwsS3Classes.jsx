import React, {Fragment, useState} from 'react';
import {Breadcrumbs, Btn, H5, H6, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Collapse, Container, Row, Table} from 'reactstrap';
import IconUL from "../../../Common/IconUL";
import s3Classes from "../../../../assets/images/aws/aws-s3-classes.jpg";
import {X} from "react-feather";

const AwsS3Security = () => {
    const [isOpen, setIsOpen] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
    });

    function toggle(id) {
        setIsOpen(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }

    return (
        <Fragment>
            <Breadcrumbs mainTitle='S3 Classes' parent='AwsS3Guideline' title='S3 Classes'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>S3的兩大特性</CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"6"}>
                                <Card>
                                    <CardBody>
                                        <H5><span className={"font-primary"}>Durability</span></H5>
                                        <IconUL icon={"fa fa-caret-right"} contentArray={["9個9的耐久性，99.999999999%不會消失",
                                        "如果存1000萬個object 經過10000年大約會損失一個個體"]}/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={"6"}>
                                <Card>
                                    <CardBody>
                                        <H5><span className={"font-primary"}>Availability</span></H5>
                                        <IconUL icon={"fa fa-caret-right"} contentArray={["每個個體的可用時間還是有所不同",
                                            "標準S3是99.99%耐久，代表一年中大約會有53分鐘無法使用"]}/>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5><span className={"font-primary"}>S3 的各種型態(點擊展開)</span></H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg={"6"}>
                                <Card>
                                    <img src={s3Classes} style={{width: "100%"}} alt=""/>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"card-no-border"}>
                                        <Btn attrBtn={{color: 'info', onClick: () => toggle(1)}}>Amazon S3 Standard</Btn>
                                    </CardHeader>
                                    <CardBody>
                                        <P/>
                                        <P>99.99%的可使用時間</P>
                                        <Collapse isOpen={isOpen[1]}>
                                            <Card>
                                                <CardBody>
                                                    <P>可使用在頻繁使用的資料，擁有低延遲及高吞吐量的優點，並可承受兩個設施故障資料仍在</P>
                                                    <P>常用來使用在: 大數據分析，手機或遊戲應用，內容發表</P>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </CardBody>
                                </Card>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"card-no-border"}>
                                        <Btn attrBtn={{color: 'info', onClick: () => toggle(2)}}> Amazon S3 Standard-Infrequent Access (IA)</Btn>
                                    </CardHeader>
                                    <CardBody>
                                        <P/>
                                        <P>用在<span className={"font-primary"}>較少訪問，但需要時則可以快速存取</span>的情境</P>
                                        <P>價錢比標準版低</P>
                                        <Collapse isOpen={isOpen[2]}>
                                            <Card>
                                                <CardBody>
                                                    <P>分為兩種: </P>
                                                    <H6><span className={"font-warning"}>Amazon S3 Standard-Infrequent Access (S3 Standard-IA)</span></H6>
                                                    <IconUL icon={"fa fa-caret-right"} contentArray={["99.99% 可使用時間", "用在災難恢復及備份"]}/>
                                                    <P/>
                                                    <H6><span className={"font-warning"}>Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)</span></H6>
                                                    <IconUL icon={"fa fa-caret-right"} contentArray={["在單一區域有99.999999999% 的耐久性，但是如果該區域資料中心被毀資料就直接消失"
                                                        , "會用在儲存第二份備份"]}/>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </CardBody>
                                </Card>
                            </Col>
                            {/*雪球系列*/}
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"card-no-border"}>
                                        <Btn attrBtn={{color: 'success', onClick: () => toggle(4)}}>Amazon S3 Glacier Storage</Btn>
                                    </CardHeader>
                                    <CardBody>
                                        <P/>
                                        <P>低價格的存檔或備份，在資料<span className={"font-danger"}>儲存及取出</span>時收費</P>
                                        <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/gMzVi7Z8zBo"
                                                title="YouTube video player" frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen></iframe>
                                        <Collapse isOpen={isOpen[4]}>
                                            <Card>
                                                <CardBody>
                                                    <P>分為三種: </P>
                                                    <H6><span className={"font-warning"}>Amazon S3 Glacier Instant Retrieval</span></H6>
                                                    <IconUL icon={"fa fa-caret-right"} contentArray={["毫秒級的取出速度，適合每季去做計算或是取出的數據",
                                                        "最低儲存天數為90天"]}/>
                                                    <P/>
                                                    <H6><span className={"font-warning"}>Amazon S3 Glacier Flexible Retrieval</span></H6>
                                                    <IconUL icon={"fa fa-caret-right"}
                                                            contentArray={["前一代的 glacier", "Expedited (1-5分鐘)", "Standard (3-5小時)", "Bulk (5-12小時)"
                                                                , "最低儲存天數為90天"]}/>
                                                    <P/>
                                                    <H6><span className={"font-warning"}>Amazon S3 Glacier Deep Archive</span></H6>
                                                    <IconUL icon={"fa fa-caret-right"} contentArray={["使用在長期處存"
                                                        , "Standard (12 小時)", "Bulk (48 小時)", "最少需儲存180 天"]}/>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"card-no-border"}>
                                        <Btn attrBtn={{color: 'warning', onClick: () => toggle(7)}}>Amazon S3 Intelligent Tiering</Btn>
                                    </CardHeader>
                                    <CardBody>
                                        <P/>
                                        <P>每月付流量費使其自動監看並調正費用，會根據使用量在各個個體間自動移動</P>
                                        <P>不能打折</P>
                                        <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/6brzBokCYV0"
                                                title="YouTube video player" frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen></iframe>
                                        <Collapse isOpen={isOpen[7]}>
                                            <Card>
                                                <CardBody>
                                                    <IconUL icon={"fa fa-caret-right"} contentArray={[
                                                        "Frequent Access tier (自動): 預設",
                                                        "Infrequent Access tier (自動): 30天沒用",
                                                        "Archive Instant Access tier (自動): 90 天沒用",
                                                        "Archive Access tier : 可自訂 90 - 700+ 天",
                                                        "Deep Archive Access tier : 可自訂 180 - 700+ 天"]}/>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>類別比較表</H5>
                    </CardHeader>
                    <CardBody>
                        <Table hover={true}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>Standard</th>
                                <th>Intelligent-Tiering</th>
                                <th>Standard-IA</th>
                                <th>One Zone-IA</th>
                                <th>Glacier Instant Retrieval</th>
                                <th>Glacier Flexible Retrieval</th>
                                <th>Glacier Deep Archive</th>
                            </tr>
                            </thead>
                            <tbody className={"align-items-center"}>
                            <tr >
                                <td>Durability</td>
                                <td colSpan={7} style={{ textAlign: 'center' }}>99.999999999% == (11個9)</td>
                            </tr>
                            <tr >
                                <td>Availability</td>
                                <td>99.9%</td>
                                <td>99.9%</td>
                                <td>99.9%</td>
                                <td ><span className={"font-danger"}>99.5%</span></td>
                                <td>99.9%</td>
                                <td>99.9%</td>
                                <td>99.9%</td>
                            </tr>
                            <tr >
                                <td><span>Availability SLA </span></td>
                                <td colSpan={7} style={{ textAlign: 'center' }}>99.9%</td>
                            </tr>
                            <tr >
                                <td><span>Availability Zones </span></td>
                                <td colSpan={3} style={{ textAlign: 'center' }}> >= 3 </td>
                                <td>1</td>
                                <td colSpan={3} style={{ textAlign: 'center' }}> >= 3 </td>
                            </tr>
                            <tr >
                                <td><span>Min. Storage Duration Charge</span></td>
                                <td><X/></td>
                                <td><X/></td>
                                <td>30 天</td>
                                <td>30 天</td>
                                <td>90 天</td>
                                <td>90 天</td>
                                <td>180 天</td>
                            </tr>
                            <tr >
                                <td><span>Min. Billable Object Size</span></td>
                                <td><X/></td>
                                <td><X/></td>
                                <td>128 KB</td>
                                <td>128 KB</td>
                                <td>128 KB</td>
                                <td>40 KB </td>
                                <td>40 KB </td>
                            </tr>
                            <tr >
                                <td><span>Retrieval Fee</span></td>
                                <td><X/></td>
                                <td><X/></td>
                                <td colSpan={5} style={{textAlign: 'center'}}>Per GB retrieved</td>
                            </tr>
                            </tbody>
                        </Table>
                        <P/>
                        <P>定價部分可參考:
                            <a href='https://aws.amazon.com/tw/s3/pricing/' rel='noreferrer' target='_blank'>https://aws.amazon.com/tw/s3/pricing/</a>
                        </P>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsS3Security;
