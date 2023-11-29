import React, {Fragment} from 'react';
import {Breadcrumbs, H5, H6, Image, LI, P, UL} from '../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import AwsRegion from '../../../assets/images/aws/AWS world.png'
import AWSZone from '../../../assets/images/aws/regions-and-zones.png'
import AWSEdgeInternet from '../../../assets/images/aws/edge-internet.png'
import AWSShareResponsibility from '../../../assets/images/aws/Shared_Responsibility_Model_V2.59d1eccec334b366627e9295b304202faf7b899b.jpg'

const AwsGuideLine = () => {
    return (<Fragment>
        <Breadcrumbs mainTitle='什麼是雲計算?' title='Sample Card'/>
        <Container fluid={true}>
            <Fragment>
                <Row>
                    <Col sm="12">
                        <Card>
                            <CardHeader className="card-border">
                                <H5>特點</H5>
                            </CardHeader>
                            <CardBody>
                                <H6>
                                    Cloud computing is the <strong><span className='font-secondary'>on-demand</span>
                                </strong> delivery of compute power, database storage,
                                    application, and other IT resources
                                </H6>

                                <span className="badge-light-primary">重點是就是你<strong><span
                                    className='font-secondary'>需要就可以</span>
                                    </strong>直接取得ＩＴ資源</span>
                                <P/>

                                <H6>Through a cloud service platform with <strong><span className='font-secondary'>pay-as-you-go pricing</span>
                                </strong>
                                </H6>
                                <span className="badge-light-primary"><strong><span
                                    className='font-secondary'>只有發送請求時收費</span>
                                    </strong>，結束請求後續都不會再收費</span>
                                <P/>

                                <H6><strong><span className='font-secondary'>provision exactly the right type and size of computing</span>
                                </strong> resources you need
                                </H6>
                                <span className="badge-light-primary">可以自行決定<strong><span
                                    className='font-secondary'>設備類別及容量</span>
                                    </strong></span>
                                <P/>

                                <H6>access many sources as you need <strong><span className='font-secondary'> almost instantly</span>
                                </strong>
                                </H6>
                                <span className="badge-light-primary"><strong><span
                                    className='font-secondary'>幾乎立即</span>
                                    </strong>可以訪問各種資源</span>

                                <P/>

                                <H6>simple way to access <strong><span
                                    className='font-secondary'> serves,storage,databases</span> and set of
                                    <span className='font-secondary'> application services</span>
                                </strong>
                                </H6>
                                <span className="badge-light-primary"><strong><span
                                    className='font-secondary'>輕鬆的就可以</span>
                                    </strong>可以訪問資料庫，儲存空間，伺服器等應用服務</span>

                                <P/>
                                <P></P>
                                <Row>
                                    <Col md="3">
                                        <Card>
                                            <CardHeader>
                                                <H6><i className="fa fa-space-shuttle text-primary"></i> 敏捷性</H6>
                                            </CardHeader>
                                            <CardBody>
                                                隨需自助服務

                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md="3">
                                        <Card>
                                            <CardHeader>
                                                <H6><i className="fa fa-code-fork text-primary"></i> 彈性</H6>
                                            </CardHeader>
                                            <CardBody>
                                                快速擴展規模以滿足需求
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md="3">
                                        <Card>
                                            <CardHeader>
                                                <H6><i className="fa fa-dollar text-primary"></i> 節省成本</H6>
                                            </CardHeader>
                                            <CardBody>
                                                僅在使用時才支付IT費用
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md="3">
                                        <Card>
                                            <CardHeader>
                                                <H6><i className="fa fa-globe text-primary"></i> 全球部屬</H6>
                                            </CardHeader>
                                            <CardBody>
                                                廣泛網路存取
                                            </CardBody>
                                        </Card>

                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader className={"card-no-border"}>
                                <H5>常見的雲端部署方式</H5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col sm={"4"}>
                                        <Card>
                                            <CardHeader className={"b-l-info"}>
                                                <H6><span className={"font-primary"}>Private Cloud</span></H6>
                                            </CardHeader>
                                            <CardBody>
                                                <P>私有雲，通常為組織所用，不對外開放</P>
                                                <P>用來保護機敏性設備</P>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm={"4"}>
                                        <Card>
                                            <CardHeader className={"b-l-info"}>
                                                <H6><span className={"font-primary"}>Public Cloud</span></H6>
                                            </CardHeader>
                                            <CardBody>
                                                <P>由第三方監控及提供服務</P>
                                                <P>三本柱： Azure, Google Cloud, AWS</P>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm={"4"}>
                                        <Card>
                                            <CardHeader className={"b-l-info "}>
                                                <H6><span className={"font-primary"}>Hybrid Cloud</span></H6>
                                            </CardHeader>
                                            <CardBody>
                                                <P>綜合使用</P>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <H5>雲運算的種類</H5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col sm={"4"}>
                                        <Card>
                                            <CardHeader className={"b-l-info border-2"}>
                                                <H6><span
                                                    className={"font-primary"}>Infrastructure as a Service(IaaS)</span></H6>
                                            </CardHeader>
                                            <CardBody>
                                                <P>Provides net working, computers, data storage space</P>
                                                <P>Highest level of <span className={"font-primary"}>flexibility</span></P>
                                                <P>由於給予的自由度高，從傳統架構轉移時也最為容易</P>
                                                <UL>
                                                    <LI><i className="fa fa-caret-right txt-secondary me-2"></i>Amazon
                                                        EC2 (AWS)</LI>
                                                    <LI><i className="fa fa-caret-right txt-secondary me-2"></i>GCP,
                                                        Azure, Rackspace, Digital Ocean,Linode</LI>
                                                </UL>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm={"4"}>
                                        <Card>
                                            <CardHeader className={"b-l-info border-2"}>
                                                <H6><span className={"font-primary"}>Platform as a Service(PaaS)</span></H6>
                                            </CardHeader>
                                            <CardBody>
                                                <P>remove manage underlying infrastructure</P>
                                                <P>Focus on <span
                                                    className={"font-primary"}>deployment and management</span> of your
                                                    application</P>
                                                <P>減少管理設備，主要在部署及管理應用，Runtime,O/S等底層直接交由AWS管理</P>
                                                <UL>
                                                    <LI><i className="fa fa-caret-right txt-secondary me-2"></i>Elastic
                                                        Beanstalk (Aws)</LI>
                                                    <LI><i className="fa fa-caret-right txt-secondary me-2"></i>Heroku,Google
                                                        App Engine, Windows Azure</LI>
                                                </UL>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm={"4"}>
                                        <Card>
                                            <CardHeader className={"b-l-info border-2"}>
                                                <H6><span className={"font-primary"}>Software as a Service(SaaS)</span></H6>
                                            </CardHeader>
                                            <CardBody>
                                                <P><span className={"font-primary"}>Complete</span> run and managed by
                                                    service provider</P>
                                                <P>完全交由設備商管理</P>
                                                <UL>
                                                    <LI><i className="fa fa-caret-right txt-secondary me-2"></i>Many AWS
                                                        services</LI>
                                                    <LI><i className="fa fa-caret-right txt-secondary me-2"></i>Gmail,
                                                        Dropbox....</LI>
                                                </UL>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader className={"card-border"}>
                                <H5>Pricing 收費方式</H5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col sm={"4"}>
                                        <Card>
                                            <CardHeader className={"b-l-danger border-2"}>
                                                <H6><span className={"font-danger"}>Compute</span></H6>
                                            </CardHeader>
                                            <CardBody>
                                                <P>依照計算時間收費</P>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm={"4"}>
                                        <Card>
                                            <CardHeader className={"b-l-danger border-2"}>
                                                <H6><span className={"font-danger"}>Storage</span></H6>
                                            </CardHeader>
                                            <CardBody>
                                                <P>雲端儲存資料</P>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col sm={"4"}>
                                        <Card>
                                            <CardHeader className={"b-l-danger border-2"}>
                                                <H6><span className={"font-danger"}>Data transfer Out</span></H6>
                                            </CardHeader>
                                            <CardBody>
                                                <P>輸出資料時，輸入是不收費的</P>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <H5>Regions 地區</H5>
                            </CardHeader>
                            <CardBody>
                                <P>A region us a <span className={"text-primary"}>cluster of data centers</span>, most
                                    AWS services are <span className={"text-primary"}>region-scoped</span></P>
                                <Image attrImage={{className: 'img-fluid d-inline', src: `${AwsRegion}`, alt: ''}}/>
                                <a href="https://aws.amazon.com/tw/about-aws/global-infrastructure/" target="_blank"
                                   rel="noreferrer">https://aws.amazon.com/tw/about-aws/global-infrastructure</a>
                                <P></P>
                                <Card>
                                    <CardHeader className={"card-no-border"}>
                                        <H6>如何選擇AWS 區域</H6>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col md={"3"}>
                                                <Card>
                                                    <CardHeader className={"b-l-danger"}>
                                                        <H6>Compliance</H6>
                                                    </CardHeader>
                                                    <CardBody>
                                                        有些區域的政府會<span
                                                        className={"text-danger"}>限制資料只能留在該區域</span>，所以在合法性上是需要考慮的第一塊
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md={"3"}>
                                                <Card>
                                                    <CardHeader className={"b-l-primary"}>
                                                        <H6>Proximity</H6>
                                                    </CardHeader>
                                                    <CardBody>
                                                        越靠近使用顧客越可以<span
                                                        className={"text-primary"}> 減少延遲</span>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md={"3"}>
                                                <Card>
                                                    <CardHeader className={"b-l-primary"}>
                                                        <H6>Pricing</H6>
                                                    </CardHeader>
                                                    <CardBody>
                                                        每個區域的各項服務價錢<span
                                                        className={"text-primary"}> 並非</span>是統一的，
                                                        可以依照成本考量去選擇區域
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col md={"3"}>
                                                <Card>
                                                    <CardHeader className={"b-l-primary"}>
                                                        <H6>Available services</H6>
                                                    </CardHeader>
                                                    <CardBody>
                                                        有些新的服務可能<span className={"text-danger"}> 沒有</span>在全部的區域都可以使用，
                                                        因此須依照需要的服務去選擇區域
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardHeader><H5>AWS Availability</H5></CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col md={"4"}>
                                                <P>每個regions 都有許多可用的zone(最小3最大6,通常是3)</P>
                                                <P>每個zone 是一個或多個 <span className={"text-primary"}> discrete data centers</span>,
                                                    通常是區域分開並靠高頻寬/低延遲的網路互相連結，因此如果中間有一處有問題時資料並不會影響到另一處</P>
                                            </Col>
                                            <Col md={"8"}>
                                                <Image attrImage={{
                                                    className: 'img-fluid d-inline',
                                                    src: `${AWSZone}`,
                                                    alt: '',
                                                    style: {maxWidth: '100%'}
                                                }}/>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                                <Card>
                                    <CardHeader><H5>AWS Edge Locations 全球邊緣網路</H5></CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col md={"4"}>
                                                <P>Amazon CloudFront 使用位於 48 個國家、90 多個城市總共 450 多個連接點和
                                                    13 個區域邊緣快取的全球網路</P>
                                            </Col>
                                            <Col md={"8"}>
                                                <Image attrImage={{
                                                    className: 'img-fluid d-inline',
                                                    src: `${AWSEdgeInternet}`,
                                                    alt: '',
                                                    style: {maxWidth: '100%'}
                                                }}/>

                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <H5>Shared Responsibility Model</H5>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col md={"4"}>
                                        <P><strong className={"text-danger"}> 客戶負責「雲端內部的安全」 </strong> –
                                            客戶的責任由自行選擇的 AWS 雲端服務決定。這會決定客戶在安全責任中必須執行的組態工作量。</P>
                                        <P><strong className={"text-danger"}> AWS 負責「雲端本身的安全」 </strong> – AWS
                                            負責保護執行 AWS 雲端提供的所有服務的基礎設施。此基礎設施由執行 AWS
                                            雲端服務的硬體、軟體、聯網與設施組成。</P>
                                    </Col>
                                    <Col md={"8"} style={{textAlign: "center"}}>
                                        <Image attrImage={{
                                            className: 'img-fluid d-inline',
                                            src: `${AWSShareResponsibility}`,
                                            alt: '',
                                            style: {maxWidth: '100%'}
                                        }}/>
                                        <a href="https://aws.amazon.com/tw/compliance/shared-responsibility-model/" target="_blank"
                                           rel="noreferrer">https://aws.amazon.com/tw/compliance/shared-responsibility-model/</a>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Fragment>
        </Container>
    </Fragment>);
};

export default AwsGuideLine;
