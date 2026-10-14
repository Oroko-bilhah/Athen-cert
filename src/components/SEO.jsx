import { useEffect } from "react";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "../utils/structuredData";


function SEO({
  title,
  description,
  keywords,
  canonicalPath = "",
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = "Athencert — Modern Tech Certification Learning Platform",
  robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  articleSection = "",
  publishedTime = "2026-01-15T08:00:00+00:00",
  modifiedTime = "2026-08-19T00:00:00+00:00",
  structuredData = null,
  prevUrl = null,
  nextUrl = null,
}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Modern Tech Certification Learning Platform`;

  const metaDescription =
    description ||
    "Master AWS, Azure, Google Cloud, Cisco, CompTIA, and Kubernetes certifications through focused bite-sized lessons, interactive flashcards, scenario labs, and timed mock exams.";

  const canonicalUrl = canonicalPath.startsWith("http")
    ? canonicalPath
    : `${SITE_URL}${canonicalPath.startsWith("/") ? canonicalPath : `/${canonicalPath}`}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMetaTag = (attrName, attrValue, content) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (content) {
        if (!element) {
          element = document.createElement("meta");
          element.setAttribute(attrName, attrValue);
          document.head.appendChild(element);
        }
        element.setAttribute("content", content);
      } else if (element) {
        element.remove();
      }
    };

    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (href) {
        if (!element) {
          element = document.createElement("link");
          element.setAttribute(rel, rel);
          document.head.appendChild(element);
        }
        element.setAttribute("href", href.startsWith("http") ? href : `${SITE_URL}${href}`);
      } else if (element) {
        element.remove();
      }
    };

    setMetaTag("name", "description", metaDescription);
    setMetaTag("name", "robots", robots);
    setMetaTag("name", "googlebot", robots);
    setMetaTag("name", "author", "Athencert Engineering & Education");
    setMetaTag("name", "publisher", SITE_NAME);

    if (keywords) {
      const keywordsStr = Array.isArray(keywords) ? keywords.join(", ") : keywords;
      setMetaTag("name", "keywords", keywordsStr);
    } else {
      setMetaTag("name", "keywords", null);
    }

    setLinkTag("canonical", canonicalUrl);
    setLinkTag("prev", prevUrl);
    setLinkTag("next", nextUrl);

    setMetaTag("property", "og:title", fullTitle);
    setMetaTag("property", "og:description", metaDescription);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:url", canonicalUrl);
    setMetaTag("property", "og:site_name", SITE_NAME);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:image:secure_url", ogImage);
    setMetaTag("property", "og:image:width", "1200");
    setMetaTag("property", "og:image:height", "630");
    setMetaTag("property", "og:image:alt", ogImageAlt);
    setMetaTag("property", "og:image:type", "image/png");
    setMetaTag("property", "og:locale", "en_US");

    if (ogType === "article") {
      setMetaTag("property", "article:published_time", publishedTime);
      setMetaTag("property", "article:modified_time", modifiedTime);
      setMetaTag("property", "article:author", "Athencert");
      setMetaTag("property", "article:section", articleSection || "Certification Exam Prep");
      if (keywords) {
        const kwArray = Array.isArray(keywords) ? keywords : keywords.split(", ");
        kwArray.forEach((kw) => setMetaTag("property", "article:tag", kw));
      }
    } else {
      setMetaTag("property", "article:published_time", null);
      setMetaTag("property", "article:modified_time", null);
      setMetaTag("property", "article:author", null);
      setMetaTag("property", "article:section", null);
    }

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", fullTitle);
    setMetaTag("name", "twitter:description", metaDescription);
    setMetaTag("name", "twitter:image", ogImage);
    setMetaTag("name", "twitter:image:alt", ogImageAlt);
    setMetaTag("name", "twitter:site", "@athencert");
    setMetaTag("name", "twitter:creator", "@athencert");

    const scriptId = "athencert-structured-data";
    let scriptTag = document.getElementById(scriptId);

    if (structuredData) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = scriptId;
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(structuredData, null, 2);
    } else if (scriptTag) {
      scriptTag.remove();
    }

    return () => {
      setLinkTag("prev", null);
      setLinkTag("next", null);
    };
  }, [
    fullTitle,
    metaDescription,
    keywords,
    canonicalUrl,
    ogType,
    ogImage,
    ogImageAlt,
    robots,
    articleSection,
    publishedTime,
    modifiedTime,
    structuredData,
    prevUrl,
    nextUrl,
  ]);

  return null;
}

export default SEO;
