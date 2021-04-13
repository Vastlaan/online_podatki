import Link from 'next/link'
import { HeadingHuge, BilboardContainer, Text, ButtonPrimary } from "../../styles";

interface ParallaxProps{
  title?: string;
  body?: string;
  btn?: string;
}

export default function ParallaxBackground({ title, body, btn }: ParallaxProps) {
    return (
        <BilboardContainer>
            <HeadingHuge>
                {title
                    .split(" ")
                    .map((word, i) =>
                        i === 1 ? <span key={i}>{word} </span> : word + " "
                    )}
            </HeadingHuge>
            <Text wide='65rem' align="center" margin='2.7rem 0' color='white'>
                {body}
            </Text>
            <Link href='/'>
                  <ButtonPrimary>{btn}</ButtonPrimary>
            </Link>
        </BilboardContainer>
    );
}
