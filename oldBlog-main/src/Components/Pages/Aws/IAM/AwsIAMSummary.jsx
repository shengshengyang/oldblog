import React, {Fragment} from 'react';
import {Breadcrumbs, H5, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';

const AwsIAMSummary = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Identity and Access Management (IAM)' title='Sample Card'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5>總結重點</H5>
                    </CardHeader>
                    <CardBody style={{textAlign: "center"}}>
                        <Row>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-primary"}>
                                        Users
                                    </CardHeader>
                                    <CardBody>
                                        <P>組織內的帳號，可被設定為群組，有相對應的密碼可以訪問後台</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-primary"}>
                                        Groups
                                    </CardHeader>
                                    <CardBody>
                                        <P>只能包含users 不能包含 group</P>
                                        <P>權限是可以被繼承的，假設在多個組有不同權限，會擁有這些組的所有權限</P>

                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-primary"}>
                                        Roles
                                    </CardHeader>
                                    <CardBody>
                                        <P>服務使用的權限(如： EC2,Lambda)</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-danger"}>
                                        Policies
                                    </CardHeader>
                                    <CardBody>
                                        <P>Json 格式的文件，列出所有user或 group 的權限</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-danger"}>
                                        Security
                                    </CardHeader>
                                    <CardBody>
                                        <P>MFA(第三方認證) + password policy(密碼政策)</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-secondary"}>
                                        AWS CLI
                                    </CardHeader>
                                    <CardBody>
                                        <P>可以在command line 操作aws 指令,可從官網安裝並透過access key 來做存取</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-secondary"}>
                                        AWS SDK
                                    </CardHeader>
                                    <CardBody>
                                        <P>可透過各程式語言來存取AWS的資料，也要透過access key</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-secondary"}>
                                        Access Key
                                    </CardHeader>
                                    <CardBody>
                                        <P>讓 CLI 及 SDK 有權限可以訪問後台</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-secondary"}>
                                        Audit
                                    </CardHeader>
                                    <CardBody>
                                        <P>IAM Credential Report(登入資料報告) & IAM Access Advisor(存取分析)</P>
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

export default AwsIAMSummary;
