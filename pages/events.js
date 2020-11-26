import { Table } from "reactstrap";
import {fetchAPI} from '../lib/utility';
export default ({allEventData}) => {  
  const table_data = <tbody>
      {
          allEventData.map((e)=>{
              return(<tr>
                  <td>{e.purpose}</td>
                  <td>{new Date(e.conducted_on).toLocaleDateString()}</td>
                  <td>{e.details}</td>
              </tr>);
          })
      }
  </tbody>
  return (
    <div className='events'>
      <header className="masthead">
          <div className="overlay"></div>
          <div className="container">
          <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
              <div className="page-heading">
                  <h3>Quantumniac's Community Event Schedule</h3>
                  <span className="subheading">Explore all our recent and upcoming events.<br/>Note: This page best viewed on desktop mode</span>
              </div>
              </div>
          </div>
          </div>
      </header>
      <Table striped>
        <thead>
            <tr>
                <th>Purpose of Event</th>
                <th>Date and Time of Event</th>
                <th>details</th>
            </tr>
        </thead>
        {table_data}
        </Table>
        <style jsx>
          {`
              .masthead{
                  background-image: url('/about-bg.jpg');
                  
              }
              .events{
                  background-color:  #e6faf9;
              }
          `}</style>
    </div>
  );
};


export async function getStaticProps() {
    let allEventData = await fetchAPI('/events');
    console.log(allEventData);
    return {
      props: {
        allEventData
    },
    }
  }
  
