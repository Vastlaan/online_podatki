import {Dispatch, SetStateAction} from 'react'
import styled from 'styled-components'


interface DisclaimerProps{
  disclaimer: boolean;
  setDisclaimer:  Dispatch<SetStateAction<boolean>>

}
interface DisclaimerStyleProps{
  selected?: boolean
}

export default function DisclaimerComponent({disclaimer, setDisclaimer}:DisclaimerProps) {
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
          Wyrażam zgodę na przetwarzanie danych osobowych zawartych w tym formluarzu zgodnie z ustawą o ochronie danych osobowych w związku z wysłaniem zapytania przez formularz kontaktowy. 
          Podanie danych jest dobrowolne, ale niezbędne do przetworzenia zapytania. 
          Zostałem poinformowany, że przysługuje mi prawo dostępu do swoich danych, możliwość ich poprawienia, żądania zaprzestania ich przetwarzania. 
          Administratorem danych osobowych jest M.Hoffmann, Lakenblekerstraat 24D, 1431GG Aalsmeer
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