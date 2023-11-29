import React, {Fragment} from 'react';
import {Breadcrumbs, H5, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Container} from 'reactstrap';
import DangerPTitle from "../../../Common/DangerPTitle";

const AwsComputeSummary = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Compute' title='aws'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                       <H5><span className={"font-primary"}>Compute 名詞小結</span> </H5>
                    </CardHeader>
                    <CardBody>
                        <DangerPTitle title={"Docker"} content={"用來跑應用程式的容器技術"}/>
                        <DangerPTitle title={"ECS"} content={"在EC2 上跑 Docker containers"}/>
                        <DangerPTitle title={"Fargate"} content={"不需要預先建構基礎設施的情況下運行Docker，為serverless服務"}/>
                        <DangerPTitle title={"ECR"} content={"儲存私有Docker image Repository"}/>
                        <DangerPTitle title={"Batch"} content={"在受管的EC2 instances 上跑batch jobs"}/>
                        <DangerPTitle title={"Lightsail"} content={"低價格的簡易應用程式 + DB 組合"}/>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5><span className={"font-primary"}>Lambda 小結 </span> </H5>
                    </CardHeader>
                    <CardBody>
                        <P>Serverless, Function as a Service, seamless scaling, reactive</P>
                        <P>價格: </P>
                        <DangerPTitle title={"calls"} content={"依照request 收錢,ex:　$0.20 per 1 million requests thereafter ($0.0000002 per request)"}/>
                        <DangerPTitle title={"duration"} content={"依 ms 計算，400,000 GB-seconds compute time / month免費 "}/>
                        <P>支援各種語言，除了Docker</P>
                        <P>Api Gateway: 將lambda function 當成 HTTP api 來po上網</P>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsComputeSummary;
