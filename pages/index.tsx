import Layout from '../layouts/main'
import Head from '../components/seo'
import Landing from '../components/landing_page'

export default function LandingPage({data}){
  return <Layout>
    <Head />
    <Landing data={data}/>
  </Layout> 
}
export async function getServerSideProps(ctx) {
    const res = await fetch("https://api.itcontext.nl/online-podatki-articles?_sort=id:DESC");
    const data = await res.json();
    return {
        props: { data },
    };
}