import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { User, Calendar, ChevronDown } from "lucide-react";
import { SiteLayout } from "../../components/site-layout";
import { Breadcrumb } from "../../components/breadcrumb";
import { BlogPostCard } from "../../components/blog-post-card";
import { RightSidebar } from "../../components/right-sidebar";
import { blogPosts } from "../../data/blog-posts";
import { getCategoryFAQs } from "../../data/faqs";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === Number(id));
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | The Cabination Blog`,
      description: post.excerpt,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ id: String(post.id) }));
}

export default async function BlogDetailRoute({ params }: Props) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === Number(id));
  if (!post) notFound();

  const categorySlug = post.category.toLowerCase().replace(/\s+/g, "-");
  const breadcrumbItems = [
    { label: "Blog", href: "/" },
    { label: post.title },
  ];

  const faqs = getCategoryFAQs(categorySlug);

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <SiteLayout
      hideDividers
      mainPadding="pt-6"
      breadcrumb={<Breadcrumb items={breadcrumbItems} />}
      rightSidebar={<RightSidebar />}
    >
      <article>
        <header className="mb-6">
          <h1 className="text-4xl mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            {post.author ? (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            ) : null}

            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>

            <Link
              href={`/category/${categorySlug}`}
              className="px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              {post.category}
            </Link>
          </div>
        </header>

        <div className="mb-8 rounded-lg overflow-hidden">
          <img src={post.imageUrl} alt={post.title} className="w-full h-auto" />
        </div>

        <div
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
        />

        <section className="mb-12 pb-12 border-t border-gray-200 pt-8">
          <h2 className="text-3xl font-semibold mb-6">Cabinet FAQs</h2>
          <div className="space-y-4">
            {faqs.slice(0, 3).map((faq, index) => (
              <details
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <summary className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors cursor-pointer">
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                </summary>
                <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
              </details>
            ))}
          </div>
        </section>

        {relatedPosts.length > 0 ? (
          <section className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">
              Check Out Some Related Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <BlogPostCard
                  key={rp.id}
                  id={rp.id}
                  imageUrl={rp.imageUrl}
                  title={rp.title}
                  excerpt={rp.excerpt}
                  date={rp.date}
                />
              ))}
            </div>
          </section>
        ) : null}
      </article>
    </SiteLayout>
  );
}
