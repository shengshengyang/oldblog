import React, {Fragment} from 'react';
import {Breadcrumbs, H5, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import S3Version from "../../../../assets/images/aws/s3-version.PNG";
import IconUL from "../../../Common/IconUL";

const AwsS3Application = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='S3 Application' parent='AwsS3Guideline' title='S3 Application'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5><span className={"font-primary"}>Static Website Hosting</span> </H5>
                    </CardHeader>
                    <CardBody>
                        <P>可以直接部屬靜態網站在 S3 ，其網址的組成會是</P>
                        <P>• http://<span className={"font-secondary"}>bucket-name</span>.s3-website<span className={"font-danger"}>-</span><span className={"font-secondary"}>aws-region</span>.amazonaws.com </P>
                        <P>OR</P>
                        <P>• http://<span className={"font-secondary"}>bucket-name</span>.s3-website<span className={"font-danger"}>.</span><span className={"font-secondary"}>aws-region</span>.amazonaws.com</P>
                        <P>需確認權限避免造成403 forbidden</P>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5> <span className={"font-primary"}>Versioning</span> </H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"4"}>
                               <P>可以在 bucket level 中使用，不同版本會使用 <span className={"font-secondary"}>同一個key</span>但給予不同的version Id，可以輕鬆地被復原</P>
                                <P>在操作中，刪除新的版本就會恢復上一個版本，尚未有版本時 version ID = null</P>
                            </Col>
                            <Col md={"8"}>
                                <img src={S3Version} style={{width: "100%"}} alt=""/>,
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5><span className={"font-primary"}>Replication (CCR / SRR)</span></H5>
                    </CardHeader>
                    <CardBody>
                      <P>若要使用複製方與被複製方都必須<span className={"font-danger"}>enable Versioning</span>,會有兩種形式: </P>
                        <IconUL icon={"fa fa-copy"} contentArray={["Cross-Region Replication ( CRR )", "Same-Region Replication ( SRR )"]}/>
                        <P>複製的時候是同步的，可以不用擔心在複製時資料遺失,同樣的bucket 可以存在於不同的AWS accounts, 但必須給予S3 相對應的 IAM permission</P>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsS3Application;
