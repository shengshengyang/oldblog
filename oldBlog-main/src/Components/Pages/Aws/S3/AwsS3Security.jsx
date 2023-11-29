import React, {Fragment} from 'react';
import {Breadcrumbs, H5, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import DangerPTitle from "../../../Common/DangerPTitle";
import PrimaryPTitle from "../../../Common/PrimaryPTitle";
import BucketPolicies from "../../../../assets/images/aws/bucket-policies.PNG";
import S3PublicAccess from "../../../../assets/images/aws/s3-public-access.PNG";

const AwsS3Security = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='S3 Security' parent='AwsS3Guideline' title='S3 Security'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5><span className={"font-primary"}>Security</span> </H5>
                    </CardHeader>
                    <CardBody>
                        <DangerPTitle title={"User-base"}/>
                        <PrimaryPTitle title={"IAM"} content={"決定哪個api可以給特定使用者呼叫"}/>
                        <DangerPTitle title={"Resource-base"}/>
                        <PrimaryPTitle title={"Bucket Policies"} content={"大原則，可跨帳號給予權限"}/>
                        <PrimaryPTitle title={"Object Access"} content={"訂定細項,如bucket 中那些path開頭的不給看"}/>
                        <PrimaryPTitle title={"Bucket Access"} content={"較不建議"}/>
                        <DangerPTitle title={"Encrypt"} content={"可以將 object 透過 Key 做加密"}/>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5> <span className={"font-primary"}>Policies</span> </H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"6"}>
                                <PrimaryPTitle title={"Resources"} content={"可以是 bucket或 object"}/>
                                <PrimaryPTitle title={"Effect"} content={"Allow / Deny"}/>
                                <PrimaryPTitle title={"Action"} content={"Api to Allow or Deny"}/>
                                <PrimaryPTitle title={"Principal"} content={"連結到此政策的帳號或使用者"}/>
                                <P>policy 可以用來生成公開訪問 / 強迫object 上傳時加密 / 給予另外一個帳號權限</P>
                            </Col>
                            <Col md={"6"}>
                                <img src={BucketPolicies} style={{width: "100%"}} alt=""/>,
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5><span className={"font-primary"}>公開訪問</span></H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"4"}>
                                <P>對於公開訪問的權限要特別做設立，預設是關閉，避免公司資料外洩</P>
                            </Col>
                            <Col md={"8"}>
                                <img src={S3PublicAccess} style={{width: "100%"}} alt=""/>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>S3 Encryption</H5>
                    </CardHeader>
                    <CardBody>
                        <DangerPTitle title={"Server-side"} content={"S3接收到user上傳時自動加密"}/>
                        <DangerPTitle title={"Client-side"} content={"user 自己在上傳前加密"}/>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsS3Security;
