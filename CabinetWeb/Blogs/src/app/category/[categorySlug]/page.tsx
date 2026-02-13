import { Metadata } from "next";
import { Layout } from "../../components/layout";
import { CategoryPage } from "../../pages/category";
import { Breadcrumb } from "../../components/breadcrumb";
import { blogPosts } from "../../data/blog-posts";
import { getCategoryContent } from "../../data/category-content";

type Props = { params: Promise<{ categorySlug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categorySlug } = await params;
  const categoryName = categorySlug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const content = getCategoryContent(categorySlug || "");
  const filteredPosts = blogPosts.filter(
    (post) => post.category.toLowerCase() === (categoryName || "").toLowerCase()
  );

  return {
    title: categoryName || "Category",
    description: content?.seo || `Browse ${filteredPosts.length} posts in ${categoryName}.`,
    openGraph: {
      title: `${categoryName} | The Cabination Blog`,
      description: content?.seo,
    },
  };
}

export default async function CategoryRoute({ params }: Props) {
  const { categorySlug } = await params;
  const categoryName = categorySlug
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <Layout
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
      <CategoryPage />
    </Layout>
  );
}
