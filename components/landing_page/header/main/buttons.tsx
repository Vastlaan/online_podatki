import Link from 'next/link'
import {FlexRow, ButtonPrimary, ButtonSecondary} from '../../../../styles'

interface ButtonProps{
  btn1?: string;
  btn2?: string;
}
export default function ButtonsComponent({btn1, btn2}:ButtonProps) {
  return (
    <FlexRow margin='2.7rem 0'>
      <Link href='/services'>
        <ButtonPrimary margin='0 1.4rem 0 0'>{btn1}</ButtonPrimary>
      </Link>
      <Link href='/contact'>
        <ButtonSecondary>{btn2}</ButtonSecondary>
      </Link>
    </FlexRow>
  )
}
