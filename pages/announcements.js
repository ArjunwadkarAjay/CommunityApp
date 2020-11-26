
import { Table } from "reactstrap";
import {fetchAPI} from '../lib/utility';


export default ({allEventData}) => {  
   
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
                  <h3>Quantumniac's Community Notices </h3>
                  <span className="subheading">Keep in touch with our Internal team discussion🚀🚀🔥🚀🔥🔥!!!</span>
              </div>
              </div>
          </div>
          </div>
      </header>
      <Table striped>
        <thead>
            <tr>
                <th>User</th>
                <th>Notice</th>
                <th>DateTime</th>
            </tr>
        </thead>
        {table_data}
        </Table>
        
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
  