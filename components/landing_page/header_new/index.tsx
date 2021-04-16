import styled from 'styled-components'
import BackgroundEffects from './background_effects'
import Main from './main'
import Side from './side/alternative'
import { respond, ContainerNarrow, } from '../../../styles'

export default function HeaderComponent() {


  return (
     <Header>

       <BackgroundEffects/>
       
       <Container>
         <ContainerNarrow>
            <MainContainer>
              
              <Main/>
              <Side/>
              
            </MainContainer>
         </ContainerNarrow>
        </Container>
    </Header>
  )
}

const Header = styled.header`
  width: 100%;
  min-height: 85vh;
  overflow:hidden;
  display: inline-block;
  position: relative;
`

const Container = styled.div`
  width: 100%;
  z-index: 10;
  padding: 13rem 0 6.7rem 0;
  //background-image: linear-gradient(to bottom, rgba(70, 141, 204, .1), rgba(70, 141, 204, 1) 50%);
  //background-image: linear-gradient(20deg, rgba(70, 141, 204, 1)10%, rgba(70, 141, 204, .9) 11%,rgba(70, 141, 204, .8) 19%, rgba(70, 141, 204, .7) 20%, rgba(70, 141, 204, .7) 29%, rgba(70, 141, 204, .6) 30%, rgba(70, 141, 204, 0.1) );

  ${()=>respond('m','background-image: none;')}
`

const MainContainer = styled.div`
  padding: 1.4rem;

  ${()=>respond('m','position: relative;padding: 2.7rem;')}
`





