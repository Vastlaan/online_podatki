import Head from "next/head";
import {useRouter} from 'next/router'
import en from '../../translations/en/head'
import pl from '../../translations/pl/head'

interface SeoProps{
  host?: string;
  title?: string;
  description?: string;
  robots?: string;
  logo?: string;
  image?: string;
}

export default function SeoComponent({
    host,
    title,
    description,
    robots,
    logo,
    image
}:SeoProps) {
    
    const router = useRouter()
    const {locale} = router
    const translations = locale==='en'?en:pl

    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <title>{title || translations.title}</title>
            <meta
                name="description"
                content={
                    description ||
                    translations.description
                }
                data-react-helmet="true"
            />
            <link rel="apple-touch-icon" href={logo || "/logo192.png"} />

            <link rel="cannonical" href={host || translations.host} />

            <meta name="robots" content={robots || "index, follow"} />

            <meta property="og:type" content="article" />

            <meta
                property="og:title"
                content={title || translations.title}
            />

            <meta
                property="og:description"
                content={
                    description ||
                    translations.description
                }
            />

            <meta
                property="og:image"
                content={image || "https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/online_podatki_og_image.png"}
            />

            <meta
                property="og:url"
                content={host || translations.host}
            />

            <meta
                property="og:site_name"
                content={title || translations.title}
            />
        </Head>
    );
}