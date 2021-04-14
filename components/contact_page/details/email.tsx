import {FlexCol, ContactBox, Icon, Anchor, Text3} from '../../../styles'
import {MdEmail} from 'react-icons/md'

export default function PhoneComponent() {
  return (
    <ContactBox>      
      <Icon>
        <MdEmail/>
      </Icon>
      <FlexCol margin='1.4rem 0'>
        <Text3>Wyślij <span>E-mail</span></Text3>
        <Anchor href="mailto:info@onlinepodatki.eu">
            <Text3>info@onlinepodatki.eu</Text3>
        </Anchor>
      </FlexCol>
    </ContactBox>
  )
}