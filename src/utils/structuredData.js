

export const SITE_URL = "https://athencert.dev";
export const SITE_NAME = "Athencert";
export const SITE_LOGO = "https://athencert.dev/icons.svg";
export const DEFAULT_OG_IMAGE = "https://athencert.dev/og-image.png";


export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "alternateName": "Athencert - Modern Tech Certification Platform",
    "url": SITE_URL,
    "description": "Master AWS, Azure, Google Cloud, Cisco, CompTIA, and Kubernetes certifications with bite-sized lessons, flashcards, scenario labs, and timed mock exams.",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": SITE_NAME,
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": SITE_LOGO,
        "width": 512,
        "height": 512
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
}


export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": SITE_LOGO,
      "width": 512,
      "height": 512
    },
    "description": "Developer-first learning platform for cloud computing, networking, DevOps, and IT infrastructure certifications.",
    "sameAs": [
      "https://github.com/athencert",
      "https://twitter.com/athencert",
      "https://linkedin.com/company/athencert"
    ]
  };
}


export function getBreadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`
    }))
  };
}


export function getCourseSchema({
  title,
  description,
  provider,
  code,
  url,
  lessonsCount = 20,
  topics = [],
  ratingValue = "4.9",
  reviewCount = "1280"
}) {
  const fullUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `${title} (${code})`,
    "description": description,
    "url": fullUrl,
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "provider": {
      "@type": "EducationalOrganization",
      "name": provider,
      "sameAs": SITE_URL,
      "url": SITE_URL
    },
    "educationalCredentialAwarded": `${code} Certification Exam Readiness`,
    "occupationalCredentialAwarded": `${code} Industry Credential`,
    "educationalLevel": code.includes("02") || code.includes("900") || code.includes("ITF") ? "Beginner" : "Intermediate",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": `PT${lessonsCount * 10}M`,
      "instructor": {
        "@type": "Organization",
        "name": "Athencert Master Instructors",
        "url": SITE_URL
      }
    },
    "teaches": topics.map((t) => (typeof t === "object" ? t.title : t)),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": reviewCount
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "category": "Free Online Course"
    }
  };
}


function parseDurationToISO(durationStr = "") {
  const match = durationStr.match(/(\d+)/);
  if (match) {
    return `PT${match[1]}M`;
  }
  return "PT10M";
}


export function getLessonArticleSchema({
  title,
  intro,
  category,
  providerName,
  shortCode,
  lessonId,
  duration = "8 min",
  url
}) {
  const fullUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;
  const isoDuration = parseDurationToISO(duration);

  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": `${title} — ${providerName} (${shortCode})`,
    "description": intro || `Comprehensive lesson on ${title} for ${providerName} (${shortCode}) certification exam preparation.`,
    "articleSection": category,
    "identifier": lessonId ? String(lessonId) : undefined,
    "url": fullUrl,
    "inLanguage": "en-US",
    "timeRequired": isoDuration,
    "proficiencyLevel": "Beginner to Intermediate",
    "datePublished": "2026-01-15T08:00:00+00:00",
    "dateModified": "2026-08-19T00:00:00+00:00",
    "author": {
      "@type": "EducationalOrganization",
      "name": SITE_NAME,
      "url": SITE_URL
    },
    "publisher": {
      "@type": "EducationalOrganization",
      "name": SITE_NAME,
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": SITE_LOGO,
        "width": 512,
        "height": 512
      }
    },
    "image": DEFAULT_OG_IMAGE,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    },
    "isPartOf": {
      "@type": "Course",
      "name": `${providerName} (${shortCode}) Complete Preparation Track`,
      "url": `${SITE_URL}/certifications/${shortCode.toLowerCase()}`
    },
    "about": [
      {
        "@type": "Thing",
        "name": providerName
      },
      {
        "@type": "Thing",
        "name": category
      },
      {
        "@type": "Thing",
        "name": title
      }
    ],
    "keywords": [
      providerName,
      shortCode,
      category,
      title,
      "Certification Exam Prep",
      "Practice Questions",
      "Cloud Certification"
    ].join(", ")
  };
}


export function getQuizSchema({
  lesson,
  providerName,
  shortCode,
  url
}) {
  const quizData = lesson.question || lesson.quiz;
  if (!quizData) return null;

  const fullUrl = url.startsWith("http") ? url : `${SITE_URL}${url}`;
  const questionText = quizData.text || quizData.question;
  const answers = quizData.answers || [];
  const correctAnswerObj = answers.find((a) => a.correct);

  return {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": `${lesson.title} — Knowledge Check Quiz`,
    "description": `Interactive knowledge check question testing your understanding of ${lesson.title} for the ${providerName} (${shortCode}) exam.`,
    "url": fullUrl,
    "inLanguage": "en-US",
    "educationalLevel": "Intermediate",
    "about": {
      "@type": "Thing",
      "name": lesson.title
    },
    "hasPart": [
      {
        "@type": "Question",
        "eduQuestionType": "Multiple choice",
        "text": questionText,
        "suggestedAnswer": answers
          .filter((a) => !a.correct)
          .map((a) => ({
            "@type": "Answer",
            "text": a.text
          })),
        "acceptedAnswer": correctAnswerObj
          ? {
              "@type": "Answer",
              "text": correctAnswerObj.text,
              "comment": {
                "@type": "Comment",
                "text": quizData.explanation || "Correct answer."
              }
            }
          : undefined
      }
    ]
  };
}


export function getItemListSchema(items = [], listName = "Certification Roadmap", listUrl = "") {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": listName,
    "url": listUrl.startsWith("http") ? listUrl : `${SITE_URL}${listUrl}`,
    "numberOfItems": items.length,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.title || item.name,
      "url": item.path ? (item.path.startsWith("http") ? item.path : `${SITE_URL}${item.path}`) : undefined,
      "description": item.description
    }))
  };
}


export function getFAQSchema(faqs = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}
