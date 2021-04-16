import Header from '../../header'
import Intersection from '../../intersection'
import Service from '../../service'
import {RiMoneyEuroCircleLine} from 'react-icons/ri'

export default function TaxesComponent() {
  return (
    <>
      <Header 
        title='Rozliczenia podatków Holandia, Belgia, Niemcy i Polska' 
        body='Rozliczenia należnych zobowiązań podatkowych wobec Urzędów Skarbowych. Sprawdź czy należy Ci się zwrot podatku w Holandii, Belgii. Rozlicz się z podatku w Niemczech i Polsce.' 
        imageUrl='/img/header-taxes.jpg' 
      />
      <Intersection

        category=''
        title='Rozliczenia Podatków'
        body='Oferujemy pomoc w uregulowaniu bieżących i zaległych zobowiązań formalnych i podatkowych.'
        margin='0 auto 0 auto'
        icon={<RiMoneyEuroCircleLine/>}
      />

      <Service
        title='Rozliczenia podatków Holandia, Belgia, Niemcy i Polska' 
        body={`Rozliczenie podatku dochodowego przed  urzędem jeszcze kilka lat temu było prostsze i szybsze,
         wystarczyło posiadać dokumenty od pracodawcy. 
         Jednak w ostatnich latach urzędy skarbowe wprowadziły kilka zmian umożliwiających dokładniejszą analizę każdego złożonego wniosku. 
         Niestety konsekwencją tych zmian jest konieczność posiadania dodatkowych dokumentów oraz 
         w wielu przypadkach również dłuższy czas oczekiwania na wypłatę należnych podatnikowi środków.
         Dlatego my pomagamy w trudnych sytuacjach, reprezentujemy klientów w kontaktach z placówkami, doradzamy i służymy pomocą językową.`}
        features={[
          'Rozliczenia podatkowe Holdandia',
          'Rozliczenia podatkowe Belgia',
          'Rozliczenia podatkowe Niemcy',
          'Rozliczenia podatkowe Polska',
          'Rozliczenia podatkowe z partnerem',
          'Rozliczenia podatkowe z hipoteką',
        ]} 
        imageUrl='/img/image-taxes.jpg' 
      />
    </>
  )
}
