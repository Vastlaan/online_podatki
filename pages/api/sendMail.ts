import {validateAll} from '../../validations'
import SgMail from "@sendgrid/mail";

interface BodyProps{
  name: string;
  email: string;
  message: string;
}
export default async function handler(req, res){
  const {name, email, message} = req.body

  const fieldsValid = validateAll(name,email,message)
  if(fieldsValid.type==='error'){
    return res.status(400).json({error: "Invalid data"})
  }

  try{
    SgMail.setApiKey(process.env.SG_API_KEY);


    const msg = {
        to: [email, "info@onlinepodatki.eu"],
        from: "no-reply@onlinepodatki.eu",
        subject: "Potwierdzenie wysłania formularza",
        html: `
          <div style=" padding: 10px;">
            <h1
              style="font-family: sans-serif; font-size: 27px; letter-spacing: -1px; font-weight: 600; line-height: 1.2; color: #222; text-shadow: 3px 3px 3px rgba(0,0,0,.3);">
              <span style="color: #346897">Online</span>Podatki
            </h1>
            <h2
              style=" font-family: sans-serif; font-size: 16px; letter-spacing: -1px; font-weight: 400; line-height: 1; color: #222; text-shadow: 3px 3px 3px rgba(0,0,0,.3);">
              Załatwisz swoje sprawy online
            </h2>
          </div>
          <div style="padding: 10px;">
            <h3 style="font-family: 'Forum', sans-serif; font-size: 16px; font-weight: 400; color: black;">Dziękujemy za skontaktowanie się z nami!</h3>
            <p style="font-family: 'Forum', sans-serif; font-size: 14px; color: #222; line-height: 1.3; margin: 0;">Jeden z naszych kolegów wkrótce się z Tobą skontaktuje.</p>
            </br>
            <div style="border: 5px solid #222; margin: 14px 0;  padding: 9px; max-width: 600px;">
              <p
                style="font-family: 'Forum', sans-serif; font-size: 16px; color: #18191F; line-height: 1.3; margin-top: 27px; padding: 9px; ">
                Twój email:
                <strong>${email}</strong></p>
              <p
                style="font-family: 'Forum', sans-serif; font-size: 16px; color: #18191F; line-height: 1.3; margin: 0;margin-bottom: 27px; padding: 9px; ">
                Wiadomość: <strong>${message}</strong>
              </p>
            </div>
          
            </br>
            <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #222; line-height: 1.3; margin: 0;">
                Pozdrawiamy,
            </p>
            <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #222; line-height: 1.3; margin: 0;">
                Online Podatki
            </p>
            <div>
              <a href="mailto:info@onlinepodatki.eu" style="font-family: 'Forum', sans-serif; font-size: 16px; color: #222; line-height: 1.3; margin: 0;">
                info@onlinepodatki.eu
              </a>
            </div>
            <div>
               <a href="tel:0048500424583" style="font-family: 'Forum', sans-serif; font-size: 16px; color: #222; line-height: 1.3; margin: 0;">+48 500 424 583</a>
            </div>
            <div>
              <a href="tel:0031630159193" style="font-family: 'Forum', sans-serif; font-size: 16px; color: #222; line-height: 1.3; margin: 0;">+31 630 159 193</a>
            </div>   
            </br>
           
            
          </div>
        `,
    };

    SgMail.send(msg);

  }catch(e){
    console.error(e)
    return res.status(400).json({error: "Something went wrong"})
  }

  
  
  return res.status(200).json({success: "Success"})
}