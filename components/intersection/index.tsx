import Link from "next/link";
import {  withTheme } from "styled-components";
import {
    ContainerNarrow,
    FlexCol,
    Heading3,
    Text,
    TextItalic,
    ButtonPrimary,
    Line,
} from "../../styles";
import {ThemeProps} from '../../types'

interface IntersectionProps extends ThemeProps{
  category: string;
  title: string;
  body: string;
  link?: string;
}

function IntersectionComponent({ category, title, body, link, theme }: IntersectionProps) {
    return (
        <ContainerNarrow margin="9.7rem auto">
            <FlexCol padding='1.4rem'>
              <TextItalic color={theme.secondary}>{category}</TextItalic>
              <Heading3 margin='0 auto 1.4rem auto' align='center'>{title}</Heading3>
              <Line wide='15rem' color={theme.secondary}/>
              <Text color={theme.grey3} margin=' 1.4rem auto'>{body}</Text>
              {link && (
                  <Link href={link}>
                      <ButtonPrimary margin="1.4rem auto">
                          Lees meer
                      </ButtonPrimary>
                  </Link>
              )}
            </FlexCol>
        </ContainerNarrow>
    );
}

export default withTheme(IntersectionComponent);