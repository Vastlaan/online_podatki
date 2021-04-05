import CookiesStatement from '../components/modals/cookie_statement'

export default function MainLayoutComponent({children}) {
  return (
    <>
      <CookiesStatement/>
      {children}
    </>
  )
}
