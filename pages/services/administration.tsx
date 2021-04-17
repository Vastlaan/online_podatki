import Layout from '../../layouts/main'
import Head from '../../components/seo'
import Administration from '../../components/services_pages/administration'

export default function AdministrationPage() {
  return (
    <Layout>
      <Head title='Online Podatki - Administracja firm' description='Prowadzimy księgowość większości rodzajów firm obowiązujących na terenie Holandii, Belgii, Niemec i Polski.' />
      <Administration/>
    </Layout>
  )
}
