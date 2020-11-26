
import Link from 'next/link';
import { Button, Alert, Container, Jumbotron,Card, ListGroup, ListGroupItem, CardBody, CardHeader } from "reactstrap";

export default () => {  
  
  return (
    <div>
      <Alert color="primary">
        Latest Blockbuster news regarding the Community....<br/>
        Sign-Up to get the updates and notification of latest events
        <Button color="primary"><Link href='/events'><a>See Our List of events</a></Link></Button>
      </Alert>
      <Container fluid>
      <Jumbotron fluid>
        <Container fluid>
          <h1 align="center" >Welcome To The Quantumniac's Community</h1>
          <br/>
          <h5 align="center" className="text-muted">Ready Set Go Quantum🚀🚀🔥🚀🔥🔥!!!!!!!!!!!</h5><br/>
          <hr className="my-2" />
          <br/><br/>
          <Card width="100%">
            <CardHeader>
              <h2 align="center">Learn and Interact with like minded Quantum Computing Enthusiast</h2>
            </CardHeader>
            <CardBody>
            <p>We keep you up-to-date with the cuurent trends and research in this area along with the Tutorials for beginners.</p> 
            <p>See Out the posts and articles for any sub tiopic related to quantum computers below</p>    
            <Button color="primary"><Link href="/resources">Go to Resources</Link></Button>
            </CardBody>
          </Card>
        </Container>
      </Jumbotron>

      <div className="main-content">
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/videoseries?list=PLOFEBzvs-VvrXTMy5Y2IqmSaUjfnhvBHR" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <Jumbotron fluid>
        <h1 align="center" className="text-muted">Quantumniac's Community Guidelines</h1>
        <br/>
        <hr className="my-2" />
        <ListGroup>
          <ListGroupItem >Being considerate, kind, constructive, and helpful.</ListGroupItem>
          <ListGroupItem>Not engaging in demeaning, discriminatory, harassing, hateful, sexualized, or physically threatening behavior, speech, and imagery.</ListGroupItem>
          <ListGroupItem>Be mindful of your language</ListGroupItem>
          <ListGroupItem>Be open minded. Embrace new people and new ideas. Our community is continually evolving and we welcome positive change.</ListGroupItem>
          <ListGroupItem>Participants asked to stop any harassing behavior are expected to comply immediately. If a participant engages in harassing behavior, the Community may take any action they deem appropriate, up to and including expulsion from all Community spaces and identification of the participant as a harasser to other members or the general public.</ListGroupItem>
        </ListGroup>
        </Jumbotron>
      </div> 
      <br/>
      </Container>
    </div>
  );
};
