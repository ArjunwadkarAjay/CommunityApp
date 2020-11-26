import {init} from 'emailjs-com';
import emailjs from 'emailjs-com';

export function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
       var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
       return v.toString(16);
    });
 }
export async function fetchAPI(id) {
    try {
        const response = await fetch('https://community-app-strapi-backend.herokuapp.com'+id, {
            method: 'GET',
            credentials: 'same-origin'
        });
        const exam = await response.json();
        return exam;
    } catch (error) {
        console.error(error);
    }
}

export  function mail_send(senderAddress, Message, Name, Phone){
    init("user_e8bFH0mEDjcCO88W01cua");
     var templateParams = {
        from_name: Name,
        to_name:"Quantumniac Community Creator",
        phone: Phone,
        message: Message,
        reply_to: senderAddress
    };
     
    emailjs.send('service_b3payk2','template_3zbohqj', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(err) {
           console.log('FAILED...', err);
        });
}
