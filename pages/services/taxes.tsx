import {useRouter} from 'next/router'
import Layout from '../../layouts/main'
import Head from '../../components/seo'
import Taxes from '../../components/services_pages/taxes'

export default function TaxesPage() {
   
  const router = useRouter()
  const {locale} = router
  const title = locale==='en'?'Online Podatki - Tax settlements from Netherlands, Belgium, Germany and Poland':'Online Podatki - Rozliczenia podatków Holandia, Belgia, Niemcy i Polska'
  const description = locale==='en'?'Settlement of tax liabilities due to Tax Offices. Check if you are due a tax refund in the Netherlands, Belgium. Settle tax in Germany and Poland.':'Rozliczenia należnych zobowiązań podatkowych wobec Urzędów Skarbowych. Sprawdź czy należy Ci się zwrot podatku w Holandii, Belgii. Rozlicz się z podatku w Niemczech i Polsce.'

  return (
    <Layout>
      <Head title={title} description={description} />
      <Taxes/>
    </Layout>
  )
}
