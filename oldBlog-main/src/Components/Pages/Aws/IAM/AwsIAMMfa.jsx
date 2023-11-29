import React, {Fragment} from 'react';
import {Breadcrumbs, H5, H6, Image, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import google_authenticator from '../../../../assets/images/aws/google-authenticator.jpeg'
import awsAuthy from '../../../../assets/images/aws/authy.png'
import awsYubiKey from '../../../../assets/images/aws/yubi-key2.webp'
import gemalto from '../../../../assets/images/aws/gemalto.jpeg'
import assignMfa from '../../../../assets/images/aws/assign-mfa.png'
import settingMfa from '../../../../assets/images/aws/setting-mfa.png'
import {ArrowRight} from "react-feather";

const AwsIAMMfa = () => {
    return (<Fragment>
            <Breadcrumbs mainTitle='MFA' parent='AwsIAMSummary' title='Sample Card'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5><span className={"font-primary"}>Multi Factor Authentication (MFA)</span></H5>
                    </CardHeader>
                    <CardBody>
                        <P> password <strong className={"text-danger"}>you know</strong> + security device <strong
                            className={"text-danger"}>you own</strong></P>
                        <P>登入時採<strong><span className={"font-secondary"}>密碼</span> + <span
                            className={"font-secondary"}>第三方認證</span></strong>（可為虛擬或實體）,
                            可以有效避免密碼外洩或帳號被盜,第三方認證的方式有虛擬與實體兩種，如下表所列
                        </P>
                        <Row>
                            <Col md={"6"}>
                                <Card>
                                    <CardHeader>
                                        <H6>Virtual MFA device</H6>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col md={"5"} style={{textAlign: "center"}} className={"border"}>
                                                <H6>Google Authenticator</H6>
                                                <Image attrImage={{
                                                    className: 'img-fluid d-inline',
                                                    src: `${google_authenticator}`,
                                                    alt: '',
                                                    style: {maxWidth: '100%'}
                                                }}/>
                                            </Col>
                                            <Col md={"1"}></Col>
                                            <Col md={"5"} style={{textAlign: "center"}} className={"border"}>
                                                <H6>Authy</H6>
                                                <Image attrImage={{
                                                    className: 'img-fluid d-inline',
                                                    src: `${awsAuthy}`,
                                                    alt: '',
                                                    style: {maxWidth: '100%'}
                                                }}/>
                                                <a href='https://authy.com/guides/amazon/' target='_blank'
                                                   rel="noreferrer">https://authy.com/guides/amazon/</a>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={"6"}>
                                <Card>
                                    <CardHeader>
                                        <H6>Hardware device</H6>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col md={6}><Card>
                                                <CardHeader>
                                                    Universal 2nd factor(U2F)
                                                </CardHeader>
                                                <CardBody>
                                                    可支持多root 及 IAM user 使用同一台設施
                                                    <Image attrImage={{className: 'img-fluid d-inline', src: `${awsYubiKey}`, alt: ''}}/>
                                                </CardBody>
                                            </Card></Col>
                                            <Col md={6}><Card>
                                                <CardHeader>
                                                    Hardware Key Fob MFA Device
                                                </CardHeader>
                                                <CardBody>
                                                    用於單一場合，機密性較高（政府單位)
                                                    <Image attrImage={{className: 'img-fluid d-inline', src: `${gemalto}`, alt: ''}}/>
                                                </CardBody>
                                            </Card></Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Row>
                            <Col md={"6"}>
                                其中我們可以透過在IAM中選取來指定指派何種MFA
                                <P/>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${assignMfa}`, alt: ''}}/>
                            </Col>
                            <Col md={"1"}>
                                <ArrowRight className={"text-primary"}></ArrowRight>
                            </Col>
                            <Col md={"5"}>
                                按照步驟設定後即可指派
                                <P/>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${settingMfa}`, alt: ''}}/>
                            </Col>
                        </Row>

                    </CardBody>
                </Card>
            </Container>
        </Fragment>);
};

export default AwsIAMMfa;
