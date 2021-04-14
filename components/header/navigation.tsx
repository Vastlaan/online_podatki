import styled from 'styled-components'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {BsChevronRight} from 'react-icons/bs'

export default function NavigationComponent() {

  const router = useRouter()

  const pathArray = router.asPath.split('/')

  return (
    <Navigatie>
        {pathArray.map((path,i)=>{
            if(i===0){
                return(
                    <Link href='/' key={i}>
                        <Path>home</Path>
                    </Link>
                )
            }else{
                return(
                    <Link href={`/${path}`} key={i}>
                        <Path><BsChevronRight/>{path}</Path>
                    </Link>
                )
            }
        })}
    </Navigatie>
  )
}
const Navigatie = styled.div`
    align-self: flex-start;
    display: flex;
`
const Path = styled.p`
    font-size: 1.6rem;
    color: white;
    transition: all .3s;
    text-decoration: underline;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    margin: .9rem 0;
    cursor: pointer;

    &:hover{
      color: ${p=>p.theme.secondaryLight};
    }

    svg{
      font-size: 2.2rem;
      color: ${p=>p.theme.secondaryLight};
      margin-right: .4rem;
    }
`