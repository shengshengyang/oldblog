import React, {Fragment} from 'react';
import {Breadcrumbs, H5, Image, P} from '../../../../AbstractElements';
import {Card, CardBody, CardHeader, Container} from 'reactstrap';
import securityGroupInfo from "../../../../assets/images/aws/security-group-info.png";
import {Link} from "react-router-dom";

const AwsEC2SecurityGroup = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Security Group' parent='AwsEC2Guideline' title='Sample Card'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5> 安全群組</H5>
                    </CardHeader>
                    <CardBody>
                        <P>擔任著<span className={"font-primary"}>防火牆</span>的角色，
                        可以自定義規則及IP位址是否可以連線，其中只會包含<span className={"font-danger"}>允許</span>
                        的規則,可以自行定義可傳入或傳出的port,預設的話會限制傳入，但傳出不限制,
                            詳細可參考<Link to={'/aws/EC2/guideline/:layout'}> firewall rule</Link>
                        </P>
                        <Image attrImage={{
                            className: 'img-fluid d-inline',
                            src: `${securityGroupInfo}`,
                            alt: '',
                            style: {maxWidth: '100%'}
                        }}/>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default AwsEC2SecurityGroup;
