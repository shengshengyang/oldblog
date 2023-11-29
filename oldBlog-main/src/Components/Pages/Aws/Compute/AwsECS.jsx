import React, {Fragment} from 'react';
import {Breadcrumbs, H5, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Container} from 'reactstrap';
import ECS from "../../../../assets/images/aws/aws-ecs.png";
import FarGate from "../../../../assets/images/aws/aws-fargate.png";
import ECR from "../../../../assets/images/aws/aws-ecr.png";

const AwsECS = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Amazon Elastic Container Service' title='Amazon Elastic Container Service' parent='AwsComputeSummary'/>
            <Container fluid={false }>
                <Card>
                    <CardHeader>
                        <H5>ECS</H5>
                    </CardHeader>
                    <CardBody>
                        <P>用來在aws 使用 Docker containers,全受管的容器協同運作服務，可簡化容器化應用程式的部署、管理和擴展</P>
                        <img src={ECS} style={{width: "100%"}} alt=""/>
                        <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/FnFvpIsBrog"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>Fargate容器的無伺服器運算</H5>
                    </CardHeader>
                    <CardBody>
                        <P>ECS 要自己管Docker 裡的 EC2, Fargate 是全託管</P>
                        <P>AWS Fargate 是無伺服器、依用量計費的運算引擎，讓您能專注於建置應用程式，而無需管理伺服器。AWS Fargate 適用於搭配 Amazon Elastic Container Service (Amazon ECS) 和 Amazon Elastic Kubernetes Service (Amazon EKS) 使用。 選取任何符合 OCI 標準的容器映像、定義記憶體和運算資源，以及使用無伺服器運算來執行容器。</P>
                        <img src={FarGate} style={{width: "100%"}} alt=""/>
                        <iframe width="100%" height="300vh" src="https://www.youtube.com/embed/4CHu1ErN51o"
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen></iframe>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <H5>ECR Amazon Elastic Container Registry</H5>
                    </CardHeader>
                    <CardBody>
                        <P>簡單講就是儲存 Docker Image 的地方</P>
                        <img src={ECR} style={{width: "100%"}} alt=""/>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsECS;
