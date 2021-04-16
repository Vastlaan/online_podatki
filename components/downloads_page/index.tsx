import Header from '../header'
import Intersection from '../intersection'
import Documents from './documents'
import {FaDownload} from 'react-icons/fa'

export default function Downloads() {
  return (
    <>
      <Header 
        title='Formularze, dokumenty'
        body='Tutaj znajdziesz najważniejsze formularze do pobrania w formacie pdf'
        imageUrl='/img/header-downloads.jpg'
      />

      <Intersection

        category=''
        title='Dokumenty do pobrania'
        body='Tutaj znajdziesz aktualne formularze i ważne dokumenty w wersji gotowej do druku.'
        margin='0 auto 0 auto'
        icon={<FaDownload/>}
      />

      <Documents />
    </>
  )
}
