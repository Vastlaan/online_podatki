import Header from './header'
import Intersection from '../intersection'
import Boxes from './boxes'
import Services from './services'
import Packages from './packages'

export default function LandingPage(){
  return (
    <>

      <Header/>

      <Boxes/>

      <Intersection
        category='salarisadministratie'
        body='Heb je een salarisadministratie voor je bedrijf in de regio Noord Holland, dan kunnen wij als boekhouder dit ook voor je doen.'
        link=''
        title='Salarisadministratie voor je bedrijf'
      />

      <Services />

      <Intersection
        category='administratiekantoor'
        body='Besteed je je boekhouding uit bij ons administratiekantoor in Amsterdam, dan ben je weer baas over je eigen cijfers. We zorgen dat je aan alle wettelijke regels voldoet. We geven jou meer inzicht in jouw bedrijfsresultaten.'
        link=''
        title='Meer inzicht in jouw bedrijfsresultaten'
      />

      <Packages />

    </>
    
  )
}


