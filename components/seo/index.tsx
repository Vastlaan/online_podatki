import Head from "next/head";

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

    let defaultHost = 'https://onlinepodatki.eu/'

    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <title>{title || "Online Podatki - nowoczesna księgowość"}</title>
            <meta
                name="description"
                content={
                    description ||
                    `Online Podatki to nowoczesna księgowość dla firm i osób prywatnych. 
                    W naszej szerokiej gamie usług oferujemy m.in: rozliczenia podatków Holandia, rozliczenia podatków Niemcy, Belgia, Polska. 
                    Świadczenia socjalne Holandia, Świadczenia socjalne Polska, Niemcy, Belgia. Dotacje Holandia, subsydia Holandia. 
                    Administracja firm w Holandii, Polsce, Beligii i w Niemczech.`
                }
                data-react-helmet="true"
            />
            <link rel="apple-touch-icon" href={logo || "/logo192.png"} />

            <link rel="cannonical" href={host || defaultHost || "https://onliepodatki.eu/"} />

            <meta name="robots" content={robots || "index, follow"} />

            <meta property="og:type" content="article" />

            <meta
                property="og:title"
                content={title || "Online Podatki - nowoczesna księgowość"}
            />

            <meta
                property="og:description"
                content={
                    description ||
                    `Online Podatki to nowoczesna księgowość dla firm i osób prywatnych. 
                    W naszej szerokiej gamie usług oferujemy m.in: rozliczenia podatków Holandia, rozliczenia podatków Niemcy, Belgia, Polska. 
                    Świadczenia socjalne Holandia, Świadczenia socjalne Polska, Niemcy, Belgia. Dotacje Holandia, subsydia Holandia. 
                    Administracja firm w Holandii, Polsce, Beligii i w Niemczech.`
                }
            />

            <meta
                property="og:image"
                content={image || "https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/online_podatki_og_image.png"}
            />

            <meta
                property="og:url"
                content={host ||  defaultHost || "https://onlinepodatki.eu/"}
            />

            <meta
                property="og:site_name"
                content={title || "Online Podatki - nowoczesna księgowość"}
            />
        </Head>
    );
}