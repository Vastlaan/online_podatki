import Header from '../../header'
import Intersection from '../../intersection'
import Service from '../../service'
import {RiMoneyEuroCircleLine} from 'react-icons/ri'

export default function TaxesComponent() {
  return (
    <>
      <Header 
        title='Administracja firm' 
        body='Prowadzimy księgowość większości rodzajów firm obowiązujących na terenie Holandii, Belgii, Niemec i Polski.' 
        imageUrl='/img/header-administration.jpg' 
      />
      <Intersection

        category=''
        title='Księgowość firm'
        body='Nasza wiedza w zakresie płac obejmuje: deklaracje VAT, roczny balans firmy, rachunek zysków i strat, wypełnianie formularzy i inne niezbędne czynności.'
        margin='0 auto 0 auto'
        icon={<RiMoneyEuroCircleLine/>}
      />

      <Service
        title='Księgowość, doradztwo i wsparcie dla przedsiębiorców' 
        body={`Pomagamy przedsiębiorcom w prowadzeniu działalności. Wspieramy ich 
        zarówno profesjonalnymi poradami w zakresie prowadzenia działalności , jak i nowymi kontaktami.
        Pomagamy w problemach prawnych, które może napotkać każda firma. Pomagamy w zarejestrowaniu 
        nowej działalności oraz w otwarciu rachunku firmowego oraz w tłumaczeniach związanych z działalnością firmy.
        
        `}
        features={[
          'Administracja dla jednoosobowych firm',
          'Aministracja VOF',
        ]} 
        imageUrl='/img/image-administration.jpg' 
      />
    </>
  )
}
