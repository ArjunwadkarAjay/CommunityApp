import React,{useState} from 'react';
import { mail_send } from '../lib/utility';


export default()=>{
    
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [phone, setPhone]=useState("");
    const [message, setMessage]=useState("");

    const handleChangeName = e => {
        setName(e.target.value);
      }
    const handleChangeEmail = e => {
        setEmail(e.target.value);
      }
    const handleChangePhone = e => {
        setPhone(e.target.value);
      }
    const handleChangeMessage = e => {
        setMessage(e.target.value);
      }
    const handleSubmit = event => {
        event.preventDefault();
        mail_send(email,message, name, phone);

      }


    return(
        <div className="contact">
            <header className="masthead">
                <div className="overlay"></div>
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="page-heading">
                        <h1>Contact Me</h1>
                        <span className="subheading">Have questions? I have answers.</span>
                    </div>
                    </div>
                </div>
                </div>
            </header>
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                        <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                        <form name="sentMessage" id="contactForm" onSubmit={handleSubmit} method='GET' target='_self'>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                <label>Name</label>
                                <input name="name" onChange={handleChangeName} type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name."/>
                                <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                <label>Email Address</label>
                                <input name="email" onChange={handleChangeEmail} type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address."/>
                                <p className="to@email.comhelp-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>Phone Number</label>
                                <input name="phone" onChange={handleChangePhone} type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number."/>
                                <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="control-group">
                                <div className="form-group floating-label-form-group controls">
                                <label>Message</label>
                                <textarea name="message" onChange={handleChangeMessage} rows="5" className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <br/>
                            <div id="success"></div>
                            <input type="submit" className="btn btn-primary" id="sendMessageButton" value="Submit" />
                            </form>
                        </div>
                        </div>
                    </div>   
                    <style jsx>{`
                        .masthead{
                            background-image: url('/contact-bg.jpg');
                            
                        }
                        .contact{
                            background-color:  #e6faf9;
                        }
                    `}</style>
 
    </div>
    );

}