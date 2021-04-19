import {useRouter} from 'next/router'
import Header from '../header'
import Intersection from '../intersection'
import Details from './details'
import Form from './form'
import Map from './map'
import {IoIosContacts} from 'react-icons/io'
import {FaCar} from 'react-icons/fa'
import en from '../../translations/en/contact_page'
import pl from '../../translations/pl/contact_page'

export default function ContactPage() {

  const router = useRouter()
  const {locale } = router
  const translations = locale==='en'?en:pl

  return (
    <>
      <Header 
        title={translations.header_title}
        body={translations.header_body}
        imageUrl='/img/header-contact.jpg'
      />

      <Intersection

        category={translations.intersection1_category}
        title={translations.intersection1_title}
        body={translations.intersection1_body}
        margin='0 auto 0 auto'
        icon={<IoIosContacts/>}
      />

      <Details/>

      <Form/>

      <Intersection

        category={translations.intersection2_category}
        title={translations.intersection2_title}
        body={translations.intersection2_body}
        margin='0 auto 0 auto'
        icon={<FaCar/>}
      />

      <Map />

    </>
  )
}
