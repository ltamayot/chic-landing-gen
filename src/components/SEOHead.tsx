import { Helmet } from "react-helmet-async";

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  author?: string;
  publishDate?: string;
  modifiedDate?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  category?: string;
  readingTime?: string;
  schemas?: {
    blogPost?: boolean;
    faq?: Array<{ question: string; answer: string }>;
    breadcrumb?: Array<{ name: string; url: string }>;
    medicalBusiness?: {
      name: string;
      description: string;
      specialty: string;
    };
  };
}

const SEOHead = ({
  title,
  description,
  keywords = [],
  author = "Dra. Sara Tamayo",
  publishDate,
  modifiedDate,
  image = "https://www.saori.com.co/og-image.jpg",
  url = "https://www.saori.com.co",
  type = "website",
  category,
  readingTime,
  schemas,
}: SEOProps) => {
  const fullTitle = title.includes("SAORI") ? title : `${title} | SAORI`;
  const canonicalUrl = url.startsWith("http") ? url : `https://www.saori.com.co${url}`;

  // BlogPost Schema
  const blogPostSchema = schemas?.blogPost && publishDate
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description: description,
        image: image,
        author: {
          "@type": "Person",
          name: author,
        },
        publisher: {
          "@type": "Organization",
          name: "SAORI - Medicina Integrativa",
          logo: {
            "@type": "ImageObject",
            url: "https://www.saori.com.co/logo.png",
          },
        },
        datePublished: publishDate,
        dateModified: modifiedDate || publishDate,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        keywords: keywords.join(", "),
        ...(category && { articleSection: category }),
        ...(readingTime && { timeRequired: readingTime }),
      }
    : null;

  // FAQ Schema
  const faqSchema =
    schemas?.faq && schemas.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: schemas.faq.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  // Breadcrumb Schema
  const breadcrumbSchema =
    schemas?.breadcrumb && schemas.breadcrumb.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: schemas.breadcrumb.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url.startsWith("http")
              ? item.url
              : `https://www.saori.com.co${item.url}`,
          })),
        }
      : null;

  // Medical Business Schema
  const medicalBusinessSchema = schemas?.medicalBusiness
    ? {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: schemas.medicalBusiness.name,
        description: schemas.medicalBusiness.description,
        url: canonicalUrl,
        medicalSpecialty: schemas.medicalBusiness.specialty,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bogotá",
          addressRegion: "Cundinamarca",
          addressCountry: "CO",
        },
        priceRange: "$$",
        telephone: "+57-XXX-XXXXXXX",
      }
    : null;

  // Organization Schema (always present)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "SAORI - Medicina Integrativa",
    description:
      "Centro de medicina integrativa que combina Medicina Tradicional China y Medicina Funcional para un cuidado personalizado y holístico",
    url: "https://www.saori.com.co",
    logo: "https://www.saori.com.co/logo.png",
    sameAs: [
      "https://www.instagram.com/saori",
      "https://www.facebook.com/saori",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogotá",
      addressRegion: "Cundinamarca",
      addressCountry: "CO",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Spanish"],
    },
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      <meta name="author" content={author} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="es_CO" />
      <meta property="og:site_name" content="SAORI - Medicina Integrativa" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Article specific meta tags */}
      {type === "article" && publishDate && (
        <>
          <meta property="article:published_time" content={publishDate} />
          {modifiedDate && (
            <meta property="article:modified_time" content={modifiedDate} />
          )}
          {category && <meta property="article:section" content={category} />}
          <meta property="article:author" content={author} />
          {keywords.map((keyword) => (
            <meta key={keyword} property="article:tag" content={keyword} />
          ))}
        </>
      )}

      {/* hreflang for Spanish Colombia */}
      <link rel="alternate" hrefLang="es-CO" href={canonicalUrl} />
      <link rel="alternate" hrefLang="es" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* JSON-LD Schemas */}
      {blogPostSchema && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostSchema)}
        </script>
      )}
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
      {medicalBusinessSchema && (
        <script type="application/ld+json">
          {JSON.stringify(medicalBusinessSchema)}
        </script>
      )}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default SEOHead;
