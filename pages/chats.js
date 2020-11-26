//Fututre Scope
import { Table } from "reactstrap";
import {fetchAPI} from '../lib/utility';
import React,{useState, useContext} from 'react';
import AppContext from '../context/AppContext';
import {createUUID} from '../lib/utility';
export default ({allEventData}) => {  
    const [msg, setMsg]= useState("");

    var d =new Date();
    var t= useContext(AppContext);
    const handleChangeMsg = e=>{
        setMsg(e.target.value);
    }
    const handleSubmit = e=>{
        e.preventDefault();
        var temp = createUUID();
        var data={
            "_id": temp,
            "message":msg,
            "username": t.displayName,
            "date": d.getUTCFullYear()+'-'+d.getUTCMonth()+'-'+d.getDay()+d.getUTCMilliseconds(),
            "published_at": "2020-11-26T06:20:07.567Z",
            "createdAt": "2020-11-26T06:19:58.242Z",
            "updatedAt": "2020-11-26T08:43:27.325Z",
            "__v": 0,
            "_id": temp,

        };
        fetch('https://community-app-strapi-backend.herokuapp.com/converstions', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
            console.log('Success:', data);
            })
            .catch((error) => {

            console.error('Error:', error);
            });

        }
  const table_data = <tbody>
      {
          allEventData.map((e)=>{
              return(<tr>
                  <td width="15%">{e.username}:</td>
                  <td width="65%">{e.message}</td>
                  <td width="20%">{new Date(e.date).toLocaleDateString()}</td>
              </tr>);
          })
      }
  </tbody>
  return (
    <div className='chats'>
      <header className="masthead">
          <div className="overlay"></div>
          <div className="container">
          <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
              <div className="page-heading">
                  <h3>Quantumniac's Community Discussion Forumn</h3>
                  <span className="subheading">Group and Grow your Knowledge🚀🚀🔥🚀🔥🔥!!!</span>
              </div>
              </div>
          </div>
          </div>
      </header>
      <Table striped>
        <thead>
            <tr>
                <th>User</th>
                <th></th>
                <th>DateTime</th>
            </tr>
        </thead>
        {table_data}
        </Table>
        <form onSubmit={handleSubmit}>
          <label for="message">Message:</label>
          <input type="text" onChange={handleChangeMsg} id="message" name="message" required/>
          <button color='primary' type="submit">Send <i className="fa fa-arrow-circle-right fa-fw fa-1x" aria-hidden="true"></i></button>
        </form> 
        <style jsx>
          {`
              .masthead{
                  background-image: url('/full-bg.jpeg');
                  
              }
              .chats{
                  background-color:  #e6faf9;
              }
          `}</style>
    </div>
  );
};


export async function getStaticProps() {
    let allEventData = await fetchAPI('/converstions');
    console.log(allEventData);
    return {
      props: {
        allEventData
    },
    }
  }
  