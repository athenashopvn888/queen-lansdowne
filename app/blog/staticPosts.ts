export interface StaticBlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
  relatedLinks: Array<{
    title: string;
    url: string;
    description: string;
  }>;
}

export const STATIC_POSTS: StaticBlogPost[] = [
  {
    slug: "queen-lansdowne-visit-planning-guide",
    title: "What To Check Before Visiting a Cannabis Store Near Queen and Lansdowne",
    seoTitle: "Queen Lansdowne Cannabis Visit Planning | Adult 19+ Guide",
    metaDescription:
      "Plan a visit to Queen Lansdowne Cannabis near Queen St W and Lansdowne with adult 19+ store info, local context, and safe page checks.",
    excerpt: "Planning a visit to Queen Lansdowne Cannabis.",
    author: "Athena SEO Team",
    date: "2026-07-01",
    category: "Visit Guide",
    readTime: "4 min",
    content: `## Planning A Visit To Queen Lansdowne Cannabis

Queen Lansdowne Cannabis is connected to a highly recognizable Toronto intersection: Queen Street West and Lansdowne Avenue. For adults 19+, a useful visit-planning article should help answer simple questions before a shopper leaves home: is this the right store page, what information should I check, and what should I avoid assuming from a blog article?

This draft supports the store page. It does not replace it and does not create live claims about item status or store operations.

## Why The Queen And Lansdowne Area Needs Clear Store Context

Queen Street West is a busy corridor with local residents, transit users, visitors, and people planning multiple stops. When someone searches for Queen Lansdowne Cannabis, they are usually looking for practical store information and local context.

The article keeps that local framing without drifting into unsupported comparisons. It explains the Queen and Lansdowne area, reminds readers that cannabis retail is for adults 19+, and points them toward the store page for details that may change.

## What To Check On The Store Page

Before visiting, adult shoppers can review the Queen Lansdowne Cannabis store page for store identity, location details, contact information, and broad category browsing. These checks help avoid confusion and make the visit more straightforward.

The store page should remain the source of truth. Blog content can help explain how to use it, but the blog should not create its own business facts.

## Category Browsing Without Overclaiming

Category names can help shoppers understand the structure of a cannabis menu. They may see broad browsing groups such as flower, pre-rolls, vapes, edibles, concentrates, or accessories. Those labels are helpful for orientation, but the article should not claim that a particular item is currently present.

The safe framing is simple: use the categories to understand how the store organizes browsing, then use the store page or direct store contact for current item-specific questions.

## Adult 19+ Visit Basics

Adults 19+ should bring valid government identification and check the store page before visiting. If a reader is planning around transit, local errands, or a specific time window, they should rely on the store page for the latest store-specific details.

This keeps the guide useful and trustworthy. It gives a real shopper a checklist while respecting NAP Lock, Hours Lock, and content compliance boundaries.

## FAQ

### Is this guide for adults 19+ only?

Yes. The article is written for adults 19+ planning a visit to Queen Lansdowne Cannabis.

### Does this guide confirm current item details?

No. It explains how to prepare and where to check details. The store page remains the source of truth.

### Can this article say Queen Lansdowne Cannabis is better than nearby stores?

No. This draft avoids ranking, review, rating, and superiority claims.

### Does this guide change NAP or hours?

No. NAP Lock and Hours Lock remain preserved.`,
    relatedLinks: [
      {
        title: "Queen Lansdowne Cannabis Toronto store page",
        url: "https://www.queenlansdownecannabis.ca/weed-dispensary-toronto",
        description: "Primary store-specific destination after the Queen/Lansdowne visit guide.",
      },
      {
        title: "Queen Lansdowne Cannabis homepage",
        url: "https://www.queenlansdownecannabis.ca/",
        description: "Store-scoped general navigation for adults 19+.",
      },
      {
        title: "More Queen Lansdowne Cannabis guides",
        url: "https://www.queenlansdownecannabis.ca/blog",
        description: "Store-scoped blog index for future approved publishing.",
      },
    ],
  },
];

export function getStaticPost(slug: string) {
  return STATIC_POSTS.find((post) => post.slug === slug);
}
