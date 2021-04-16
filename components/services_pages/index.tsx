import Header from '../header'
import Intersection from '../intersection'
import AllServices from './all_services'
import {RiMoneyEuroCircleLine} from 'react-icons/ri'

export default function TaxesComponent() {
  return (
    <>
      <Header 
        title='Usługi Online Podatki' 
        body='Zapoznaj się z szerokim zakresem oferowanych usług' 
        imageUrl='/img/header-taxes.jpg' 
      />


      <AllServices/>
    </>
  )
}
