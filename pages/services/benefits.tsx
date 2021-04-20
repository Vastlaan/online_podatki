import {useRouter} from 'next/router'
import Layout from '../../layouts/main'
import Head from '../../components/seo'
import Benefits from '../../components/services_pages/benefits'

export default function BenefitsPage() {

  const router = useRouter()
  const {locale} = router
  const title = locale==='en'?'Online Podatki - Socila Benefits':'Online Podatki - Zasiłki Socjalne'
  const description = locale==='en'?'We help in obtaining the highest possible benefits, we represent clients in contacts with institutions, we advise and provide linguistic assistance.':'Pomagamy w uzyskaniu jak największych świadczeń, reprezentujemy klientów w kontaktach z placówkami, doradzamy i służymy pomocą językową.'

  return (
    <Layout>
      <Head title={title} description={description} />
      <Benefits/>
    </Layout>
  )
}
