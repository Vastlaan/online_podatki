import {useRouter} from 'next/router'
import Header from '../header'
import Intersection from '../intersection'
import Documents from './documents'
import {FaDownload} from 'react-icons/fa'
import pl from '../../translations/pl/download_page'
import en from '../../translations/en/download_page'

export default function Downloads() {

  const router = useRouter()
  const {locale} = router
  const translations = locale==='en'?en:pl

  return (
    <>
      <Header 
        title={translations.header_title}
        body={translations.header_body}
        imageUrl='/img/header-downloads.jpg'
      />

      <Intersection

        category={translations.intersection_category}
        title={translations.intersection_title}
        body={translations.intersection_body}
        margin='0 auto 0 auto'
        icon={<FaDownload/>}
      />

      <Documents />
    </>
  )
}
