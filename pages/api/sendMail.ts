import {validateAll} from '../../validations'

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
  
  return res.status(200).json({success: "Success"})
}