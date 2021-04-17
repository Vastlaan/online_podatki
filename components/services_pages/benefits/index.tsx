import Header from '../../header'
import Intersection from '../../intersection'
import Service from '../../service'
import {RiMoneyEuroCircleLine} from 'react-icons/ri'

export default function TaxesComponent() {
  return (
    <>
      <Header 
        title='Zasiłki Socjalne' 
        body='Pomagamy w uzyskaniu jak największych świadczeń, reprezentujemy klientów w kontaktach z placówkami, doradzamy i służymy pomocą językową.' 
        imageUrl='/img/header-benefits.jpg' 
      />
      <Intersection

        category=''
        title='Pomoc finansowa'
        body='Dzięki naszej kompetencji możesz uzykać większe świadczenia socjalne w przypadku choroby bezrobocia lub braku dochodów'
        margin='0 auto 0 auto'
        icon={<RiMoneyEuroCircleLine/>}
      />

      <Service
        title='Zasiłki socjalne' 
        body={`Każdy Polak, który jest zatrudniony i mieszka legalnie w Holandii przez okres powyżej 3 miesięcy,
         nabywa prawa do wnioskowania o dodatki socjalne, natomiast po 5 latach mieszkania w kraju nabywa wszelkie prawa do występowania
        o dodatki przewidziane przez państwo, na równi z rodowitymi Holendrami. Holandia bardzo dba o swoich obywateli,
        oferuje szeroki zakres dofinansowań socjalnych dla bezrobotnych, kobiet w ciąży, zasiłków rodzinnych,
        dodatków dla kobiet przebywających na urlopach macierzyńskich, zasiłków na dzieci, a także ulg dla osób, które ponoszą koszty ubezpieczenia zdrowotnego.
        Pomagamy w uzyskaniu świadczeń IOAW, IOAZ, AOW, Anw, Wajong, WW, WIA, WAO, ZW i TW`}
        features={[
          'Zasiłek dla bezrobotnych (również dla niezameldowanych)',
          'Zasiłek macierzyński (również dla niezameldowanych)',
          'Zasiłek rodzinny (również dla niezameldowanych)',
          'Zasiłek chorobowy',
          'Pomoc w załatwianiu dodatku do utraconych godzin',
          'Transfer zasiłku'
        ]} 
        imageUrl='/img/image-benefits.jpg' 
      />
    </>
  )
}
