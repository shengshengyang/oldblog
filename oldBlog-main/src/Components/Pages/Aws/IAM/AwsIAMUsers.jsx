import React, {Fragment} from 'react';
import {Breadcrumbs, H5, Image, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import IAMpolicy from "../../../../assets/images/aws/policy-inheritance.png";
import passwordPolicy from "../../../../assets/images/aws/password-policy.png"
import IAMRoleCreate from "../../../../assets/images/aws/IAMRoleCreate.png"
import IAMRoleJson from "../../../../assets/images/aws/IAM-role-json.png"
import IAMRolePolicy from "../../../../assets/images/aws/IAM-role-policy.png"
import CodeSnippet from "../../../Common/CodeSnippet";

const AwsIAMUsers = () => {
    const policy = `{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "1",
            "Effect": "Allow",
            "Action": "iam:CreateServiceLinkedRole",
            "Principal": {
                "Service": "ec2.amazonaws.com"
            },
            "Resource": "*",
            "Condition": {
                "StringEquals": {
                    "iam:AWSServiceName": [
                        "autoscaling.amazonaws.com",
                        "ec2scheduled.amazonaws.com",
                        "elasticloadbalancing.amazonaws.com",
                        "spot.amazonaws.com",
                        "spotfleet.amazonaws.com",
                        "transitgateway.amazonaws.com"
                    ]
                }
            }
        }
    ]
}
    `
    return (
        <Fragment>
            <Breadcrumbs mainTitle='User and Group' parent='AwsIAMSummary' title='Sample Card'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5>User and Group</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"4"}>
                                <P><strong className={"text-danger"}> Root account </strong> –
                                    建帳號時自動建立，擁有最高權限，不應分享使用</P>
                                <P><strong className={"text-danger"}> Users </strong> –
                                    組織內的帳號，可被設定為群組</P>
                                <P><strong className={"text-danger"}> Groups </strong> –
                                    只能包含users 不能包含 group</P>
                                <P>權限是可以被繼承的，假設在多個組有不同權限，會擁有這些組的所有權限</P>
                            </Col>
                            <Col md={"8"} style={{textAlign: "center"}}>
                                <Image attrImage={{
                                    className: 'img-fluid d-inline',
                                    src: `${IAMpolicy}`,
                                    alt: '',
                                    style: {maxWidth: '100%'}
                                }}/>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>Police Structure</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"6"}>
                                <P>權限可以由JSON格式做輸出</P>
                                <P><strong className={"text-danger"}> Version </strong> –
                                    政策版本，目前的一定是2012-10-17</P>
                                <P><strong className={"text-danger"}> Id </strong> –
                                    此政策的identifier</P>
                                <P><strong className={"text-danger"}> Statement </strong> –
                                    一種或多種的狀態,為JSON array</P>
                                <P><strong className={"text-primary"}> Sid </strong> –
                                    此statement 的 identifier</P>
                                <P><strong className={"text-primary"}> Effect </strong> –
                                    只有兩種: Allow/Deny </P>
                                <P><strong className={"text-primary"}> Principal </strong> –
                                    account/user/role 對應到哪個權限</P>
                                <P><strong className={"text-primary"}> Resource </strong> –
                                    對應到的資源</P>
                                <P><strong className={"text-primary"}> Action </strong> –
                                    該資源可以做的事</P>
                                <P><strong className={"text-primary"}> Condition(optional) </strong> –
                                    自定義狀況，為選填</P>

                                <P>除了直接從AWS內建選擇，也可以自訂IAM，有GUI介面可以產生JSON policy</P>

                            </Col>
                            <Col md={"6"}>
                                <CodeSnippet>
                                    {policy}
                                </CodeSnippet>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>Password Policy</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"4"}>
                                <P>可以自定義一份密碼的修改政策來要求users
                                    遵守，可加入的政策可參考右圖，在IAM <i className={"fa fa-arrow-right font-primary"}/> 帳戶設定 <i className={"fa fa-arrow-right font-primary"}/> 編輯密碼政策中做設定</P>
                            </Col>
                            <Col md={"8"} style={{textAlign: "center"}}>
                                <Image attrImage={{
                                    className: 'img-fluid d-inline',
                                    src: `${passwordPolicy}`,
                                    alt: '',
                                    style: {maxWidth: '100%'}
                                }}/>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <section id={"role"}>
                <Card>
                    <CardHeader>
                        <H5>IAM Roles</H5>
                    </CardHeader>
                    <CardBody>
                        <P>對<span className={"text-primary"}>特定的實體</span>可取得的臨時權限，使用方式跟角色相同，不過對象是services</P>
                        <P>常見會用在EC2, Lambda 等這類常會跟其他服務互動的service</P>
                        <P>也可以針對特定族群去做設定，如S3 支援資源型政策，可以設定其中特定資源給特定人士才能存取</P>
                        <hr/>
                        <Row>
                            <Col md={"5"}>
                                <P>可以在此處選擇建立角色</P>
                            </Col>
                            <Col md={"7"} style={{textAlign: "center"}}>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${IAMRoleCreate}`, alt: '', style: {maxWidth: '100%'}}}/>
                                <P/>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col md={"5"}>
                                <P>搜尋並勾選想要賦予的權限，關於權限相關的詳細可點入查看，若沒有想要的權限可自行新增</P>
                            </Col>
                            <Col md={"7"} style={{textAlign: "center"}}>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${IAMRolePolicy}`, alt: '', style: {maxWidth: '100%'}}}/>
                                <P/>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col md={"5"}>
                                <P>勾選完畢會自動產生Json檔案供參考，確認無誤後點選下一步即可新增角色</P>
                            </Col>
                            <Col md={"7"} style={{textAlign: "center"}}>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${IAMRoleJson}`, alt: '', style: {maxWidth: '100%'}}}/>
                                <P/>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                </section>
            </Container>
        </Fragment>
    );
};

export default AwsIAMUsers;
