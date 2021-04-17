import Layout from '../layouts/main'
import Head from '../components/seo'
import Downloads from '../components/downloads_page'

export default function DownloadsPage() {
  return (
    <Layout>
      <Head title='Online Podatki - dokumenty i formularze do pobrania' description='Tutaj znajdziesz najważniejsze formularze do pobrania w formacie pdf' />
      <Downloads/>
    </Layout>
  )
}

