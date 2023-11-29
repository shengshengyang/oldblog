import React, {Fragment} from 'react';
import {Breadcrumbs, H5, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import dynamodb from "../../../../assets/images/aws/aws-dynamodb.png";
import keyValue from "../../../../assets/images/aws/aws-nosql-key-value.png";
import globalTable from "../../../../assets/images/aws/DynamoDB_Global-Tables.png";
import DangerPTitle from "../../../Common/DangerPTitle";

const AwsDatabaseDynamoDB = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='DynamoDB' title='aws' parent='AwsDatabaseSummary'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5>DynamoDB</H5>
                    </CardHeader>
                    <CardBody>
                        <P>非關聯性資料庫，屬於<span className={"font-primary"}>全受管、無伺服器、鍵值</span>的NoSQL 資料庫</P>
                        <P>每秒可達百萬等級的請求，千萬等級的row，不到10毫秒的效能,100多TB 的 storage</P>
                        <P>RDS 常見可搭配 ELB 做附載管理</P>
                        <img src={dynamodb} style={{width: "100%"}} alt=""/>
                        <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/sI-zciHAh-4"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                        <P/>
                        <Card>
                            <CardHeader>
                                <H5>資料類型</H5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md={"4"}>
                                        <P>no-SQL 的資料類型一般是使用 <span className={"font-danger"}> key / value</span> , PK 裡面含有partition key 及 Sort Key</P>
                                        <P>值的部分可以<strong><span className={"font-primary"}>大量橫向擴張</span></strong> </P>
                                    </Col>
                                    <Col md={"8"}>
                                        <img src={keyValue} style={{width: "100%"}} alt=""/>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <H5>Accelerator - DAX</H5>
                            </CardHeader>
                            <CardBody>
                                <P>用來管理 <span className={"font-primary"}>in-memory cache</span>,可以讓效率提升約10
                                    倍, 將延遲由毫秒縮小到微秒</P>
                                <P>DAX 只針對 DynamoDB, ElastiCache 則針對其他不同的database</P>
                                <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/RshPGdKXnxc"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <H5>Global Table</H5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md={"6"}>
                                        <P>與RDS 不同是他可以再多區域都進行同時的 read / write</P>
                                        <P>多作用中、多區域複寫可確保在一個區域的複本資料表上執行的更新，會複製到其他區域中的複本資料表。跨區域的資料表複本之間的複寫最終一致。</P>
                                        <DangerPTitle title={"一致性和衝突解決"} content={"Amazon DynamoDB 全域表在並行更新間使用「最後寫入者優先」調整，這樣 DynamoDB 會儘可能確定最後寫入者。透過這種衝突解決機制，所有複本均同意最新更新，並交集為均具有相同資料的狀態。"}/>
                                    </Col>
                                    <Col md={"6"}>
                                        <img src={globalTable} style={{width: "100%"}} alt=""/>
                                        <a  href='https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_HowItWorks.html' rel='noreferrer' target='_blank'>
                                            https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/V2globaltables_HowItWorks.html
                                        </a>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsDatabaseDynamoDB;
