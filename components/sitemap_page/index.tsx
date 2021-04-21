import {useRouter} from 'next/router'
import Link from 'next/link'
import Header from '../header'
import { SectionNarrow, List, Item} from '../../styles'
import Intersection from '../intersection'
import {FaSitemap} from 'react-icons/fa'

export default function SitemapComponent() {

  const router = useRouter()
  const {locale} = router
  const title = locale==='en'?"Sitemap":"Mapa Strony"
  const body = locale==='en'?"All links to the sectors of our webstie":"Linki do wszystkich sektorów naszej strony"
  return (
    <>
      <Header title={title} body={body}/>

      <Intersection category='' title={title} body={body} icon={<FaSitemap/>} />
      <SectionNarrow>
        <List margin='0 1.4rem 6.7rem 1.4rem'>
          <Link href='/'>
            <Item color='black' margin='1.4rem 0'>
              https://onlinepodatki.eu/
            </Item>
          </Link>
          
        
        
          <Link href='/services'>
            <Item color='black' margin='1.4rem 0'>
              https://onlinepodatki.eu/services
            </Item>
          </Link>
          
        
        
          <Link href='/services/taxes'>
            <Item color='black' margin='1.4rem 0'>
              https://onlinepodatki.eu/services/taxes
            </Item>
          </Link>
          
        
        
          <Link href='/services/benefits'>
            <Item color='black' margin='1.4rem 0'>
              https://onlinepodatki.eu/services/benefits
            </Item>
          </Link>
          
        
        
          <Link href='/services/subsidies'>
            <Item color='black' margin='1.4rem 0'>
              https://onlinepodatki.eu/services/subsidies
            </Item>
          </Link>
          
        
        
          <Link href='/services/administration'>
            <Item color='black' margin='1.4rem 0'>
              https://onlinepodatki.eu/services/administration
            </Item>
          </Link>
          
        
        
          <Link href='/services/other'>
            <Item color='black' margin='1.4rem 0'>
              https://onlinepodatki.eu/services/other
            </Item>
          </Link>
          
        
        
          <Link href='/news'>
            <Item color='black' margin='1.4rem 0'>
              https://onlinepodatki.eu/news
            </Item>
          </Link>
          
        
        
          <Link href='/downloads'>
            <Item color='black' margin='1.4rem 0'>
              https://onlinepodatki.eu/downloads
            </Item>
          </Link>
          
        
        
          <Link href='/contact'>
            <Item color='black' margin='1.4rem 0'>
              https://onlinepodatki.eu/contact
            </Item>
          </Link>

        </List>
      </SectionNarrow>
      
    </>
  )
}
