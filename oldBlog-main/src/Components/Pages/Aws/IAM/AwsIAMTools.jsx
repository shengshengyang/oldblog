import React, {Fragment} from 'react';
import {Breadcrumbs, H5, H6, Image, LI, P, UL} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import AWSCLI from '../../../../assets/images/aws/CLI.png'
import accessReport from "../../../../assets/images/aws/access-report.png";
import accessReportContent from "../../../../assets/images/aws/access-report-content.png";

const AwsIAMTools = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Tools' parent='AwsIAMSummary' title='Sample Card'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5> CLI / SDK</H5>
                    </CardHeader>
                    <CardBody>
                        <P>要操作使用者權限，除了登入進<span
                            className={"font-primary"}>AWS Management Console</span> 之外,AWS 也有提供<span
                            className={"font-primary"}>CLI / SDK</span> 可以做操作</P>
                        <Card>
                            <CardHeader>
                                <H6>Command Line Interface(CLI)</H6>
                            </CardHeader>
                            <CardBody>
                                可以用終端機進入並操作api, 可參考
                                <a href="https://github.com/aws/aws-cli" target="_blank"
                                    rel="noreferrer">https://github.com/aws/aws-cli</a>
                                <P>可以透過此處來安裝    <a href="https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html" target="_blank"
                                                            rel="noreferrer">https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html</a></P>
                                <P>安裝後可使用 aws 為 開頭的各種指令來連接aws api</P>
                                <P/>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${AWSCLI}`, alt: '',}}/>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <H6>Software Developer Kit (SDK)</H6>
                            </CardHeader>
                            <CardBody>
                                可支援各種語言如:
                                <UL>
                                    <LI>SDKs(JavaScript,Python,Java...)</LI>
                                    <LI>Mobile SDKs(IOS, Android...)</LI>
                                    <LI>IoT Device SDKs(Embedded C, Arduino...)</LI>
                                </UL>
                            </CardBody>
                        </Card>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>IAM Credentials Report (account-level)</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"4"}>
                                <P>此報告包含建立每個使用者時的使用者名稱和 Amazon Resource Names (ARN)，以及各種登入<span className={"font-secondary"}>資料狀態</span>，包含密碼、存取金鑰、MFA 裝置和憑證。
                                </P>
                            </Col>
                            <Col md={"8"} style={{textAlign: "center"}}>
                                可在IAM 中點擊下載報告
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${accessReport}`, alt: ''}}/>
                                <P/>
                                報告內容會輸出成user的相關資訊的csv檔
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${accessReportContent}`, alt: ''}}/>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsIAMTools;
