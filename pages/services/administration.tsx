import {useRouter} from 'next/router'
import Layout from '../../layouts/main'
import Head from '../../components/seo'
import Administration from '../../components/services_pages/administration'

export default function AdministrationPage() {

  const router = useRouter()
  const {locale} = router
  const title = locale==='en'?'Online Podatki - Business administration':'Online Podatki - Administracja firm'
  const description = locale==='en'?'We provide accounting for most types of companies in the Netherlands, Belgium, Germany and Poland.':'Prowadzimy księgowość większości rodzajów firm obowiązujących na terenie Holandii, Belgii, Niemec i Polski.'
  return (
    <Layout>
      <Head title={title} description={description} />
      <Administration/>
    </Layout>
  )
}
