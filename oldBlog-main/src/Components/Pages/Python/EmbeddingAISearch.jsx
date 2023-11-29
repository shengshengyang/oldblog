import React, {Fragment} from 'react';
import {Breadcrumbs, H5, P} from '../../../AbstractElements';
import {Card, CardBody, CardHeader, Container} from 'reactstrap';

const EmbeddingAISearch = () => {
    return (
        <Fragment>
            <Breadcrumbs mainTitle='Embedding Database Chatbot' parent='python' title='Embedding Database Chatbot'/>
            <Container fluid={true}>
                <Card>
                    <CardHeader>
                        <H5><span className={'font-primary'}>Vectors and Embeddings</span></H5>
                    </CardHeader>
                    <CardBody>
                        <P>紀錄一下近10幾天做的一個ai 專案，主要是基於這篇文章的發想:&nbsp;
                            <a href='https://blog.infuseai.io/custom-km-qa-solution-chapgpt-openai-api-embedding-6a3c30860fbc' rel='noreferrer' target='_blank'>
                                利用 ChatGPT 和 Embedding 的 LLM 模型應用</a>
                            ，原本是嘗試使用sentence-transformers來將資料 embedding，後來發現即使用到最到大預載模型，在搜尋上也常常得不到想要的結果，
                            所以後來改用openAi API 的 embedding ，其中新推出的text-embedding-ada-002準確度之高令人驚訝，即使中文也能好好地做分析及embedding
                        </P>
                        <P>此為連結: <a href='https://github.com/shengshengyang/fass-embedding' rel='noreferrer' target='_blank'><i className={"fa fa-github"}>faiss-embedding</i></a></P>
                        <P>主要利用api 將QA的Q去做向量化，並將向量化的數值存入本地的faiss database，再利用embedding 問題後取出相近的問題index</P>
                        <P>取出index 後，將對應index 的 excel 取出，做為顯示的同時，將其資料作為模板再送至大型LLM做答案生成</P>
                    </CardBody>
                </Card>
            </Container>
        </Fragment>
    );
};

export default EmbeddingAISearch;
