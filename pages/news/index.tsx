import Layout from '../../layouts/main'
import AllNews from '../../components/news_page'

export default function AllNewsPage({data}) {
  return (
    <Layout>
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