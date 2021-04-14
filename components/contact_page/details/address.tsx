import {FlexCol, ContactBox, Icon, Text3} from '../../../styles'
import {RiMapPinFill} from 'react-icons/ri'

export default function AddressComponent() {
  return (
    <ContactBox>
      <Icon>
        <RiMapPinFill/>
      </Icon>
      <FlexCol margin='1.4rem 0'>
        <Text3>Lakenblekerstraat 24</Text3>
        <Text3>1431GG <span>Aalsmeer</span></Text3>
    </FlexCol>
  </ContactBox>
  )
}
