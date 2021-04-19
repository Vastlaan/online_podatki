import styled from 'styled-components'
import BackgroundEffects from './background_effects'
import Main from './main'
import Side from './side'
import { respond, ContainerNarrow, MainGrid } from '../../../styles'

export default function HeaderComponent() {

  return (
     <Header>

       <BackgroundEffects/>
       
       <Container>
         <ContainerNarrow>
            <MainGrid>
              
              <Main/>
              <Side/>
              
            </MainGrid>
         </ContainerNarrow>
        </Container>
    </Header>
  )
}

const Header = styled.header`
  width: 100%;
  min-height: 95vh;
  overflow:hidden;
  display: inline-block;
  position: relative;

  ${()=>respond('xxl','min-height: 75vh;')}
`

const Container = styled.div`
  width: 100%;
  z-index: 10;
  padding: 13rem 0 2.7rem 0;
  background-image: linear-gradient(to bottom, rgba(70, 141, 204, .1), rgba(70, 141, 204, 1) 80%);

  ${()=>respond('m','background-image: none;')}
`





