import React, {Fragment} from 'react';
import {Breadcrumbs, H5, Image, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import FsxType from "../../../../assets/images/aws/Fsx-type.png";
import FsxWindows from "../../../../assets/images/aws/FXs-windows.png";
import FsxLustre from "../../../../assets/images/aws/FSx-lustre.png";

const AwsFsx = () => {

    return (
        <Fragment>
            <Breadcrumbs mainTitle='Amazon Fsx' parent='AwsStorageSummary' title='Sample Card'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5>FSx是什麼?</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <P>完全經由<span className={"font-danger"}>第三方</span>託管的高效能檔案服務,共有以下幾種模式</P>
                            <Image attrImage={{className: 'img-fluid d-inline', src: `${FsxType}`, alt: '',}}/>
                        </Row>
                        <hr/>
                        <Row>
                            <Col md={"6"}>
                                <Card>
                                    <CardHeader>
                                        <H5>Fsx for <span className={"font-secondary"}> Windows File Server</span></H5>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col md={"6"}>
                                                <P>Windows <span className={"font-danger"}>原生</span>的檔案分享系統, 建置在 Windows
                                                 File Server </P>
                                                <P>支援
                                                    <a href='https://zh.wikipedia.org/zh-tw/%E4%BC%BA%E6%9C%8D%E5%99%A8%E8%A8%8A%E6%81%AF%E5%8D%80%E5%A1%8A' target='_blank' rel="noreferrer">
                                                     SMB protocol
                                                    </a> & Windows NTFS</P>

                                                <P>使用 Microsoft Active Directory,無論從AWS 或本地端裝置都可以訪問 </P>
                                            </Col>
                                            <Col md={"6"}
                                                 className={"text-center"}>
                                                <Image attrImage={{className: 'img-fluid d-inline', src: `${FsxWindows}`, alt: '',}}/>
                                                <a href='https://aws.amazon.com/tw/fsx/windows/' target='_blank' rel="noreferrer">https://aws.amazon.com/tw/fsx/windows/</a>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={"6"}>
                                <Card>
                                    <CardHeader>
                                        <H5>Fsx for <span className={"font-secondary"}> Lustre</span></H5>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <P>為了<span className={"font-danger"}>高效能運算(High Performance Computing)</span> 所設計的完全託管高效能可擴展儲存空間 </P>
                                            <P>Lustre 就是 "Linux" + "cluster"</P>
                                            <P>最快可以達到<span className={"font-primary"}>100s GB/s, millions of IOPS</span> 並且延遲在 ms 以下</P>
                                            <Image attrImage={{className: 'img-fluid d-inline', src: `${FsxLustre}`, alt: '',}}/>
                                            <a href='https://aws.amazon.com/tw/fsx/lustre/' target='_blank' rel="noreferrer">https://aws.amazon.com/tw/fsx/lustre/</a>
                                        </Row>
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

export default AwsFsx;
