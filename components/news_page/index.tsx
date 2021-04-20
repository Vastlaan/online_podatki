import {useRouter} from 'next/router'
import Header from '../header'
import Intersection from '../intersection'
import AllNews from './all_news'
import { AiOutlineRead } from "react-icons/ai";
import pl from '../../translations/pl/news_page'
import en from '../../translations/en/news_page'

export default function NewsComponent({data}) {

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

        category=''
        title={translations.intersection_title} 
        body={translations.intersection_body} 
        margin='0 auto 0 auto'
        icon={<AiOutlineRead/>}
      />

      <AllNews data={data}/>

    </>
  )
}
