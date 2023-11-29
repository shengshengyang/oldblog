import React, {Fragment} from 'react';
import {Breadcrumbs, H5, Image, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row, Table} from 'reactstrap';
import authKey from "../../../../assets/images/aws/authKey.png";
import sshConnection from "../../../../assets/images/aws/sshConnection.png";
import sshSuccess from "../../../../assets/images/aws/sshSuccess.png";
import sshMobaXterm from "../../../../assets/images/aws/awsEC2MobaXterm.png";
import addRole from "../../../../assets/images/aws/add-IAM-role.png";
import connectIAM from "../../../../assets/images/aws/EC2-connect-IAM.png";
import chooseIAM from "../../../../assets/images/aws/modify-EC2-role.png";
import instanceConnect from "../../../../assets/images/aws/instance-connect.png";
import instanceConnectCli from "../../../../assets/images/aws/instance-connect-cli.png";
import {CheckCircle} from "react-feather";
import CodeSnippet from "../../../Common/CodeSnippet";
import {Link} from "react-router-dom";

const AwsEC2Connection = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Connection' parent='AwsEC2Guideline' title='Sample Card'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader className={"card-no-border"}>
                        <H5>可連線方式</H5>
                    </CardHeader>
                    <CardBody>
                        <Table hover={true}>
                            <thead>
                            <tr>
                                <th></th>
                                <th>SSH</th>
                                <th>Putty</th>
                                <th>EC2 Instance Connect</th>
                            </tr>
                            </thead>
                            <tbody className={"align-items-center"}>
                            <tr >
                                <td>Mac OS</td>
                                <td><span className={"font-success"}><CheckCircle/></span></td>
                                <td></td>
                                <td ><span className={"font-success"}><CheckCircle/></span></td>
                            </tr>
                            <tr >
                                <td>Linux</td>
                                <td><span className={"font-success"}><CheckCircle/></span></td>
                                <td></td>
                                <td ><span className={"font-success"}><CheckCircle/></span></td>
                            </tr>
                            <tr >
                                <td><span>Windows &#60; 10 </span></td>
                                <td></td>
                                <td><span className={"font-success"}><CheckCircle/></span></td>
                                <td ><span className={"font-success"}><CheckCircle/></span></td>
                            </tr>
                            <tr >
                                <td><span>Windows &#62; = 10 </span></td>
                                <td><span className={"font-success"}><CheckCircle/></span></td>
                                <td><span className={"font-success"}><CheckCircle/></span></td>
                                <td ><span className={"font-success"}><CheckCircle/></span></td>
                            </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>SSH</H5>
                    </CardHeader>
                    <CardBody>
                        <Card>
                            <CardHeader>
                                <H5>連線實際操作</H5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md={"5"}>
                                        <P>產生金鑰，並依照想要連線的模式去選擇金鑰檔案格式</P>
                                    </Col>
                                    <Col md={"7"} style={{textAlign: "center"}}>
                                        <Image attrImage={{className: 'img-fluid d-inline', src: `${authKey}`, alt: '', style: {maxWidth: '100%'}}}/>
                                        <P/>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col md={"5"}>
                                        <P>進入個體之後點按連線，會出現右側畫面，可按步驟說明連線，此處命令會自動生成符合你的個體連線</P>
                                        <P>1. 開啟終端機 / 命令提示字元</P>
                                        <P>2. cd 至金鑰在本地所在之處</P>
                                        <P>3. 若為第一次連線先將金鑰檔設定為僅能讀取
                                            <CodeSnippet>sudo chmod 400 yourKeyName.pem</CodeSnippet></P>
                                        若是 windows 系統，則對該檔案右鍵->內容->安全性,中去修改權限
                                        <P/>
                                        <P>4. 輸入以下指令(將名稱替代為個人的相對應名稱),其中ec2-user為創建時自動創立的，若有需要
                                        後續可以再指派其他使用者</P>
                                            <CodeSnippet>ssh -i "yourKeyName" ec2-user@ec2-yourPublicDNS</CodeSnippet>
                                    </Col>
                                    <Col md={"7"} style={{textAlign: "center"}}>
                                        <Image attrImage={{className: 'img-fluid d-inline', src: `${sshConnection}`, alt: '', style: {maxWidth: '100%'}}}/>
                                        <P/>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col md={"5"}>
                                        <P>成功登入之後會看到一隻鳥，便可以開始輸入相關指令進行操作</P>
                                    </Col>
                                    <Col md={"7"} style={{textAlign: "center"}}>
                                        <Image attrImage={{className: 'img-fluid d-inline', src: `${sshSuccess}`, alt: '', style: {maxWidth: '100%'}}}/>
                                        <P/>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col md={"5"}>
                                        <P>或是也可以使用圖形化的SSH管理，如windows 的 MobaXterm, 右圖為參考的config配置</P>
                                    </Col>
                                    <Col md={"7"} style={{textAlign: "center"}}>
                                        <Image attrImage={{className: 'img-fluid d-inline', src: `${sshMobaXterm}`, alt: '', style: {maxWidth: '100%'}}}/>
                                        <P/>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <H5><span className={"font-primary"}>賦予權限</span> </H5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md={"5"}>
                                        <P>如果想讓EC2能夠訪問其他的services,必須賦予其<span className={"font-primary"}>角色</span>
                                            建立的方法可以參考 <Link to={'/aws/IAM/users/:layout#role'}> 這裡</Link>
                                        </P>
                                    </Col>
                                    <Col md={"7"} style={{textAlign: "center"}}>
                                        <Image attrImage={{className: 'img-fluid d-inline', src: `${addRole}`, alt: '', style: {maxWidth: '100%'}}}/>
                                        <P/>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col md={"5"}>
                                        <P>選擇建立好的角色後點按更新</P>
                                    </Col>
                                    <Col md={"7"} style={{textAlign: "center"}}>
                                        <Image attrImage={{className: 'img-fluid d-inline', src: `${chooseIAM}`, alt: '', style: {maxWidth: '100%'}}}/>
                                        <P/>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col md={"5"}>
                                        <P>我們現在成功加入了權限，嘗試連到其他服務的指令會發現可成功
                                        </P>
                                    </Col>
                                    <Col md={"7"} style={{textAlign: "center"}}>
                                        <Image attrImage={{className: 'img-fluid d-inline', src: `${connectIAM}`, alt: '', style: {maxWidth: '100%'}}}/>
                                        <P/>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        Aws Instance Connect
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col md={"5"}>
                                <P>若使用的是<span className={"font-danger"}>Amazon Linux 2</span>,可以直接透過主控台的console來進行連接，
                                    其中AWS 會自動產生並上傳暫時的 key, 因此無須另外設定即可使用
                                </P>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${instanceConnect}`, alt: '', style: {maxWidth: '100%'}}}/>
                            </Col>
                            <Col md={"7"} style={{textAlign: "center"}}>
                                <P>實際畫面</P>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${instanceConnectCli}`, alt: '', style: {maxWidth: '100%'}}}/>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>Port 號須知</H5>
                    </CardHeader>
                    <CardBody>
                        <P><strong className={"text-danger"}> 21 </strong> – FTP (File Transfer Protocol)</P>
                        <P><strong className={"text-danger"}> 22 </strong> – SSH (Secure Shell)</P>
                        <P><strong className={"text-danger"}> 22 </strong> – SFTP (Secure File Transfer Protocol) – upload files using SSH</P>
                        <P><strong className={"text-danger"}> 80 </strong> – access unsecured websites</P>
                        <P><strong className={"text-danger"}> 443 </strong> – access secured website</P>
                        <P><strong className={"text-danger"}> 3389 </strong> – RDP (Remote Desktop Protocol)</P>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsEC2Connection;
