import Header from './header'
import Intersection from '../intersection'
import Parallax from '../parallax'
import Boxes from './boxes'
import Services from './services'
import Packages from './packages'
import {RiMoneyEuroCircleLine} from 'react-icons/ri'
import {FaHandsHelping} from 'react-icons/fa'

export default function LandingPage(){
  return (
    <>
      <Header />

      <Intersection

        category='księgowość'
        title='Nowoczesna księgowość w Holandii, Belgii, Niemczech i Polsce'
        body='Interesuje Cię tanie biuro rachunkowe? Nie mogłeś lepiej trafić! Z nami unikniesz wielu zbędnych kosztów, nie obniżając przy tym poziomu własnego profesjonalizmu.'
        margin='0 auto 6.7rem auto'
        icon={<RiMoneyEuroCircleLine/>}
        link='/services'
      />

      <Packages />

      <Boxes/>

      <Parallax
        title='Księgowość Holandia – usługi dla firm'
        body='Oferujemy Państwu kompleksową obsługę z zakresu księgowości, administracji, finansów oraz wszystkich spraw gospodarczych w Holandii.'
        btn='Aktualności'
        link='/news'
      />

      <Intersection

        category='świadczenia'
        title='Zasiłki i świadczenia socjalne w Holandii, Belgii, Niemczech i Polsce'
        body='Zastanawiasz się, jakie warunki jako wnioskodawca musisz spełnić, aby Twój wniosek o świadczenie w Holandii został rozpatrzony pozytywnie? Skontaktuj się z nami, pomożemy Ci uzyskać jak największe świadczenia.'
        margin='0 auto 6.7rem auto'
        icon={<FaHandsHelping/>}
        link='/services/benefits'
      />   
     
    </>
    
  )
}


