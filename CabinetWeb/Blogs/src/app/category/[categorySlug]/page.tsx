import type { Metadata } from "next";
import { Layout } from "../../components/layout";
import { Breadcrumb } from "../../components/breadcrumb";
import { BlogPostCard } from "../../components/blog-post-card";
import { blogPosts } from "../../data/blog-posts";
import { getCategoryContent } from "../../data/category-content";

type Props = { params: Promise<{ categorySlug: string }> };

function slugToTitle(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params;
  const categoryName = slugToTitle(categorySlug || "");
  const content = getCategoryContent(categorySlug || "");
  const filteredPosts = blogPosts.filter(
    (post) => post.category.toLowerCase() === categoryName.toLowerCase()
  );

  return {
    title: categoryName || "Category",
    description:
      content?.seo ||
      `Browse ${filteredPosts.length} posts in ${categoryName || "this category"}.`,
    openGraph: {
      title: `${categoryName || "Category"} | The Cabination Blog`,
      description: content?.seo,
      type: "website",
    },
  };
}

export default async function CategoryRoute({ params }: Props) {
  const { categorySlug } = await params;
  const categoryName = slugToTitle(categorySlug || "");
  const content = getCategoryContent(categorySlug || "");
  const filteredPosts = blogPosts.filter(
    (post) => post.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <Layout
      hideDividers
      mainPadding="pt-9"
      breadcrumb={
        <Breadcrumb
          items={[
            { label: "Blog", href: "/" },
            { label: categoryName || "Category" },
          ]}
        />
      }
    >
      <header className="mb-6">
        <h1 className="text-4xl mb-2">{categoryName || "Category"}</h1>
        <p className="text-gray-600">
          {filteredPosts.length}{" "}
          {filteredPosts.length === 1 ? "post" : "posts"} in this category
        </p>
      </header>

      <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 leading-relaxed">{content.intro}</p>
      </div>

      {filteredPosts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {filteredPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                id={post.id}
                imageUrl={post.imageUrl}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                featured={post.featured}
              />
            ))}
          </div>

          <div className="pb-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold mb-4">
              About {categoryName || "this category"}
            </h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p>{content.seo}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg mb-4">
            No posts found in this category yet.
          </p>
        </div>
      )}
    </Layout>
  );
}
