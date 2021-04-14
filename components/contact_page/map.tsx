import styled, { withTheme } from "styled-components";
import { respond, SectionNarrow, FlexCol } from "../../styles";

function MapComponent({ theme }) {
    return (
        <SectionNarrow margin="4.7rem auto">
          <FlexCol>
            <Map>
                <iframe
                    title="route-map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9768.48665400401!2d4.7716991!3d52.2593357!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ae98590fab46cb3!2sOnline%20Podatki%20eu!5e0!3m2!1sen!2snl!4v1618394566204!5m2!1sen!2snl"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    aria-hidden="false"
                    tabIndex={0}
                ></iframe>
            </Map>
          </FlexCol>
        </SectionNarrow>
    );
}
export default withTheme(MapComponent);

const Map = styled.div`
    iframe {
        width: 280px;
        height: 250px;
        ${() =>
            respond(
                "s",
                `width: 500px;
                height: 350px;`
            )}
        ${() =>
            respond(
                "xl",
                `width: 650px;
                height: 400px;`
            )}
    }
`;