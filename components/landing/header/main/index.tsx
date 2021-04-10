import {useEffect, useState} from 'react'
import { Heading1, Text, FlexCol, Line,} from '../../../../styles'
import List from './list'
import Buttons from './buttons'
import {checkViewportWidth} from '../../../../styles/utils'

export default function MainComponent() {

  const [responsiveAlligment, setResponsiveAlligment] = useState("left")
  const [responsiveFlexAlligment, setResponsiveFlexAlligment] = useState("flex-start")

  useEffect(()=>{

    function adjustStyle(){
       checkViewportWidth(539)?setResponsiveAlligment("center"):setResponsiveAlligment("left")
       return checkViewportWidth(539)?setResponsiveFlexAlligment("center"):setResponsiveFlexAlligment("flex-start")
    }
    adjustStyle()
    window.addEventListener('resize', adjustStyle)

    return ()=>window.removeEventListener('resize', adjustStyle)
  },[])

  return (
    <FlexCol align={responsiveFlexAlligment} padding='0 1.4rem'>

      <Heading1 wide='45rem' align={responsiveAlligment}>
        Boekhouder voor de regio <span>Noord-Holland</span> 
      </Heading1>

      <Line/>
      
      <Text align={responsiveAlligment} wide='45rem' margin=' 2.7rem 0 0 0'>
        Jij levert de bonnetjes en facturen aan, wij regelen jouw complete administratie online. Wij zijn het boekhoudkantoor in Alsmere. 
        Wij voeren de administratie van de zzp’er en iedere andere ondernemer. 
      </Text>
      
      <List/>

      <Buttons/>
      
    </FlexCol>
  )
}
