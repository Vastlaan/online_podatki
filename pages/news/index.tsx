import {useRouter} from 'next/router'
import Layout from '../../layouts/main'
import Head from '../../components/seo'
import AllNews from '../../components/news_page'

export default function AllNewsPage({data}) {

  const router = useRouter()
  const {locale} = router
  const title = locale==='en'?'Online Podatki - Tax news':'Online Podatki - Aktualności Podatkowe'

  return (
    <Layout>
      <Head title={title} />
      <AllNews data={data}/>
    </Layout>
  )
}
export async function getServerSideProps(ctx) {
    const res = await fetch("https://api.itcontext.nl/online-podatki-articles?_sort=id:DESC");
    const data = await res.json();
    return {
        props: { data },
    };
}