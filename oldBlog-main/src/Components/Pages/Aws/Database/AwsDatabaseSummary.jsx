import React, {Fragment} from 'react';
import {Breadcrumbs, H5} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import DangerPTitle from "../../../Common/DangerPTitle";
import IconUL from "../../../Common/IconUL";

const AwsDatabaseSummary = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='RDS' title='aws' parent='AwsDatabaseSummary'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5>Summary</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg={6}>
                                <DangerPTitle title={"Relational Databases"} content={"RDS & Aurora (SQL)"}/>
                                <IconUL icon={"fa fa-caret-right"} contentArray={["Multi-AZ" , "Read Replicas","Multi-Region" ]}/>
                                <br/>
                                <DangerPTitle title={"In-memory Database"} content={"ElastiCache"}/>
                                <DangerPTitle title={"Key/Value Database"} content={"DynamoDB (serverless) & DAX (DynamoDB 的 cache)"}/>
                                <DangerPTitle title={"Warehouse - OLAP"} content={"Redshift (SQL)"}/>
                                <DangerPTitle title={"Hadoop Cluster"} content={"EMR"}/>
                                <DangerPTitle title={"Athena"} content={"用來查詢S3的data, serverless"}/>
                                <DangerPTitle title={"QuickSight"} content={"serverless 的資料 dashboard"}/>
                                <DangerPTitle title={"DocumentDB"} content={"“Aurora for MongoDB(NO-sql)"}/>
                                <DangerPTitle title={"Amazon QLDB"} content={"財務交易用，有不可刪除及記錄所有交易的特性"}/>
                                <DangerPTitle title={"Amazon Managed Blockchain"} content={"Fabric & Ethereum 等託管區塊練技術"}/>
                                <DangerPTitle title={"Glue"} content={"ETL(Extract Transform Load) 及 資料分類服務"}/>
                                <DangerPTitle title={"Glue"} content={"ETL(Extract Transform Load) 及 資料分類服務"}/>
                                <DangerPTitle title={"Database Migration"} content={"資料轉移，可在轉移過程中繼續使用資料庫"}/>
                                <DangerPTitle title={"Neptune"} content={"圖形化資料庫"}/>
                            </Col>
                            <Col lg={6}>

                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsDatabaseSummary;
