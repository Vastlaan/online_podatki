import Header from '../header'
import Intersection from '../intersection'
import Details from './details'
import Form from './form'
import Map from './map'
import {IoIosContacts} from 'react-icons/io'
import {FaCar} from 'react-icons/fa'

export default function ContactPage() {
  return (
    <>
      <Header 
        title='W czym możemy pomóc?'
        body='Masz pytanie? Skontaktuj się z nami!'
        imageUrl='/img/header-contact.jpg'
      />

      <Intersection

        category=''
        title='Kontakt'
        body='Masz do nas pytanie? Skorzystaj z poniższych danych kontaktowych i nawiąż kontakt z jednym z naszych pracowników. '
        margin='0 auto 0 auto'
        icon={<IoIosContacts/>}
      />

      <Details/>

      <Form/>

      <Intersection

        category=''
        title='Odwiedź nasze biuro'
        body='Sprawdź na mapie poniżej, jak do nas dojechać i nie wahaj się, przyjedź już dziś!'
        margin='0 auto 0 auto'
        icon={<FaCar/>}
      />

      <Map />

    </>
  )
}
