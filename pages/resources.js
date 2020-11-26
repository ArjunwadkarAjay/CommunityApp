import { TabContent, TabPane, Nav, NavItem, NavLink, CardBody, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {fetchAPI} from '../lib/utility';
import React, { useState } from 'react';
import classnames from 'classnames';
import {ModalNew} from '../components/ModalNew';
import matter from 'gray-matter';

export default ({allResourceData}) => {  
  const articles = <Row>
      {
        allResourceData.filter((res)=>res.resource_type=='Article')
        .map((res)=>{
          let val = matter(res.content);
          return(
            <Col xs="6" sm="4" key={res._id}>
              <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
                <CardBody>
                  <CardTitle>
                    {res.topic}<br/>
                    <hr className="my-2" />
                    <div className='author'>{res.author}</div>
                    <div className='published'>{new Date(res.published_at).toLocaleDateString()}</div>
                  </CardTitle>
                  <CardText className='content'>{res.content}</CardText>
                </CardBody>
                <div className="card-footer">
                  <ModalNew className={res._id} title={res.topic} content={res.content}></ModalNew>
                </div>
              </Card>
            </Col>
          );
      })
      }
    <style jsx global>
      {`
        
        a:link {
          text-decoration: none;
          
        }
       
        .content{
          overflow:hidden;
          white-space: nowrap; 
          overflow: hidden;
          text-overflow: ellipsis; 
          border: 1px solid #000000;
        }
        .published{
          float:right
          font-size: 8px;
        }
        // .author{
        //   float:left
        // }
      `}
    </style>    
  </Row>
  const videos = <Row>
  {
    allResourceData.filter((res)=>res.resource_type=='Video')
    .map((res)=>{
      let val = matter(res.content);
      return(
        <Col xs="6" sm="4" key={res._id}>
          <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
            <CardBody>
              <CardTitle>
                {res.topic}<br/>
                <hr className="my-2" />
                <div className='author'>{res.author}</div>
                <div className='published'>{new Date(res.published_at).toLocaleDateString()}</div>
              </CardTitle>
              <CardText className='content'>{res.content}</CardText>
            </CardBody>
            <div className="card-footer">
              <ModalNew className={res._id} title={res.topic} content={res.content}></ModalNew>
            </div>
          </Card>
        </Col>
      );
  })
  }
<style jsx global>
  {`
    
    a:link {
      text-decoration: none;
      
    }
   
    .content{
      overflow:hidden;
      white-space: nowrap; 
      overflow: hidden;
      text-overflow: ellipsis; 
      border: 1px solid #000000;
    }
    .published{
      float:right
      font-size: 8px;
    }
    // .author{
    //   float:left
    // }
  `}
</style>    
</Row>

const tutorials = <Row>
      {
        allResourceData.filter((res)=>res.resource_type=='Tutorial')
        .map((res)=>{
          let val = matter(res.content);
          return(
            <Col xs="6" sm="4" key={res._id}>
              <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
                <CardBody>
                  <CardTitle>
                    {res.topic}<br/>
                    <hr className="my-2" />
                    <div className='author'>{res.author}</div>
                    <div className='published'>{new Date(res.published_at).toLocaleDateString()}</div>
                  </CardTitle>
                  <CardText className='content'>{res.content}</CardText>
                </CardBody>
                <div className="card-footer">
                  <ModalNew className={res._id} title={res.topic} content={res.content}></ModalNew>
                </div>
              </Card>
            </Col>
          );
      })
      }
    <style jsx global>
      {`
        
        a:link {
          text-decoration: none;
          
        }
       
        .content{
          overflow:hidden;
          white-space: nowrap; 
          overflow: hidden;
          text-overflow: ellipsis; 
          border: 1px solid #000000;
        }
        .published{
          float:right
          font-size: 8px;
        }
        // .author{
        //   float:left
        // }
      `}
    </style>    
  </Row>
  const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab);
    }
  
    return (
      <div className='resources'>
        <header className="masthead">
            <div className="overlay"></div>
            <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                <div className="page-heading">
                    <h1>Resource Section</h1>
                    <span className="subheading">Explore range of resources......</span>
                </div>
                </div>
            </div>
            </div>
        </header>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }}
            >
              Articles
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }}
            >
              Videos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }}
            >
              Tutorials
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            {articles}
          </TabPane>
          <TabPane tabId="2">
            {videos}
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                {tutorials}
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        <style jsx>{`
                        .masthead{
                            background-image: url('/contact-bg.jpg');
                            
                        }
                        .resources{
                            background-color:  #e6faf9;
                        }
                    `}</style>
      </div>
    );
};


export async function getStaticProps() {
    const allResourceData = await fetchAPI('/tutorials');
    return {
      props: {
        allResourceData
      }
    }
  }
  
