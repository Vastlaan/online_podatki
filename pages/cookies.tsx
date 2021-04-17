import Layout from '../layouts/main'
import Head from '../components/seo'
import Cookies from '../components/cookies_page'

export default function CookiesPage() {
  return (
    <Layout>
      <Head robots='noindex, nofollow'/>
      <Cookies/>
    </Layout>
  )
}
