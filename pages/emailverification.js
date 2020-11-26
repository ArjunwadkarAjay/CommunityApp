import {Card, CardBody, CardHeader} from 'reactstrap';

export default()=>{
    return(
        <div>
            <Card>
                <CardHeader>
                <i className="fa fa-envelope-open fa-fw fa-7x"></i><br/>
                <p>Please verify your email address in order to access your Quantumniac Community Account </p>
                <h3>We sent an email to your gmail account</h3>
                </CardHeader>
                <CardBody>
                <p>To continue, please check your inbox and verify your email address.</p>
                <h3>Didn’t receive the email?</h3>
                </CardBody>
            </Card>
         
        </div>
    );
}