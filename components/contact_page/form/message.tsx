import {Dispatch, SetStateAction} from 'react'
import {useRouter} from 'next/router'
import {Field} from '../../../styles'
import {ErrorObject} from '../../../types'

interface MessageProps{
  message: string;
  setMessage:  Dispatch<SetStateAction<string>>
  error: ErrorObject
}


export default function MessageComponent({message, setMessage, error}:MessageProps) {

  const router = useRouter()
  const {locale} = router

  return (
    <Field>
      <label htmlFor="message">{locale==='en'?"Message":"Wiadomość"}:</label>
      <textarea
          id="message"
          name="message"
          value={message}
          rows={5}
          onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      {error.field === "message" ? <small>{error.message}</small> : null}
  </Field>
  )
}