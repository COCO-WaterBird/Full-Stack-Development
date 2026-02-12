import { useParams, Link, Navigate } from "react-router";
import { User, Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";
import { RightSidebar } from "../components/right-sidebar";
import { Layout } from "../components/layout";
import { BlogPostCard } from "../components/blog-post-card";
// Breadcrumb moved to left sidebar; removed inline Breadcrumb here
// add Breadcrumbs
import { Breadcrumb } from "../components/breadcrumb";

import { blogPosts } from "../data/blog-posts";
import { getCategoryFAQs } from "../data/faqs";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === Number(id));

  // Debug: uncomment to log when BlogDetail renders and what the current pathname is
  // console.log('BlogDetail render id=', id, 'pathname=', window.location.pathname);

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  if (!post) {
    return <Navigate to="/" replace />;
  }

  // Build breadcrumb items for top breadcrumb (shows Blog > Article Title)
  const breadcrumbItems = [
    { label: "Blog", href: "/" },
    { label: post?.title ?? "Article" },
  ];
 
  // Get category slug for FAQs
  const categorySlug = post.category
    .toLowerCase()
    .replace(/\s+/g, "-");
  const faqs = getCategoryFAQs(categorySlug);

  // Get related posts (same category, exclude current post, limit to 3)
  const relatedPosts = blogPosts
    .filter(
      (p) => p.category === post.category && p.id !== post.id,
    )
    .slice(0, 3);

  return (
    <Layout
      mainPadding="pt-6"
      breadcrumb={<Breadcrumb items={breadcrumbItems} />}
      rightSidebar={<RightSidebar />}
    >
      {/* Main Content (article) */}
      <article>
        <header className="mb-6">
          <h1 className="text-4xl mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <Link
              to={`/category/${categorySlug}`}
              className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              {post.category}
            </Link>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <ImageWithFallback
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-auto"
          />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{
            __html: post.content || post.excerpt,
          }}
        />

        {/* Cabinet FAQs Section */}
        <section className="mb-12 pb-12 border-t border-gray-200 pt-8">
          <h2 className="text-3xl font-semibold mb-6">Cabinet FAQs</h2>
          <div className="space-y-4">
            {faqs.slice(0, 3).map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="px-4 pb-4 text-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Related Posts Section */}
        {relatedPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">
              Check Out Some Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogPostCard
                  key={relatedPost.id}
                  id={relatedPost.id}
                  imageUrl={relatedPost.imageUrl}
                  title={relatedPost.title}
                  excerpt={relatedPost.excerpt}
                  date={relatedPost.date}
                />
              ))}
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
}