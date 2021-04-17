import Layout from '../../layouts/main'
import Head from '../../components/seo'
import Benefits from '../../components/services_pages/benefits'

export default function BenefitsPage() {
  return (
    <Layout>
      <Head title='Online Podatki - Zasiłki Socjalne' description='Pomagamy w uzyskaniu jak największych świadczeń, reprezentujemy klientów w kontaktach z placówkami, doradzamy i służymy pomocą językową.' />
      <Benefits/>
    </Layout>
  )
}
