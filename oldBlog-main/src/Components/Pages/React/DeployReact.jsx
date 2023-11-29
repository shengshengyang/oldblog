import React, {Fragment} from 'react';
import {Breadcrumbs, H5, P} from '../../../AbstractElements';
import {Card, CardBody, CardHeader, Col, Container, Row} from 'reactstrap';
import CodeSnippet from "../../Common/CodeSnippet";
const codeOriYml = `# v1
name: Deploy to GitHub Pages
on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.1
        with:
          branch: gh-pages
          folder: build
          token: \${secrets.GITHUB_TOKEN}`;
const codeAftYml = `# v2
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
permissions:
  contents: write

jobs:
  build-and-deploy:
    concurrency: ci-\${{ github.ref }} # Recommended if you intend to make multiple deployments in quick succession.
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2
      - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
        run: |
          npm ci
          npm run build
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.1
        with:
          branch: gh-pages
          folder: build
`

const DeployReactPage = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='deploy github pages 遇到的坑' parent='Pages' title='Sample Card'/>
            <Container fluid={true}>
                <Row>
                    <Col sm='12'>
                        <Card>
                            <CardHeader>
                                <H5>Deploy所需的指令</H5>
                                <span>這邊使用<a href="https://github.com/JamesIves/github-pages-deploy-action" target="_blank" rel="noopener noreferrer">JamesIves/github-pages-deploy-action@4.1.1</a></span>
                            </CardHeader>
                            <CardBody>
                                <P>動作主要為:取得最新branch->build->push 至gh-pages branch->github bot deploy</P>
                                <div className={"row"}>
                                    <div className={"col-sm-6"}>
                                        <Card>
                                            <CardBody>
                                                <P>這是一開始爬文寫的yml</P>
                                                <CodeSnippet>
                                                    {codeOriYml}
                                                </CodeSnippet>
                                            </CardBody>
                                        </Card>
                                    </div>
                                    <div className={"col-sm-6"}>
                                        <Card>
                                            <CardBody>
                                                <P>這是依照原lib document的</P>
                                                <CodeSnippet>
                                                    {codeAftYml}
                                                </CodeSnippet>
                                            </CardBody>
                                        </Card>
                                    </div>
                                </div>
                                    <p>寫入的權限要在這邊加入
                                        permissions:
                                        contents: write
                                        不然github 會因為在force push 到gh-pages 時發生錯誤</p>
                                <p>往回看了一下<a href={'https://github.com/marketplace/actions/deploy-to-github-pages'} target={"_blank"} rel="noopener noreferrer">github pages document</a> </p>
                                <p>發現是自己犯蠢，如果有用SSH key 的話就不用加入permission,若無的話則需加入</p>
                                <p>結論: document 要好好看清楚</p>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <H5>304 error</H5>
                                <span>好不容易deploy成功了，但點進去發現一片空白!!!</span>
                            </CardHeader>
                            <CardBody>
                                透過直接跑指令發現 滿滿的304錯誤
                                <div className="row">
                                    {["npm run build", "cd build", "serve -s"].map((command, index) => (
                                        <div className="col-sm-4" key={index}>
                                            <CodeSnippet>{command}</CodeSnippet>
                                        </div>
                                    ))}
                                </div>

                                <pre>
                                    <code className="language-html">
                                        <p> HTTP  2023/5/15 上午11:30:20 ::1 Returned 304 in 3 ms</p>
                                        <p> HTTP  2023/5/15 上午11:30:20 ::1 GET /shengshengyang.github.io/manifest.json</p>
                                        <p> HTTP  2023/5/15 上午11:30:20 ::1 GET /shengshengyang.github.io/favicon.png</p>
                                        <p> HTTP  2023/5/15 上午11:30:20 ::1 Returned 304 in 3 ms</p>
                                    </code>
                                </pre>
                                <p>原先使用了BrowserRouter,而在github pages 會無法使用,需改用HashRouter</p>
                                <p>因Github Pages 為靜態網頁，在BrowserRouter 會去使用HTML5 history API 來操作 URL,造成未能找到相對應index.html而報錯</p>
                                <p>HashRouter 在 URL 中添加井號符號（#）來模擬客戶端路由，並完全在JavaScript 中完成</p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default DeployReactPage;
