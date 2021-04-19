import {Dispatch, SetStateAction} from 'react'
import {useRouter} from 'next/router'
import {Field} from '../../../styles'
import {ErrorObject} from '../../../types'

interface NameProps{
  name: string;
  setName:  Dispatch<SetStateAction<string>>
  error: ErrorObject
}


export default function NameComponent({name, setName, error}:NameProps) {

  const router = useRouter()
  const {locale} = router

  return (
    <Field>
      <label htmlFor="name">{locale==='en'?"Full Name":"Imię i nazwisko"}:</label>
      <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
      />
      {error.field === "name" ? <small>{error.message}</small> : null}
  </Field>
  )
}
