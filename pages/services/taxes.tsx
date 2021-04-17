import Layout from '../../layouts/main'
import Head from '../../components/seo'
import Taxes from '../../components/services_pages/taxes'

export default function TaxesPage() {
  return (
    <Layout>
      <Head title='Online Podatki - Rozliczenia podatków Holandia, Belgia, Niemcy i Polska' description='Rozliczenia należnych zobowiązań podatkowych wobec Urzędów Skarbowych. Sprawdź czy należy Ci się zwrot podatku w Holandii, Belgii. Rozlicz się z podatku w Niemczech i Polsce.' />
      <Taxes/>
    </Layout>
  )
}
