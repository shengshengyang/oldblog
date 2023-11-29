import React, {Fragment, useState} from 'react';
import {Breadcrumbs, H5, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import EMR from "../../../../assets/images/aws/aws-EMR.png";
import Athena from "../../../../assets/images/aws/aws-athena.png";
import QuickSight from "../../../../assets/images/aws/aws-quicksight.png";
import DocumentDB from "../../../../assets/images/aws/aws-document-db.png";
import QLDB from "../../../../assets/images/aws/aws-qldb.png";
import Glue from "../../../../assets/images/aws/aws-glue.png";
import DBMigrateSame from "../../../../assets/images/aws/aws-db-migration-same.png";
import DBMigrateDiff from "../../../../assets/images/aws/aws-db-migration-diff.png";
import DangerPTitle from "../../../Common/DangerPTitle";
import IconUL from "../../../Common/IconUL";

const AwsDatabaseCollection = () => {
    const [BasicTab, setBasicTab] = useState('1');
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Different Types' title='aws' parent='AwsDatabaseSummary'/>
            <Container fluid={true}>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <H5><span className={"font-primary"}>Redshift</span></H5>
                            </CardHeader>
                            <CardBody>
                                <P>SQL 跨資料倉儲、操作資料庫和資料湖分析結構化和半結構化資料，從而使用 AWS 設計的硬體和機器學習在任何規模都能提供最佳價格效能</P>
                                <P>base on PostgreSQL, 不是用來當OLTP(線上交易處理) 而是 OLAP(線上處理分析) ，針對 PB等級的計算可以達到10倍以上的效率</P>
                                <P>可以使用如 aws Quicksight 等地 BI tool</P>
                                <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/lWwFJV_9PoE"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader><H5> <span className={"font-primary"}>Amazon EMR 大數據平台</span></H5></CardHeader>
                            <CardBody>
                                <P>Elastic MapReduce, 用來製造 Hadoop clusters (Big Data)，叢集可以由上百個instance 所組成，支援常見的 Apache Spark, HBase, Presto, Flink等</P>
                                <P>自動擴展 Spot instance (用完隨時可能消失)</P>
                                <img src={EMR} style={{width: "100%"}} alt=""/>
                                <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/iBDi6qFqG68"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardHeader><H5> <span className={"font-primary"}>Amazon Athena</span></H5></CardHeader>
                            <CardBody>
                                <P>可以搜尋<span className={"font-info"}>關聯性 / 非關聯性</span> 的資料，內容儲存於S3，用來作為ML 資料使用</P>
                                <P>建立在開放原始碼 Trino 和 Presto 引擎和 Apache Spark 框架之上，無需佈建或設定</P>
                                <P>支援CSV, JSON, ORC, Avro, and Parquet (built on Presto)等格式，並且也可以使用 Google Analytics 的資料進行分析</P>
                                <DangerPTitle title={"價格"} content={"5鎂 / TB資料搜尋"}/>
                                <img src={Athena} style={{width: "100%"}} alt=""/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader><H5> <span className={"font-primary"}>Amazon QuickSight</span></H5></CardHeader>
                            <CardBody>
                                <P>可以將RDS, Aurora, Athena, Redshift, S3…等轉換為可視化的dashboard</P>
                                <img src={QuickSight} style={{width: "100%"}} alt=""/>
                                <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/2V1bHRLRG-w"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardHeader><H5> <span className={"font-primary"}>DocumentDB</span></H5></CardHeader>
                            <CardBody>
                                <P>就是aws 版本的 MongoDB(No-SQL database)，可複製到三個不同AZ</P>
                                <P>size 可以從10GB 至 64TB，會自動分配workload</P>
                                <img src={DocumentDB} style={{width: "100%"}} alt=""/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader><H5> <span className={"font-primary"}>Amazon Neptune</span></H5></CardHeader>
                            <CardBody>
                                <P>專門用來儲存 <span className={"font-warning"}>圖像</span>常被使用來做為<span className={"font-warning"}>社群網路</span></P>
                                <Row>
                                    <Col md={"4"}>
                                        <IconUL icon={"fa fa-caret-right"} contentArray={["使用者連接的朋友" , "貼文下的回應"]}/>
                                    </Col>
                                    <Col md={"4"}>
                                        <IconUL icon={"fa fa-caret-right"} contentArray={["回應有幾個讚" , "使用者的分享及轉推"]}/>
                                    </Col>
                                </Row>
                                <P>最多可於3個AZ做使用，並最多有15個讀取副本</P>
                                <img src={DocumentDB} style={{width: "100%"}} alt=""/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardHeader><H5> <span className={"font-primary"}>Amazon Neptune</span></H5></CardHeader>
                            <CardBody>
                                <P>專門用來儲存 <span className={"font-warning"}>圖像</span>常被使用來做為<span className={"font-warning"}>社群網路</span></P>
                                <Row>
                                    <Col md={"4"}>
                                        <IconUL icon={"fa fa-caret-right"} contentArray={["使用者連接的朋友" , "貼文下的回應"]}/>
                                    </Col>
                                    <Col md={"4"}>
                                        <IconUL icon={"fa fa-caret-right"} contentArray={["回應有幾個讚" , "使用者的分享及轉推"]}/>
                                    </Col>
                                </Row>
                                <P>最多可於3個AZ做使用，並最多有15個讀取副本</P>
                                <img src={DocumentDB} style={{width: "100%"}} alt=""/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader><H5> <span className={"font-primary"}>Amazon QLDB</span></H5></CardHeader>
                            <CardBody>
                                <P>Amazon Quantum Ledger Database (Amazon QLDB) 是一個全受管帳本資料庫，提供透明、不可變且以密碼編譯方式驗證的交易日誌。</P>
                                <P>所有的交易資料<span className={"font-danger"}>皆不能</span>刪除，並可以查詢所有的變更紀錄</P>
                                <img src={QLDB} style={{width: "100%"}} alt=""/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardHeader><H5> <span className={"font-primary"}>Amazon Managed Blockchain</span></H5></CardHeader>
                            <CardBody>
                                <P>去中心化的區塊鍊技術，fabric 及 ethereum等開源框架有使用到，並且是serverless服務，</P>
                                <P>所有的交易資料<span className={"font-danger"}>皆不能</span>刪除，並可以查詢所有的變更紀錄</P>
                                <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/X14bE8zWRvo"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader><H5> <span className={"font-primary"}>Amazon Managed Blockchain</span></H5></CardHeader>
                            <CardBody>
                                <P>去中心化的區塊鍊技術，fabric 及 ethereum等開源框架有使用到，並且是serverless服務，</P>
                                <P>所有的交易資料<span className={"font-danger"}>皆不能</span>刪除，並可以查詢所有的變更紀錄</P>
                                <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/X14bE8zWRvo"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardHeader><H5> <span className={"font-primary"}>AWS Glue</span></H5></CardHeader>
                            <CardBody>
                                <P>AWS Glue 是一種無伺服器、可擴展的資料整合服務，適合將原有資料轉會為要分析的資料</P>
                                <P>分類好的datasets 可被用於如 Athena, Redshift, EMR 等等</P>
                                <img src={Glue} style={{width: "100%"}} alt=""/>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader><H5> <span className={"font-primary"}>DMS – Database Migration Service</span></H5></CardHeader>
                            <CardBody>
                                <P>搬移資料庫的複寫服務，搬遷過程仍可正常使用資料庫，可以在AWS DMS 支援的資料庫做搬遷</P>
                                <P>所有的交易資料<span className={"font-danger"}>皆不能</span>刪除，並可以查詢所有的變更紀錄</P>
                                <P>如 Oracle 到 Amazon Aurora MySQL-Compatible Edition、MySQL 到 Amazon Relational Database (RDS) for MySQL、Microsoft SQL Server 到 Amazon Aurora PostgreSQL-Compatible Edition、MongoDB 到 Amazon DocumentDB (with MongoDB compatibility)、Oracle 到 Amazon Redshift，以及 Amazon Simple Storage Service (S3)。</P>
                                <P>方法分為同質及異質</P>
                                <Card>
                                    <CardBody>
                                        <Nav tabs>
                                            <NavItem>
                                                <NavLink href='#' className={BasicTab === '1' ? 'active' : ''} onClick={() => setBasicTab('1')}>同質</NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink href='#' className={BasicTab === '2' ? 'active' : ''} onClick={() => setBasicTab('2')}>異質</NavLink>
                                            </NavItem>
                                        </Nav>
                                        <TabContent activeTab={BasicTab}>
                                            <TabPane className='fade show' tabId='1'>
                                                <P attrPara={{ className: 'mb-0 m-t-30' }}>
                                                    <img src={DBMigrateSame} style={{width: "100%"}} alt=""/>
                                                </P>
                                            </TabPane>
                                            <TabPane className='fade show' tabId='2'>
                                                <P attrPara={{ className: 'mb-0 m-t-30' }}>
                                                    <img src={DBMigrateDiff} style={{width: "100%"}} alt=""/>
                                                </P>
                                            </TabPane>
                                        </TabContent>
                                    </CardBody>
                                </Card>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default AwsDatabaseCollection;
