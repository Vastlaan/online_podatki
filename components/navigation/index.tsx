import styled from 'styled-components'
import Info from './info'
import Links from './links'


export default function NavigationComponent() {
  return (
    <Navigation>
      <Info/>
      <Links/>
    </Navigation>
  )
}

const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  z-index: 99;
  

`
