import React, {Fragment, useState} from 'react';
import {Breadcrumbs, H5, P} from '../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane} from 'reactstrap';
import CodeSnippet from "../../Common/CodeSnippet";

const JavaFileIO = () => {
    const codeZipEntry = `
    try (FileOutputStream fos = new FileOutputStream("example.zip");
        ZipOutputStream zos = new ZipOutputStream(fos)) {
    
        // add file entry to the zip
        ZipEntry zipEntry = new ZipEntry("example.txt");
        zos.putNextEntry(zipEntry);
        
        // write contents to the file entry
        byte[] bytes = "Hello, world!".getBytes();
        zos.write(bytes, 0, bytes.length);
        
        // close the entry
        zos.closeEntry();
    
    } catch (IOException e) {
        e.printStackTrace();
    }
`
    const [LeftLineTab, setLeftLineTab] = useState('1');
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Java File 應用' parent='Jave' title='Sample Card'/>
            <Container fluid={true}>
                <Row>
                    <Col sm='12'>
                        <Card>
                            <CardHeader>
                                <H5>java.util.zip</H5>
                                <span>用來寫入壓縮檔，並可以在寫入前做各項操作</span>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col sm='2' md='2' className='tabs-responsive-side'>
                                        <Nav className='flex-column nav-pills border-tab nav-left'>
                                            <NavItem>
                                                <NavLink className={LeftLineTab === '1' ? 'active' : ''} onClick={() => setLeftLineTab('1')}>
                                                    ZipEntry
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink className={LeftLineTab === '2' ? 'active' : ''} onClick={() => setLeftLineTab('2')}>
                                                    ZipOutputStream
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Col>
                                    <Col sm='4' md='4'>
                                        <TabContent activeTab={LeftLineTab}>
                                            <TabPane className='fade show' tabId='1'>
                                                <P >用於進入zip中的子項目，可以取得或修改 常用方法:</P>
                                                <P><span className={'txt-primary'}>getName() : </span>取得名稱</P>
                                                <P><span className={'txt-primary'}>getTime()： </span>最後修改時間</P>
                                                <P><span className={'txt-primary'}>setSize()： </span>解壓縮前大小</P>
                                                <P><span className={'txt-primary'}>setCompressedSize()： </span>壓縮後大小</P>
                                            </TabPane>
                                            <TabPane tabId='2'>
                                                <P>
                                                    <P >創建zip，可以將指定的檔案放入同一個zip,也可以將分類檔案夾放入 常用方法:</P>
                                                    <P><span className={'txt-primary'}>putNextEntry(ZipEntry entry)： </span>每一個Entry都要先透過此方法放進去之後才能開始做後續操作</P>
                                                    <P><span className={'txt-primary'}>write(byte[] buffer, int offset, int length)： </span>寫入data</P>
                                                    <P><span className={'txt-primary'}>closeEntry()： </span>關閉當前Entry</P>
                                                    <P><span className={'txt-primary'}>finish() </span>完成輸出後最後記得要關閉</P>
                                                </P>
                                            </TabPane>
                                        </TabContent>
                                    </Col>
                                    <Col sm='6' md='6'>
                                        <CodeSnippet>
                                            {codeZipEntry}
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

export default JavaFileIO;
