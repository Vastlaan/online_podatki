import {useState} from 'react'
import styled from 'styled-components'
import Name from './name'
import Email from './email'
import Message from './message'
import Disclaimer from './disclaimer'
import {respond, SectionNarrow,  Heading4, ButtonSecondary} from '../../../styles'
import {validateAll} from '../../../validations'


export default function FormComponent() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disclaimer, setDisclaimer] = useState(false)
  const [displayModal, setDisplayModal] = useState(false)
  const [error, setError] = useState({type: '', field: '', message:''});

  function submitForm(e){
    e.preventDefault()
    setError({type: '', field: '', message:''})

    const fieldsValid = validateAll(name, email, message)

    if(fieldsValid.type==='error'){
      return setError(fieldsValid)
    }

    if(!disclaimer){
      return setError({type: 'error', field: 'disclaimer', message:'Please select the checkbox'})
    }
    console.log('form submited')
  }
  return (
    <SectionNarrow>
      <Form onSubmit={submitForm}>
        <Heading4 margin='0 0 2.7rem 0'>Formularz kontaktowy</Heading4>

        <Name name={name} setName={setName} error={error}/>

        <Email email={email} setEmail={setEmail} error={error}/>

        <Message message={message} setMessage={setMessage} error={error}/>

        <Disclaimer disclaimer={disclaimer} setDisclaimer={setDisclaimer}/>

        {error.field === "disclaimer" ? <small>{error.message}</small> : null}

        <ButtonSecondary>Wyślij</ButtonSecondary>

      </Form>
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
