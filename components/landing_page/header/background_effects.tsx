import {useState, useEffect} from 'react';
import styled from 'styled-components'
import { respond,} from '../../../styles'


interface VideoProps{
  width: string;
  height: string;
}

export default function BackgroundEffectsComponent() {

  const [width,setWidth] = useState('auto')
  const [height, setHeight] = useState('auto')

  useEffect(()=>{
    function adjustDimensions(){
      const height = `${window.innerHeight * 0.75}px`
      const width = `${window.innerWidth}px`
      setHeight(height)
      setWidth(width)
    }

    adjustDimensions()

    window.addEventListener('resize', adjustDimensions)

    return ()=>window.removeEventListener('resize', adjustDimensions)
  },[])

  return (
    <BackgroundEffects>
      <Gradients>
        <BackgroundVideo width={width} height={height}>
          <video loop muted autoPlay>
              <source
                  src="/videos/online_podatki_header.mp4"
                  type="video/mp4"
              />
          </video>
        </BackgroundVideo>
    </Gradients>
    </BackgroundEffects>
  )
}
const BackgroundEffects = styled.div`
  width: 100%;
  height:85vh;
  position: absolute;
  overflow:hidden;
  display: inline-block;
  z-index: -1;
`

const Gradients = styled.div`
    width: 100%;
    height: 75vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: inline-block;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(to bottom, rgba(70, 141, 204, .1) 10%, rgba(70, 141, 204, 0.6) );
        transform: rotate(3deg) scale(1.1);
        z-index: 0;
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(to bottom, rgba(70, 141, 204, .3) 10%, rgba(70, 141, 204, 0.6) );
        transform: rotate(1deg) scale(1.05);
        z-index: 0;
    }
    
`
const BackgroundVideo = styled.div<VideoProps>`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;


    video {
        position: absolute;
        bottom:0;
        left:0;
        min-width: ${p=>p.width};
        min-height: ${p=>p.height};
        z-index: 1;
      
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(to bottom,rgba(70, 141, 204, 1) 10%, rgba(70, 141, 204, .3) 50%, rgba(70, 141, 204, 0.3) );
        transform: rotate(-6deg) scale(1.15) translate(2rem, -4rem);
        z-index: 2;
    }
    
`;