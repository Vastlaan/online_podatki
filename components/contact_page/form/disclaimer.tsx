import {Dispatch, SetStateAction} from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components'


interface DisclaimerProps{
  disclaimer: boolean;
  setDisclaimer:  Dispatch<SetStateAction<boolean>>

}
interface DisclaimerStyleProps{
  selected?: boolean
}

export default function DisclaimerComponent({disclaimer, setDisclaimer}:DisclaimerProps) {

  const router = useRouter()
  const {locale} = router

  return (
    <DisclaimerField selected={disclaimer}>
        <input
            type="checkbox"
            id="disclaimer"
            name="disclaimer"
            checked={disclaimer}
            onChange={(e) => setDisclaimer(prevState=>!prevState)}
        />
        <p>
          {locale==='en'?
          `I consent to the processing of personal data contained in this form in accordance with the Personal Data Protection Act in connection with sending an inquiry via the contact form.
           Providing data is voluntary, but necessary to process the inquiry.
           I have been informed that I have the right to access my data, the possibility of correcting it, and requesting the cessation of its processing.
           The administrator of personal data is M. Hoffmann, Lakenblekerstraat 24D, 1431GG Aalsmeer`
           :`Wyrażam zgodę na przetwarzanie danych osobowych zawartych w tym formluarzu zgodnie z ustawą o ochronie danych osobowych w związku z wysłaniem zapytania przez formularz kontaktowy. 
          Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. 
          Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwość ich poprawienia, żądania zaprzestania ich przetwarzania. 
          Administratorem danych osobowych jest M.Hoffmann, Lakenblekerstraat 24D, 1431GG Aalsmeer`}
          
        </p>
        
    </DisclaimerField>
  )
}

const DisclaimerField = styled.div<DisclaimerStyleProps>`
    width: 100%;
    max-width: 65rem;
    display: flex;
    align-items: center;
    margin: 1.4rem 0;
    padding: 1.4rem;
    border: 1px solid ${p=>p.selected?'forestgreen':p.theme.secondary};

    input{
      align-self: flex-start;
      margin: 1.4rem;
      border: 1px solid ${p=>p.theme.secondary};
    }

    p{
      font-size: 1.2rem;
      color: ${(p) => p.theme.grey3};
    }

`