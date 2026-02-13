import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Layout } from "../../components/layout";
import { BlogDetail } from "../../pages/blog-detail";
import { blogPosts } from "../../data/blog-posts";

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
      publishedTime: post.date,
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
  return <BlogDetail />;
}
