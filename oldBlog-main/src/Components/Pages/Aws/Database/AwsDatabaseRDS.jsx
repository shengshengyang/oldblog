import React, {Fragment} from 'react';
import {Breadcrumbs, H5, H6, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import IconUL from "../../../Common/IconUL";
import ElbRds from "../../../../assets/images/aws/RDS-ELB.PNG";
import ReplicaRead from "../../../../assets/images/aws/read-replicas.PNG";
import FailoverDB from "../../../../assets/images/aws/failover-db.PNG";
import MultiRegion from "../../../../assets/images/aws/rds-mulit-region.PNG";
import ElastiCache from "../../../../assets/images/aws/elastiCache.PNG";

const AwsDatabaseRDS = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='RDS' title='aws' parent='AwsDatabaseSummary'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5>Relational Database Service(RDS)</H5>
                    </CardHeader>
                    <CardBody>
                        <P>使用 SQL 作為查詢語言，提供不同種類的可供建置如:</P>
                        <Row>
                            <Col md={"4"}>
                                <IconUL icon={"fa fa-caret-right"} contentArray={["Postgres" , "MySQL" ]}/>
                            </Col>
                            <Col md={"4"}>
                                <IconUL icon={"fa fa-caret-right"} contentArray={["MariaDB" , "Oracle" ]}/>
                            </Col>
                            <Col md={"4"}>
                                <IconUL icon={"fa fa-caret-right"} contentArray={["Microsoft SQL Server" , "Aurora (AWS Proprietary database)" ]}/>
                            </Col>
                        </Row>
                        <P>RDS 常見可搭配 ELB 做附載管理</P>
                        <img src={ElbRds} style={{width: "100%"}} alt=""/>
                        <P/>
                        <Card>
                            <CardHeader><H5> <span className={"font-primary"}>Amazon Aurora</span></H5></CardHeader>
                            <CardBody>
                                <P>amazon 自建的非開源資料庫， 提供 <span className={"font-warning"}>PostgreSQL / MySQL</span>的同時支援，針對aws 本身優化因此比一般MySql 效能多 5 倍,
                                    比 Postgres 多 3 倍
                                </P>
                                <P>儲存空間會自動增加，每次10GB一直到 128TB，比RDS花費多 <span className={"font-danger"}>20% 以上</span>，並且沒有免費方案</P>
                            </CardBody>
                        </Card>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader><H5> <span className={"font-primary"}>資料庫的存取模式</span></H5></CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"6"}>
                                <Card>
                                    <CardHeader><H6> <span className={"font-secondary"}>副本讀取(Read Replicas)</span></H6></CardHeader>
                                    <CardBody>
                                        <P>透過副本讓DB的讀取負擔減小，最多可以製作15個副本，資料只寫在主要DB中</P>
                                        <img src={ReplicaRead} style={{width: "100%"}} alt=""/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={"6"}>
                                <Card>
                                    <CardHeader><H6> <span className={"font-secondary"}>多重區域(Multi-AZ)</span></H6></CardHeader>
                                    <CardBody>
                                        <P>資料透過<span className={"font-warning"}>failover DB</span> 複製一份到不同的AZ，一次只能複製一份作為災難恢復用，資料的讀寫仍只限制在主資料庫</P>
                                        <img src={FailoverDB} style={{width: "100%"}} alt=""/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={"12"}>
                                <Card>
                                    <CardHeader><H6> <span className={"font-secondary"}>兩者合併(Multi-Region)</span></H6></CardHeader>
                                    <CardBody>
                                        <P>為了<span className={"font-warning"}>災難恢復 / 區域效能</span> 將資料庫不在多個AZ，每個AZ皆可讀寫，但資料只會寫回主資料表中</P>
                                        <img src={MultiRegion} style={{width: "100%"}} alt=""/>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader><H5> <span className={"font-primary"}>ElastiCache</span></H5></CardHeader>
                    <CardBody>
                        <P>記憶體內的快取資料庫(類似redis)</P>
                        <img src={ElastiCache} style={{width: "100%"}} alt=""/>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader><H5> <span className={"font-primary"}>Amazon Aurora</span></H5></CardHeader>
                    <CardBody>
                        <P>amazon 自建的非開源資料庫， 提供 <span className={"font-warning"}>PostgreSQL / MySQL</span>的同時支援，針對aws 本身優化因此比一般MySql 效能多 5 倍,
                            比 Postgres 多 3 倍
                        </P>
                        <P>儲存空間會自動增加，每次10GB一直到 128TB，比RDS花費多 <span className={"font-danger"}>20% 以上</span>，並且沒有免費方案</P>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsDatabaseRDS;
