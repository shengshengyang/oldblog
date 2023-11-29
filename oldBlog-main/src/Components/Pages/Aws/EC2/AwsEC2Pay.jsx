import React, {Fragment, useState} from 'react';
import {Breadcrumbs, Btn, H5, LI, P, UL} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Collapse, Container, Row, Table} from 'reactstrap';
import {X} from "react-feather";

const AwsEC2Pay = () => {

    const [isOpen, setIsOpen] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
    });

    function toggle(id) {
        setIsOpen(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    }

    return (
        <Fragment>
            <Breadcrumbs mainTitle='Purching Options' parent='AwsEC2Guideline' title='Sample Card'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5>付錢模式總覽(點擊標題解鎖詳細資訊)</H5>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"card-no-border"}>
                                        <Btn attrBtn={{color: 'primary', onClick: () => toggle(1)}}>On-Demand
                                            Instances</Btn>
                                    </CardHeader>
                                    <CardBody>
                                        <P>有使用才付錢，pay by second(此為預設的付費方式)</P>
                                        <Collapse isOpen={isOpen[1]}>
                                            <Card>
                                                <CardBody>
                                                    <P><strong className={"text-danger"}> linus / windows </strong> –
                                                        billing per <strong className={"text-danger"}> second </strong> after
                                                        <strong className={"text-danger"}> first minute </strong>
                                                    </P>
                                                    <P>伺服器按秒計費其餘的皆按小時計費,最貴(原定價)但不受限制</P>
                                                    <P>建議是短期(short-term)或不能被停止的方案做使用(un-interrupted)</P>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"card-no-border"}>
                                        <Btn attrBtn={{color: 'warning', onClick: () => toggle(2)}}>Reserved (1 & 3
                                            yrs)</Btn>
                                    </CardHeader>
                                    <CardBody>
                                        <P>預約個體,分為<span
                                            className={"font-primary"}>reserved Instances</span> (長期使用同一種個體,如資料庫)
                                            /
                                            <span className={"font-primary"}> Convertible Reserved Instances</span>(長期使用但個體可作變動)</P>
                                        <Collapse isOpen={isOpen[2]}>
                                            <Card>
                                                <CardBody>
                                                    最多的話可以節省<span className={"font-danger"}>72%</span>的費用，其節省的費用會依據
                                                    <P/>
                                                    <P>&emsp;<strong> <span className={"font-secondary"}>種類</span></strong> -
                                                        Instance Type, Region, Tenancy, OS
                                                    </P>
                                                    <P>&emsp;<strong> <span className={"font-secondary"}>期間</span></strong> -
                                                        一般分一年與三年，折扣數不同
                                                    </P>
                                                    <P>&emsp;<strong> <span className={"font-secondary"}>付款方式</span></strong> -
                                                        無預付款(No Upfront) / 部分預付 / 完全付清
                                                    </P>
                                                    <P>&emsp;<strong> <span className={"font-secondary"}>個體地區範圍(Scope)</span></strong> -
                                                        Regional / Zonal
                                                    </P>
                                                    <P>&emsp;<strong> <span className={"font-secondary"}>二手</span></strong> -
                                                        市場上也會有釋出的個體可以購買
                                                    </P>
                                                    如果使用的是<span className={"font-primary"}>可變動預約個體(Convertible Reserved Instance)</span> -
                                                    <P>最高的節省費用約會在<span className={"font-danger"}>66%</span>,期間內可變動EC2 instance type, instance family, OS, scope and tenancy</P>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"card-no-border"}>
                                        <Btn attrBtn={{color: 'warning', onClick: () => toggle(3)}}>Saving Plans (1 & 3 yrs)</Btn>
                                    </CardHeader>
                                    <CardBody>
                                        <P>也是長期預約個體,但與reserved 不同的是這邊是限定至少會<span
                                            className={"font-danger"}>花費的額度</span>(美元)來做談價</P>
                                        <Collapse isOpen={isOpen[3]}>
                                            <Card>
                                                <CardBody>
                                                    <P> 長期使用特定服務可得到折扣，與預約個體相同最多可以達到<span className={"font-danger"}>72%</span>的折扣</P>
                                                    <P>內容條件是使用特地服務到一定的用量 如 $10/hour for 1 yr, 超過的部分則照<span className={"font-primary"}>on-demand</span>
                                                        的方式去做計價
                                                    </P>
                                                    <P>可能會限定特定區域的特定服務</P>
                                                    <P>在下列的範圍內擁有彈性</P>
                                                    <P>&emsp;<strong> <span className={"font-secondary"}>Instance Size</span></strong> -
                                                        m5.xlarge, m5.2xlarge
                                                    </P>
                                                    <P>&emsp;<strong> <span className={"font-secondary"}>OS</span></strong> -
                                                        Linux, Windows
                                                    </P>
                                                    <P>&emsp;<strong> <span className={"font-secondary"}>Tenancy </span></strong> -
                                                        Host, Dedicated, Default
                                                    </P>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"card-no-border"}>
                                        <Btn attrBtn={{color: 'danger', onClick: () => toggle(4)}}>Spot
                                            Instance</Btn>
                                    </CardHeader>
                                    <CardBody>
                                        <P>適合短期工作使用，最便宜的方案，因為隨時有可能個體<span
                                            className={"font-danger"}>會被取代掉</span></P>
                                        <Collapse isOpen={isOpen[4]}>
                                            <Card>
                                                <CardBody>
                                                    <P>最多可能折扣到<span className={"font-danger"}>90%</span>,但如果你出的價比最新的spot價格更低的話AWS隨時可能取代掉
                                                        ,此為折扣最多的方案,但穩定性不佳
                                                    </P>
                                                    <P>比較有可能用到的場景為: </P>
                                                    <UL>
                                                        <LI>&emsp;<span className={"font-secondary"}>Batch jobs</span></LI>
                                                        <LI>&emsp;<span className={"font-secondary"}>Data analysis</span></LI>
                                                        <LI>&emsp;<span className={"font-secondary"}>Image processing</span></LI>
                                                        <LI>&emsp;<span className={"font-secondary"}>distributed workloads</span></LI>
                                                        <LI>&emsp;<span className={"font-secondary"}>workloads with flexible start and end time</span></LI>
                                                    </UL>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"card-no-border"}>
                                        <Btn attrBtn={{color: 'secondary', onClick: () => toggle(5)}}>Dedicated Hosts</Btn>
                                    </CardHeader>
                                    <CardBody>
                                        <P>一次訂下<span className={"font-danger"}>整台server</span> 自行分配 instance
                                            的分配</P>
                                        <Collapse isOpen={isOpen[5]}>
                                            <Card>
                                                <CardBody>
                                                    <P>可以使用你自己原有的需求設定及 software licenses (pre-socket, pre-core,pe-VM software licenses)</P>
                                                    <P>適合在一台機器裡需要放很多複雜設備的狀況,或者是公司有自己的內部規則</P>
                                                    <P>可選擇的方案: </P>
                                                    <UL>
                                                        <LI>&emsp;<span className={"font-secondary"}>On-demand</span> - Host還在運作時就會依照<span className={"font-danger"}>秒</span>付費</LI>
                                                        <LI>&emsp;<span className={"font-secondary"}>Reserved</span> - 1 or 3 yrs , 同樣可選擇是否預先付款</LI>
                                                    </UL>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"card-no-border"}>
                                        <Btn attrBtn={{color: 'secondary', onClick: () => toggle(6)}}>Dedicated Instances</Btn>
                                    </CardHeader>
                                    <CardBody>
                                        <P>預定instances , 不會有其他使用者共同使用</P>
                                        <Collapse isOpen={isOpen[6]}>
                                            <Card>
                                                <CardBody>
                                                    <P>專門的個體，不會有其他帳號使用同一個硬體區域，但是如果同一個帳號的話可能會</P>
                                                    <P>在Stop / Start 時可能會移動個體放的位置</P>
                                                    <P>比較有可能用到的場景為: </P>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"card-no-border"}>
                                        <Btn attrBtn={{color: 'secondary', onClick: () => toggle(7)}}>Dedicated Hosts / Dedicated Instances</Btn>
                                    </CardHeader>
                                    <CardBody>
                                        <P>兩者比較</P>
                                        <Collapse isOpen={isOpen[7]}>
                                            <Card>
                                                <CardBody>
                                                    <Table hover={true}>
                                                        <thead>
                                                        <tr>
                                                            <th></th>
                                                            <th>Dedicated Instances</th>
                                                            <th>Dedicated Hosts</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody className={"align-items-center"}>
                                                        <tr>
                                                            <td>允許使用物理性主機</td>
                                                            <td><span className={"font-danger"}><X/></span></td>
                                                            <td><span className={"font-danger"}><X/></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>預先付款</td>
                                                            <td><span className={"font-danger"}><X/></span></td>
                                                            <td></td>
                                                        </tr>
                                                        <tr>
                                                            <td>看得到sockets, cores, host ID</td>
                                                            <td></td>
                                                            <td><span className={"font-danger"}><X/></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>可在host 與 instance 間變動</td>
                                                            <td></td>
                                                            <td><span className={"font-danger"}><X/></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>選定instance 位置</td>
                                                            <td></td>
                                                            <td><span className={"font-danger"}><X/></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>自動放置instance 位置</td>
                                                            <td><span className={"font-danger"}><X/></span></td>
                                                            <td><span className={"font-danger"}><X/></span></td>
                                                        </tr>
                                                        <tr>
                                                            <td>加上允許的request 數</td>
                                                            <td></td>
                                                            <td><span className={"font-danger"}><X/></span></td>
                                                        </tr>

                                                        </tbody>
                                                    </Table>
                                                </CardBody>
                                            </Card>
                                        </Collapse>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col lg={"6"}>
                                <Card className={'card-absolute'}>
                                    <CardHeader className={"card-no-border"}>
                                        <Btn attrBtn={{color: 'info'}}>Capacity Reservations</Btn>
                                    </CardHeader>
                                    <CardBody>
                                        <P>用原價定某服務一段時間,適合短期,不能被干擾的服務, 須在特定區域的服務</P>
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

export default AwsEC2Pay;
