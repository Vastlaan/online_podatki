import {useRouter} from 'next/router'
import Header from './header'
import Intersection from '../intersection'
import Parallax from '../parallax'
import Boxes from './boxes'
import Flyers from './flyers'
import Packages from './packages'
import {RiMoneyEuroCircleLine} from 'react-icons/ri'
import {FaHandsHelping} from 'react-icons/fa'
import { AiOutlineRead } from "react-icons/ai";
import en from '../../translations/en/landing_page'
import pl from '../../translations/pl/landing_page'

export default function LandingPage({data}){

  const router = useRouter()

  const {locale } = router

  const translations = locale==='en'?en:pl

  return (
    <>
      <Header />

      <Intersection

        category={translations.intersection1_category}
        title={translations.intersection1_title}
        body={translations.intersection1_body}
        margin='0 auto 6.7rem auto'
        icon={<RiMoneyEuroCircleLine/>}
        link='/services'
      />

      <Packages />

      <Intersection
        category={translations.intersection2_category}
        title={translations.intersection2_title}
        body={translations.intersection2_body}
        margin='0 auto'
        icon={<AiOutlineRead/>}
      />

      <Flyers data={data} />

      <Boxes/>

      <Parallax
        title={translations.paralax_title}
        body={translations.paralax_body}
        btn={translations.paralax_btn}
        link='/services'
      />

      <Intersection

        category={translations.intersection3_category}
        title={translations.intersection3_title}
        body={translations.intersection3_body}
        margin='0 auto 6.7rem auto'
        icon={<FaHandsHelping/>}
        link='/services/benefits'
      />   
     
    </>
    
  )
}


