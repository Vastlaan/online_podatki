import {useRouter} from 'next/router'
import Layout from '../../layouts/main'
import Head from '../../components/seo'
import AllServices from '../../components/services_pages'

export default function AllServicesPage() {

  const router = useRouter()
  const {locale} = router
  const title = locale==='en'?'Online Podatki - Services':'Online Podatki - Usługi'

  return (
    <Layout>
      <Head title={title} />
      <AllServices/>
    </Layout>
  )
}