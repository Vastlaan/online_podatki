import styled from 'styled-components'
import {respond, SectionNarrow, Heading4, FlexCol} from '../../../styles'
import { ImFilePdf } from "react-icons/im";

export default function DocumentsComponent() {
  return (
    <SectionNarrow>
      <Documents>
        <Heading4 margin='0 0 2.7rem 1.4rem'>Zaświadczenia o dochodach</Heading4>
        <FlexCol align='flex-start'>
          <Anchor href='/documents/pl/zaswiadczenie_o_dochodach_2020.pdf'>
            <ImFilePdf/>
            Zaświadczenie o dochodach za rok 2020
          </Anchor>
          <Anchor href='/documents/pl/zaswiadczenie_o_dochodach_2019.pdf'>
            <ImFilePdf/>
            Zaświadczenie o dochodach za rok 2019
          </Anchor>
          <Anchor href='/documents/pl/zaswiadczenie_o_dochodach_2018.pdf'>
            <ImFilePdf/>
            Zaświadczenie o dochodach za rok 2018
          </Anchor>
          <Anchor href='/documents/pl/zaswiadczenie_o_dochodach_2017.pdf'>
            <ImFilePdf/>
            Zaświadczenie o dochodach za rok 2017
          </Anchor>
          <Anchor href='/documents/pl/zaswiadczenie_o_dochodach_2016.pdf'>
            <ImFilePdf/>
            Zaświadczenie o dochodach za rok 2016
          </Anchor>
        </FlexCol>

        <Heading4 margin='2.7rem 1.4rem'>Dokumenty UWV</Heading4>
        <FlexCol align='flex-start'>
          <Anchor href='/documents/uwv/aanvragen_formulier_e301_pools.pdf'>
            <ImFilePdf/>
            Aanvragen formulier (e301 pools)
          </Anchor>
          <Anchor href='/documents/uwv/uwv_ontslagbevestiging.pdf'>
            <ImFilePdf/>
            UWV Ontslagbevestiging
          </Anchor>
        </FlexCol>

        <Heading4 margin='2.7rem 1.4rem'>Pozostałe</Heading4>
        <FlexCol align='flex-start'>
          <Anchor href='/documents/nl/holandia_rozliczenie_podatku.pdf'>
            <ImFilePdf/>
            Holandia rozliczenie podatku
          </Anchor>
          <Anchor href='/documents/nl/klauzula_rodo.pdf'>
            <ImFilePdf/>
            Klauzula RODO
          </Anchor>
          <Anchor href='/documents/nl/upowaznienie.pdf'>
            <ImFilePdf/>
            Upoważnienie
          </Anchor>
         
        </FlexCol>
      </Documents>
    </SectionNarrow>
    
  )
}
const Documents = styled.div`
  margin: 4.7rem auto;
  width: 100%;
  padding: 1.4rem 2.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border: 1px solid rgba(0,0,0,.3);
`
const Anchor = styled.a`
  margin: 1.4rem 0;
  font-size: 1.6rem;
  color: ${p=>p.theme.grey3};
  transition: all .3s;
  display: flex;
  align-items: center;

  svg{
    font-size: 2.7rem;
    color: ${p=>p.theme.secondary};
    margin-right: 1.4rem;
  }

  &:hover{
    color: ${p=>p.theme.secondary} !important;
  }
`