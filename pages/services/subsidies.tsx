import Layout from '../../layouts/main'
import Head from '../../components/seo'
import Subsidies from '../../components/services_pages/subsidies'

export default function SubsidiesPage() {
  return (
    <Layout>
      <Head title='Online Podatki - Subsydia i dotacje' description='Oferujemy pomoc w uzyskaniu należnych lub zwrocie nienależnie pobranych dodatków do ubezpieczenia zdrowotnego, mieszkania i innych'/>
      <Subsidies/>
    </Layout>
  )
}
