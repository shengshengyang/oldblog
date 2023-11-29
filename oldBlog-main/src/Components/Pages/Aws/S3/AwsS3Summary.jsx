import React, {Fragment} from 'react';
import {Breadcrumbs, H5, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Container} from 'reactstrap';
import IconUL from "../../../Common/IconUL";
import DangerPTitle from "../../../Common/DangerPTitle";

const AwsS3Summary = () => {
    const ulArray = ["File Gateway", "Volume Gateway", "Tape Gateway" ]
    return (
        <Fragment>
            <Breadcrumbs mainTitle='S3' title='aws'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5><span className={"font-primary"}>AWS Storage Gateway </span> </H5>
                    </CardHeader>
                    <CardBody>
                       <P>S3 有如此多中型態，storage Gateway 可以作文本地端上傳的橋樑，分為三種</P>
                        <IconUL icon={"fa fa-caret-right"} contentArray={ulArray}></IconUL>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5><span className={"font-primary"}>S3 名詞小結</span> </H5>
                    </CardHeader>
                    <CardBody>
                        <DangerPTitle title={"Buckets vs Objects"} content={"必須全區名字獨立，綁定區域"}/>
                        <DangerPTitle title={"S3 security"} content={"IAM policy, S3 Bucket Policy (用於公開訪問), S3 Encryption"}/>
                        <DangerPTitle title={"S3 Websites"} content={"S3 上的靜態網頁"}/>
                        <DangerPTitle title={"S3 Versioning"} content={"單一檔案的多版本，可避免意外刪除"}/>
                        <DangerPTitle title={"S3 Replication"} content={"同區或跨區皆可，必須允許版控"}/>
                        <DangerPTitle title={"S3 Storage Classes"} content={"tandard, IA, 1Z-IA, Intelligent, Glacier (Instant, Flexible, Deep)"}/>
                        <DangerPTitle title={"Snow Family"} content={"可離線運作的S3"}/>
                        <DangerPTitle title={"OpsHub"} content={"Snow 的 GUI"}/>
                        <DangerPTitle title={"Storage Gateway"} content={"綜合上傳方案"}/>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsS3Summary;
