import {useState} from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components'
import Name from './name'
import Email from './email'
import Message from './message'
import Disclaimer from './disclaimer'
import Modal from '../../modals/successfull'
import {respond, SectionNarrow,  Heading4, ButtonSecondary} from '../../../styles'
import {validateAll} from '../../../validations'


export default function FormComponent() {

  const router = useRouter()
  const {locale} = router

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disclaimer, setDisclaimer] = useState(false)
  const [displayModal, setDisplayModal] = useState(false)
  const [error, setError] = useState({type: '', field: '', message:''});

  async function submitForm(e){
    e.preventDefault()
    setError({type: '', field: '', message:''})

    const fieldsValid = validateAll(name, email, message)

    if(fieldsValid.type==='error'){
      return setError(fieldsValid)
    }

    if(!disclaimer){
      return setError({type: 'error', field: 'disclaimer', message:'Please select the checkbox'})
    }
    try{
      const res = await fetch('/api/sendMail', {
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      })
      const data = await res.json()
      
      if(data.error){
        return setError({
          type: 'error',
          field: 'disclaimer', 
          message:data.error
        })
      }

      return setDisplayModal(true)

    }catch(e){
      console.error(e)
    }
  }
  return (
    <SectionNarrow>
      <Form onSubmit={submitForm}>
        <Heading4 margin='0 0 2.7rem 0'>{locale==='en'?"Contact Form":"Formularz kontaktowy"}</Heading4>

        <Name name={name} setName={setName} error={error}/>

        <Email email={email} setEmail={setEmail} error={error}/>

        <Message message={message} setMessage={setMessage} error={error}/>

        <Disclaimer disclaimer={disclaimer} setDisclaimer={setDisclaimer}/>

        {error.field === "disclaimer" ? <small>{error.message}</small> : null}

        <ButtonSecondary>{locale==='en'?"Submit":"Wy??lij"}</ButtonSecondary>

      </Form>
      {displayModal && <Modal message={locale==='en'?"Thank you for your message! One of our colleagues will contact you as soon as possible. Have a nice day!":'Dzi??kujemy za wiadomo????! Jeden z naszych koleg??w wkr??tce si?? z Tob?? skontaktuje. Mi??ego dnia!'}/>}
    </SectionNarrow>
    
  )
}

const Form = styled.form`
  margin: 4.7rem auto;
  width: 100%;
  padding: 1.4rem 2.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid rgba(0,0,0,.3);

   small {
        font-size: 1rem;
        margin: 0.6rem 0;
        color: orangered;
    }
`
