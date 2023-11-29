import React, {Fragment} from 'react';
import {Breadcrumbs, H6} from '../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import CodeSnippet from "../../Common/CodeSnippet";

const JpaEmbeddedId = () => {
    const embeddedId = `
    @Embeddable
    public class UserId implements Serializable {
        private Long id;
        private String username;
    
        // getters and setters
    }`
    const embeddedIdMapping = `
    @Embeddable
    public class UserId implements Serializable {
    
        @Column(name = "user_id") //此處名稱對照資料庫名稱
        private Long id;
        
        @Column(name = "user_name")
        private String username;
    
        // getters and setters
    }`

    const entityWithEmbeddedId = `
    @Entity
    public class User {
        @EmbeddedId
        private UserId id;

        private String fullName;
        private String email;

        // getters and setters
    }`

    const entityWithEmbeddedIdMapping = `
    @Entity
    public class User {
        @EmbeddedId
        @AttributeOverrides({
        @AttributeOverride(name="id", column = @Column(name="user_id")),
        @AttributeOverride(name="username", column = @Column(name="user_name"))
        })
        private UserId id;

        private String fullName;
        private String email;

        // getters and setters
    }`

    const oneToMany = `
    @OneToMany(mappedBy = "repairFeeRecord")
    public List<RepairFeeRecordDetailAUD> getDetails() {
    return details;
    }`

    const ManyToOne = `
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name = "record_id", referencedColumnName = "record_id", insertable = false, updatable = false),
            @JoinColumn(name = "REV", referencedColumnName = "REV", insertable = false, updatable = false)
    })
    public RepairFeeRecordAUD getRepairFeeRecord() {
        return repairFeeRecord;
    }
    `


    return (
        <Fragment>
            <Breadcrumbs mainTitle='Jpa @EmbeddedId 在mapping 的應用' parent='Java' title='Sample Card'/>
            <Container fluid={true}>
                <Row>
                    <Col sm={"12"}>
                        <Card>
                            <CardHeader>
                                <H6>如果Entity @Id 不只一個</H6>
                            </CardHeader>
                            <CardBody>
                                <Card className={"card-no-border"}>
                                    <CardBody>
                                        <Row>
                                            <Col md={"6"}>
                                                必須先將想要的ID新建一個class放入其中
                                                <CodeSnippet>
                                                    {embeddedId}
                                                </CodeSnippet>
                                            </Col>
                                            <Col md={"6"}>
                                                將id放入其中
                                                <CodeSnippet>
                                                    {entityWithEmbeddedId}
                                                </CodeSnippet>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>

                                <Card>
                                    <CardHeader>
                                        <H6>如果想要變數名與欄位名稱不同，有兩種方式可以做對照</H6>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col md={"6"}>
                                                第一種，在embeddedId 中做column mapping
                                                <CodeSnippet>
                                                    {embeddedIdMapping}
                                                </CodeSnippet>
                                            </Col>
                                            <Col md={"6"}>
                                                或是在entity 端做mapping
                                                <CodeSnippet>
                                                    {entityWithEmbeddedIdMapping}
                                                </CodeSnippet>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <H6>如果兩個有embeddedId 的Entity 需要做mapping 時</H6>
                            </CardHeader>
                            <CardBody>
                                若是one to many 需在兩邊做mapping
                                <Row>
                                    <Col md={"6"}>
                                        <CodeSnippet>
                                            {oneToMany}
                                        </CodeSnippet>
                                    </Col>
                                    <Col md={"6"}>
                                        <CodeSnippet>
                                            {ManyToOne}
                                        </CodeSnippet>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default JpaEmbeddedId;
