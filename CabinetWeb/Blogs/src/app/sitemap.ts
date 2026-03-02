import type { MetadataRoute } from "next";

import { blogPosts } from "./data/blog-posts";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const categorySlug = (category: string) =>
  category.toLowerCase().trim().replace(/\s+/g, "-");

export default function sitemap(): MetadataRoute.Sitemap {
  const categories = Array.from(
    new Set(blogPosts.map((p) => categorySlug(p.category)))
  );

  return [
    {
      url: `${BASE_URL}/`,
      changeFrequency: "weekly",
      priority: 1,
      lastModified: new Date(),
    },
    ...categories.map((slug) => ({
      url: `${BASE_URL}/category/${slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
      lastModified: new Date(),
    })),
    ...blogPosts.map((post) => ({
      url: `${BASE_URL}/blog/${post.id}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      lastModified: new Date(),
    })),
  ];
}

