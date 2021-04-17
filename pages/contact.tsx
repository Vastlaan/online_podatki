import Layout from '../layouts/main'
import Head from '../components/seo'
import Contact from '../components/contact_page'

export default function ContactPage() {
  return (
    <Layout>
      <Head title='Online Podatki - kontakt' />
      <Contact/>
    </Layout>
  )
}
