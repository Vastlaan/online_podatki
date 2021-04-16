import { List, ListItem,} from '../../../../styles'
import {IoMdCheckmark} from 'react-icons/io'

export default function ListComponent() {
  return (
    <List margin='2.7rem 0'>
      <ListItem margin='.6rem 0'>
        <IoMdCheckmark/>
        Geen kleine lettertjes
      </ListItem>
      <ListItem margin='.6rem 0'>
        <IoMdCheckmark/>
        Zonder opzegtermijn
      </ListItem>
      <ListItem margin='.6rem 0'>
        <IoMdCheckmark/>
        Eenvoudig, snel en kundig
      </ListItem>
    </List>
  )
}
