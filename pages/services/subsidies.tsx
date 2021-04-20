import {useRouter} from 'next/router'
import Layout from '../../layouts/main'
import Head from '../../components/seo'
import Subsidies from '../../components/services_pages/subsidies'

export default function SubsidiesPage() {
  const router = useRouter()
  const {locale} = router
  const title = locale==='en'?'Online Podatki - Financial co-founding':'Online Podatki - Subsydia i dotacje'
  const description = locale==='en'?'We offer assistance in obtaining due or reimbursement of unduly received supplements to health insurance, housing and others':'Oferujemy pomoc w uzyskaniu należnych lub zwrocie nienależnie pobranych dodatków do ubezpieczenia zdrowotnego, mieszkania i innych'

  return (
    <Layout>
      <Head title={title} description={description}/>
      <Subsidies/>
    </Layout>
  )
}
