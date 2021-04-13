import Link from 'next/link'
import {FlexRow, ButtonPrimary, ButtonSecondary} from '../../../../styles'

export default function ButtonsComponent() {
  return (
    <FlexRow margin='2.7rem 0'>
      <Link href='/'>
        <ButtonPrimary margin='0 1.4rem 0 0'>Usługi</ButtonPrimary>
      </Link>
      <Link href='/'>
        <ButtonSecondary>Kontakt</ButtonSecondary>
      </Link>
    </FlexRow>
  )
}
