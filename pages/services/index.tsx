import Layout from '../../layouts/main'
import Head from '../../components/seo'
import AllServices from '../../components/services_pages'

export default function AllServicesPage() {
  return (
    <Layout>
      <Head title='Online Podatki - Usługi' />
      <AllServices/>
    </Layout>
  )
}