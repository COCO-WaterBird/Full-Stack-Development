import { useParams, Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { BlogPostCard } from "../components/blog-post-card";
import { blogPosts } from "../data/blog-posts";
// Breadcrumb moved to left sidebar; removed inline Breadcrumb here
import { getCategoryContent } from "../data/category-content";

export function CategoryPage() {
  const { categorySlug } = useParams();
  
  // Convert slug back to category name
  const categoryName = categorySlug
    ?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') || '';
  
  // Filter posts by category
  const filteredPosts = blogPosts.filter(
    post => post.category.toLowerCase() === categoryName.toLowerCase()
  );

  // Get category content
  const content = getCategoryContent(categorySlug || '');

  return (
    <>
      {/* Breadcrumb moved to sidebar */}

      {/* Header */}
      <header className="mb-6">
        <h1 className="text-4xl mb-2">{categoryName}</h1>
        <p className="text-gray-600">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'} in this category
        </p>
      </header>

      {/* Intro Text */}
      <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <p className="text-gray-700 leading-relaxed">
          {content.intro}
        </p>
      </div>

      {/* Blog Grid */}
      {filteredPosts.length > 0 ? (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {filteredPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                id={post.id}
                imageUrl={post.imageUrl}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
              />
            ))}
          </div>

          {/* Pagination - only show if there are many posts */}
          {filteredPosts.length > 9 && (
            <div className="flex items-center justify-center gap-2 mb-12">
              <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50">
                1
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50">
                2
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* SEO Paragraph */}
          <div className="pb-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold mb-4">About {categoryName}</h2>
            <div className="prose max-w-none text-gray-700 leading-relaxed">
              <p>{content.seo}</p>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg mb-4">No posts found in this category yet.</p>
          <Link 
            to="/"
            className="text-blue-600 hover:text-blue-700 underline"
          >
            View all posts
          </Link>
        </div>
      )}
    </>
  );
}