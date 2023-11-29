import React, {Fragment} from 'react';
import {Breadcrumbs, H5, H6, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import ec2Free from "../../../../assets/images/aws/ec2-free.png";
import ec2EBS from "../../../../assets/images/aws/EC2-EBS.png";
import ec2Ram from "../../../../assets/images/aws/aws-cpu-ram.png";
import ec2Networking from "../../../../assets/images/aws/networking.png";
import ec2SecurityGroup from "../../../../assets/images/aws/security-group.png";
import ec2UserScript from "../../../../assets/images/aws/user-script.png";
import ec2SecurityGroupRegulate from "../../../../assets/images/aws/security-group-regulate.png";

const AwsEC2Guideline = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Elastic Compute Cloud (EC2)' title='aws'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5> Guideline</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-primary"}>
                                        EC2
                                    </CardHeader>
                                    <CardBody>
                                        <P>virtual machines </P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-secondary"}>
                                        EBS
                                    </CardHeader>
                                    <CardBody>
                                        <P>Sorting data on virtual drivers</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-secondary"}>
                                        ELB
                                    </CardHeader>
                                    <CardBody>
                                        <P>Distributing load across machines</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-secondary"}>
                                        ASG
                                    </CardHeader>
                                    <CardBody>
                                        <P>Scaling the serves using an auto-scaling group</P>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Card>
                            <CardHeader>
                                <H6>EC2 的可選選項</H6>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col lg={"6"}>
                                        <P><strong className={"text-danger"}> Operating System(OS) </strong> –
                                            Linux, Windows, Mac OS .., 其中也有各種不同的linux 版本(Red Hat, Ubuntu,
                                            Amazon
                                            linux)
                                            使用amazon linux 可以在 aws 生態中獲得更好的支援性，免費試用版的話要注意點按時會有顯示
                                        </P>
                                    </Col>
                                    <Col lg={"6"}>
                                        <img src={ec2Free} style={{width: "100%"}} alt=""/>,
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col lg={"6"}>
                                        <P><strong className={"text-danger"}> RAM </strong> –
                                            random access memory
                                        </P>
                                        <P>
                                            可依照不同用途決定 memory 的種類及大小,通常會有幾種狀況:
                                            <ul className={"text-secondary"}>
                                                <li>&nbsp; 1. 高效能的關聯/非關聯性database</li>
                                                <li>&nbsp; 2. web 的 scale cache (緩存)</li>
                                                <li>&nbsp; 3. BI (business intelligence)</li>
                                                <li>&nbsp; 4. 應用程式用的實時資料</li>
                                            </ul>
                                        </P>
                                    </Col>
                                    <Col lg={"6"}>
                                        <img src={ec2Ram} style={{width: "100%"}} alt=""/>,
                                    </Col>
                                </Row>

                                <hr/>
                                <Row>
                                    <Col lg={"6"}>
                                        <P><strong className={"text-danger"}> Storage space </strong> –
                                            Network-attached (EBS & EFS) / Hardware (EC2 Instance Store)
                                        </P>
                                        <P>
                                            可依照不同用途決定 storage 的種類及大小,通常會有幾種狀況:
                                            <ul className={"text-secondary"}>
                                                <li>&nbsp; 1. High frequency online transaction processing (OLTP)
                                                    systems</li>
                                                <li>&nbsp; 2. Relational & NoSQL database</li>
                                                <li>&nbsp; 3. Cache for in-memory database (like Redis)</li>
                                                <li>&nbsp; 4. Date warehousing</li>
                                                <li>&nbsp; 5. Distributed file systems</li>
                                            </ul>
                                        </P>
                                    </Col>
                                    <Col lg={"6"}>
                                        <img src={ec2EBS} style={{width: "100%"}} alt=""/>,
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col lg={"6"}>
                                        <P><strong className={"text-danger"}> Networking card </strong> –
                                            speed / public IP address
                                        </P>
                                        <P>
                                            會有幾種網路速度的搭配，不會特別拉出來可選，會在選擇instance 時成套裝出現, 範例：
                                            <ul className={"text-secondary"}>
                                                <li>&nbsp; 1. low to moderate</li>
                                                <li>&nbsp; 2. Moderate</li>
                                                <li>&nbsp; 3. Up to 10 Gbps</li>
                                                <li>&nbsp; 4. 10Gbps</li>
                                                <li>&nbsp; 5. 20Gbps</li>
                                            </ul>
                                        </P>
                                    </Col>
                                    <Col lg={"6"} className={"text-center"}>
                                        <img src={ec2Networking} style={{width: "100%"}} alt=""/>
                                        <a href="https://aws.amazon.com/tw/ec2/instance-types/" target="_blank"
                                           rel="noreferrer">https://aws.amazon.com/tw/ec2/instance-types/</a>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col lg={"6"}>
                                        <P><strong className={"text-danger"}> Firewall rules </strong> –
                                            建立security group 來限制或使外網連線，可允許常見的 SSH / HTTP / HTTPS,
                                            安全群組內只會包含<span className={"text-danger"}>allow</span> rules
                                        </P>
                                        <P>安全群組可以當作EC2的防火牆，因此會有更多的東西可以做設定</P>
                                        <ul className={"text-secondary"}>
                                            <li>&nbsp; 1. access to Ports</li>
                                            <li>&nbsp; 2. Authorised IP ranges - IPv4 / IPv6</li>
                                            <li>&nbsp; 3. inbound network</li>
                                            <li>&nbsp; 4. outbound network</li>
                                            <li>設定的介面如下表: </li>
                                        </ul>
                                        <img src={ec2SecurityGroupRegulate} style={{width: "100%"}} alt=""/>,
                                    </Col>
                                    <Col lg={"6"} className={"text-center"}>
                                        <img src={ec2SecurityGroup} style={{width: "100%"}} alt=""/>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <Col lg={"6"}>
                                        <P><strong className={"text-danger"}> Bootstrap script </strong> –
                                            指定使用者資料，以提供在啟動執行個體時執行的命令或命令指令碼,以base64作加密,只會在
                                            <span className={"text-primary"}>初次啟動時</span>自動執行script <span
                                                className={"text-primary"}>一次</span></P>
                                        <P>通常可以用來: </P>
                                        <ul className={"text-secondary"}>
                                            <li>&nbsp; 1. 安裝 update</li>
                                            <li>&nbsp; 2. 安裝必要軟體</li>
                                            <li>&nbsp; 3. 從網路下載通用檔</li>
                                            <li>&nbsp; 4. 其他</li>
                                        </ul>
                                    </Col>
                                    <Col lg={"6"} className={"text-center"}>
                                        <img src={ec2UserScript} style={{width: "100%"}} alt=""/>
                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>執行個體的最佳化</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-primary"}>
                                        一般用途的執行個體
                                    </CardHeader>
                                    <CardBody>
                                        <P>可平衡運算、記憶體與網路資源。您可以將這類執行個體使用於各種工作負載，例如：
                                            應用程式伺服器
                                            遊戲伺服器
                                            企業應用程式專用候端伺服器
                                            小型及中型資料庫 </P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-success"}>
                                        運算最佳化執行個體
                                    </CardHeader>
                                    <CardBody>
                                        <P>適合高效能 Web 伺服器、運算密集的應用程式伺服器和專用遊戲伺服器,或需要處理單一群組中有多筆交易的批次處理工作負載</P>
                                        <P>例如，浮點數計算、圖形處理或資料模式比對</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-success"}>
                                        記憶體最佳化執行個體
                                    </CardHeader>
                                    <CardBody>
                                        <P>為記憶體內處理大型資料集的工作負載提供快速效能。在運算中，記憶體是暫時儲存區。它會保留中央處理單元（CPU）完成動作所需的所有資料和指令。在電腦程式或應用程式執行之前，CPU 會從儲存體載入記憶體。這項預先載入程序可讓 CPU 直接存取電腦程式。</P>
                                        <P>此種情況可能是高效能資料庫，或者需要執行大量非結構化資料即時處理</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-success"}>
                                        加速運算(HPC)執行個體
                                    </CardHeader>
                                    <CardBody>
                                        <P>使用硬體加速器或協同處理器來提高執行某些功能的效率，其效果更勝在 CPU 上執行軟體的可行效率。舉例來說，這類功能包括浮點數量計算、圖形處理和資料模式比對。</P>
                                        <P>適合圖形應用程式、遊戲串流和應用程式串流,大型的複雜模擬和深度學習工作</P>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"bg-secondary"}>
                                        儲存最佳化執行個體
                                    </CardHeader>
                                    <CardBody>
                                        <P>本機儲存體上的超大型資料集進行高序列讀取及寫入存取工作負載所設計。適合儲存最佳化執行個體的工作負載包括分散式檔案系統、資料倉儲應用程式，以及高頻線上交易處理 (OLTP) 系統。
                                            在運算中，「每秒輸入/輸出操作 (IOPS)」是衡量儲存裝置效能的指標。這個指標指出了裝置在一秒內可執行的不同輸入或輸出操作數量。儲存最佳化執行個體專為應用程式提供每秒數萬次低延遲的隨機 I/O 操作 (IOPS) 而設計。 </P>
                                        <P>適合高 IOPS 需求</P>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <a href="https://aws.amazon.com/tw/ec2/instance-types/" target="_blank"
                           rel="noreferrer">https://aws.amazon.com/tw/ec2/instance-types/</a>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsEC2Guideline;
