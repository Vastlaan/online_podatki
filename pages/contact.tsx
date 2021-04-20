import {useRouter} from 'next/router'
import Layout from '../layouts/main'
import Head from '../components/seo'
import Contact from '../components/contact_page'

export default function ContactPage() {

  const router = useRouter()
  const {locale} = router
  const title = locale==='en'?'Online Podatki - Contact':'Online Podatki - Kontakt'

  return (
    <Layout>
      <Head title={title} />
      <Contact/>
    </Layout>
  )
}
