import {useRouter} from 'next/router'
import Layout from '../../layouts/main'
import Head from '../../components/seo'
import Others from '../../components/services_pages/others'

export default function OthersPage() {

  const router = useRouter()
  const {locale} = router
  const title = locale==='en'?'Online Podatki - Other services':'Online Podatki - Usługi pozostałe'


  return (
    <Layout>
      <Head title={title} />
      <Others/>
    </Layout>
  )
}
