import React, {Fragment} from 'react';
import {Breadcrumbs, H5, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import IconUL from "../../../Common/IconUL";
import PrimaryPTitle from "../../../Common/PrimaryPTitle";
import s3Intro from "../../../../assets/images/aws/aws-s3-intro.png";

const AwsS3Guideline = () => {
    const ulArray = ["備份與儲存空間", "混和雲的儲存空間", "應用程式託管" ]
    const ulArray2 = ["媒體託管", "大數據分析", "靜態網頁"]
    const ulArray3 = ["不能使用大寫或底線", "3-63個字元", "不能是IP"]
    const ulArray4 = ["開頭必須是小寫字母或數字", "不能是xn-- 開頭", "不能是 -s3alias 結尾"]
    return (
        <Fragment>
            <Breadcrumbs mainTitle='S3' title='aws'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5> Guideline</H5>
                    </CardHeader>
                    <CardBody>
                        <Card>
                            <CardHeader><H5><span className={"font-primary"}>S3 是什麼? </span> </H5></CardHeader>
                            <CardBody>
                                <P>可無限放大的 storage, 可用在多重領域如: </P>
                                <Row>
                                    <Col md={"6"}>
                                        <IconUL icon={"fa fa-caret-right"} contentArray={ulArray}/>
                                    </Col>
                                    <Col md={"6"}>
                                        <IconUL icon={"fa fa-caret-right"} contentArray={ulArray2}/>
                                    </Col>
                                </Row>
                                <P/>
                                <img src={s3Intro} style={{width: "100%"}} alt=""/>
                                <a href='https://aws.amazon.com/tw/s3/' rel='noreferrer' target='_blank'>https://aws.amazon.com/tw/s3/</a>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader><H5><span className={"font-primary"}>Buckets</span></H5></CardHeader>
                            <CardBody>
                              <P>檔案存在bucket中，必須在<span className={"font-danger"}>所有的區域及所有的帳號中取獨立的名字</span>,
                              並且須遵守命名規則</P>
                                <Row>
                                    <Col md={"6"}>
                                        <IconUL icon={"fa fa-caret-right"} contentArray={ulArray3}/>
                                    </Col>
                                    <Col md={"6"}>
                                        <IconUL icon={"fa fa-caret-right"} contentArray={ulArray4}/>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader><H5><span className={"font-primary"}>Objects</span></H5></CardHeader>
                            <CardBody>
                                <P>每個file 都有自己的key, 由 <span className={"font-warning"}>prefix </span>
                                    + <span className={"font-secondary"}> object name</span> </P>
                                <P>這個Key並非是路徑，而是由 "/" 組成的超長key</P>
                                <P>Object 的大小有限制，單一 Object 不超過<span className={"font-danger"}>5T</span>，上傳時單一檔案若超過 5 GB 則必須使用
                                    <span className={"font-danger"}>"multi-part"</span>上傳
                                </P>
                                <PrimaryPTitle title={"Metadata"} content={"text key / value pairs 的 list,系統或user的使用檔"}/>
                                <PrimaryPTitle title={"Tags"} content={"Unicode key-value 最多可以有10個，可以用來監控安全或lifecycle"}/>
                                <PrimaryPTitle title={"Version ID"} content={"如果有不同版本時，會加上versionID"}/>
                            </CardBody>
                        </Card>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsS3Guideline;
