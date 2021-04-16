import Header from '../../header'
import Intersection from '../../intersection'
import Service from '../../service'
import {RiMoneyEuroCircleLine} from 'react-icons/ri'

export default function TaxesComponent() {
  return (
    <>
      <Header 
        title='Pozostałe usługi' 
        body=' Oferujemy szeroki wahlarz usług w załatwianiu codziennych spraw.' 
        imageUrl='/img/header-benefits.jpg' 
      />
      <Intersection

        category=''
        title='Pomoc w meldunku i ubezpieczenie'
        body='Online Podatki pomaga w załatwianiu spraw związanych z życiem w Holandii, Belgii, Niemczech i Polsce.'
        margin='0 auto 0 auto'
        icon={<RiMoneyEuroCircleLine/>}
      />

      <Service
        title='Numer BSN, meldunek, DigiD w Holandii' 
        body={`Aby rozpocząć życie w Holandii dobrze jest zadbać o sprawy podstawowe, takie jak zameldowanie czy numer BSN. 
        Online Podatki pomaga w załatwianiu spraw związanych z życiem w Holandii, Belgii, Niemczech i Polsce. 
        Oferujemy szeroki wahlarz usług w załatwianiu codziennych spraw.`}
        features={[
          'Pomoc w meldunku',
          'Złożenie wniosku o ubezpieczenie zdrowotne',
          'Złożenie wniosku o ubezpieczenie auta',
          'Zapisywanie na mieszkania socjalne',
          'Umawaianie spotkań i pomoc na wyrobieniu numeru BSN',
          'Pomoc na wyrobieniu DigiD',
          'Rejestracja auta na polskich tablicach',
          'Pomoc w zajerestrowaniu auta kupionego w Holandii',
          'Wystąpienie o formularze E301, E106, IB60'
        ]} 
        imageUrl='/img/header-taxes.jpg' 
      />
    </>
  )
}
