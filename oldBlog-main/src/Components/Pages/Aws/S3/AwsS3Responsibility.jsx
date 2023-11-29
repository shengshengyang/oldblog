import React, {Fragment} from 'react';
import {Breadcrumbs, H5} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import IconUL from "../../../Common/IconUL";
import {Cpu, Users} from "react-feather";

const AwsS3Responsibility = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='S3 Shared Responsibility' parent='AwsS3Guideline' title='S3 Shared Responsibility'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5><span className={"font-primary"}>責任歸屬</span> </H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"6"}>
                                <Card>
                                    <CardHeader>
                                        <H5><span className={"font-warning"}> <Cpu/>&nbsp; aws 責任</span></H5>
                                    </CardHeader>
                                    <CardBody>
                                        <IconUL icon={"fa fa-caret-right"}
                                                contentArray={["基礎設施(如可用性、耐久性、兩設施間備份資料)",
                                                    "設定與主動分析", "應用實現"]}/>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={"6"}>
                                <Card>
                                    <CardHeader>
                                      <H5><span className={"font-success"}><Users/>&nbsp; 使用者責任</span></H5>
                                    </CardHeader>
                                    <CardBody>
                                        <IconUL icon={"fa fa-caret-right"} contentArray={["S3 Versioning" , "S3 Bucket Policies" , "S3 Replication Setup" ,
                                        "logging 與監控" , "S3 Storage Classes" , "上傳前資料加密"]}/>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsS3Responsibility;
