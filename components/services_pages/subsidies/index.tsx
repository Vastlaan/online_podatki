import Header from '../../header'
import Intersection from '../../intersection'
import Service from '../../service'
import {RiMoneyEuroCircleLine} from 'react-icons/ri'

export default function TaxesComponent() {
  return (
    <>
      <Header 
        title='Dofinansowania' 
        body='Oferujemy pomoc w uzyskaniu należnych lub zwrocie nienależnie pobranych dodatków do ubezpieczenia zdrowotnego, mieszkania i innych' 
        imageUrl='/img/header-subsidies.jpg' 
      />
      <Intersection
        category=''
        title='Subsydia'
        body='Jak co roku zmieniają się kryteria i progi przydzielania dofinansowań do ubezpieczenia zdrowotnego, mieszkania czy na dzieci. Z nami uzyskasz to, co ci się należy.'
        margin='0 auto 0 auto'
        icon={<RiMoneyEuroCircleLine/>}
      />

      <Service
        title='Dotacje, subsydia, dofinansowania' 
        body={`Rząd królestwa Niderlandów przyczynia się do redukcji kosztów związanych z ubezpieczeniem zdrowotnym,szczególnie dla osób które najbardziej tego potrzebują. 
        Prawo do dofinansowania mają osoby, które ukończyły 18 lat i opłacają ubezpieczenie zdrowotne. Pomagamy w uzyskaniu jak największych świadczeń, reprezentujemy klientów w kontaktach z placówkami, doradzamy i służymy pomocą językową.`}
        features={[
          'Dofinansowania do ubezpieczenia',
          'Dofinansowania do mieszkania',
          'Dofinansowania do zasiłku rodzinnego',
          'Dofinansowania do żłobka',
          'Zmiany w dofinansowaniach'
        ]} 
        imageUrl='/img/image-subsidies.jpg' 
      />
    </>
  )
}
