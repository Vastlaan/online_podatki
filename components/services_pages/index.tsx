import {useRouter} from 'next/router'
import Header from '../header'
import AllServices from './all_services'
import pl from '../../translations/pl/services_page'
import en from '../../translations/en/services_page'

export default function TaxesComponent() {

  const router = useRouter()
  const {locale} = router
  const translations = locale==='en'?en:pl

  return (
    <>
      <Header 
        title={translations.header_title} 
        body={translations.header_body}
        imageUrl='/img/header-taxes.jpg' 
      />


      <AllServices/>
    </>
  )
}
