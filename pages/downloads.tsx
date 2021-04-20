import Layout from '../layouts/main'
import {useRouter} from 'next/router'
import Head from '../components/seo'
import Downloads from '../components/downloads_page'
import en from '../translations/en/head'
import pl from '../translations/pl/head'

export default function DownloadsPage() {

  const router = useRouter()
  const {locale} = router
  const translations = locale==='en'?en:pl


  return (
    <Layout>
      <Head title={translations.title_downloads} description={translations.description_downloads} />
      <Downloads/>
    </Layout>
  )
}

