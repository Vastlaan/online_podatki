import {useRouter} from 'next/router'
import Header from '../../header'
import Intersection from '../../intersection'
import Service from '../../service'
import {RiMoneyEuroCircleLine} from 'react-icons/ri'
import pl from '../../../translations/pl/services_page/taxes'
import en from '../../../translations/en/services_page/taxes'

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
      <Intersection

        category={translations.intersection_category} 
        title={translations.intersection_title} 
        body={translations.intersection_body}
        margin='0 auto 0 auto'
        icon={<RiMoneyEuroCircleLine/>}
      />

      <Service
        title={translations.services_title}  
        body={translations.services_body} 
        features={translations.service_features} 
        imageUrl='/img/image-taxes.jpg' 
      />
    </>
  )
}
