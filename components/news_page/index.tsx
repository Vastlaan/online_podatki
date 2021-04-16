import Header from '../header'
import Intersection from '../intersection'
import AllNews from './all_news'
import { AiOutlineRead } from "react-icons/ai";

export default function NewsComponent({data}) {
  return (
    <>
      <Header 
        title='Aktualności' 
        body='Ważne informacje na akutalne tematy związane księgowością i administracją' 
        imageUrl='/img/header-taxes.jpg' 
      />
      <Intersection

        category=''
        title='Informacje'
        body='Na naszej stronie znajdziesz przydatne informacje dotyczące życia w Holandii, Belgii, Niemczech i Polsce. Zapraszamy do lektury.'
        margin='0 auto 0 auto'
        icon={<AiOutlineRead/>}
      />

      <AllNews data={data}/>

    </>
  )
}
