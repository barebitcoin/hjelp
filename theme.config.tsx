import { useRouter } from "next/router";
import Script from "next/script";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  head: () => {
    const { asPath } = useRouter();

    return (
      <>
        <link
          rel="icon"
          type="image/png"
          href="https://barebitcoin.no/favicon.ico"
        />
        <meta name="og:title" content="Hjelpesider for Bare Bitcoin" />

        <meta // TODO: dynamic per article?
          name="og:description"
          content="Lær om bitcoin, og bruk av vekslingstjenesten Bare Bitcoin. Se svar på ofte stilte spørsmål, og få innspill til sikker og trygg bruk."
        />

        <meta property="og:locale" content="no_NB" />

        <meta
          property="og:type"
          content={
            asPath === "/"
              ? "website" // root is a complete website
              : "article" // everything else is an article
          }
        />

        <meta
          // TODO: make this dynamic
          name="og:image" // Default image for ALL sites image
          content="https://barebitcoin.no/app-logo.png"
        />

        <meta
          name="twitter:image" // Twitter image
          content="https://barebitcoin.no/app-logo.png"
        />

        <noscript>
          <Script src="https://sa.bb.no/latest.js" />
          {/* https://docs.simpleanalytics.com/automated-events */}
          <Script src="https://sa.bb.no/auto-events.js" />
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src="https://sa.bb.no/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </>
    );
  },
  logo: <span>Bare Bitcoin</span>,
  chat: {
    link: "https://discord.gg/qMhQvVbUeH",
  },
  project: { link: "https://github.com/barebitcoin/hjelp" },
  docsRepositoryBase: "https://github.com/barebitcoin/hjelp/blob/master",
  footer: {
    text: "Bare Bitcoin",
  },
  search: {
    placeholder: "Søk i dokumentasjon",
  },
  editLink: {
    text: "",
  },
  toc: {
    title: "På denne siden",
  },
  feedback: {
    content: "Spørsmål? Gi oss feedback",
    useLink: () => "https://github.com/barebitcoin/hjelp/discussions",
  },

  // https://nextra.site/docs/docs-theme/theme-configuration#seo-options
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Bare Bitcoin",
    };
  },
  themeSwitch: {
    useOptions() {
      return {
        dark: "Mørk",
        light: "Lys",
        system: "Standard",
      };
    },
  },
  gitTimestamp: ({ timestamp }) => (
    <>
      Sist oppdatert{" "}
      <time dateTime={timestamp.toISOString()}>
        {timestamp.toLocaleDateString("no-NB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </time>
    </>
  ),
};

export default config;
