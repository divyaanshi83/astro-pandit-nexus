import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SEOEngine = ({ title, description, keywords, schema }) => {
  const location = useLocation();
  const canonical = `https://astroashupandit.com${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content="https://astroashupandit.com/og-cover.jpg" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOEngine;
