import { ChevronRight } from "lucide-react";
import { BlogPostCard } from "../components/blog-post-card";
import { blogPosts } from "../data/blog-posts";
// Breadcrumb moved to left sidebar; removed inline Breadcrumb here

export function BlogListing() {
  return (
    <>
      {/* Header */}
      <header className="mb-6 hidden md:block">
        <h1 className="text-4xl mb-2">The Cabination Blogs</h1>
        <p
          className="text-gray-600"
          style={{ color: "#2f4f5a", fontFamily: 'Poppins, Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}
        >
          Kitchen design ideas, cabinet guides, and planning tips.
        </p>
      </header>

      {/* Intro Text */}
      <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200 hidden md:block">
        <p className="text-gray-700 leading-relaxed">
          Welcome to The Cabination blog – your ultimate resource for kitchen design inspiration, 
          cabinet selection guides, and remodeling expertise. Whether you're planning a complete 
          kitchen renovation or simply looking to update your cabinetry, our expert articles cover 
          everything from the latest design trends to practical installation tips. Explore our 
          categories to find helpful guides on eco-friendly options, style comparisons, hardware 
          selection, and budget-friendly solutions that will help you create the kitchen of your dreams.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {blogPosts.map((post) => (
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

      {/* Pagination */}
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
        <span className="px-2 text-gray-400">...</span>
        <button className="w-10 h-10 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-50">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* SEO Paragraph */}
      <div className="pb-12 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-semibold mb-4">Your Kitchen Design Resource</h2>
        <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
          <p>
            The Cabination blog is dedicated to helping homeowners, designers, and contractors make 
            informed decisions about kitchen cabinetry and design. Our comprehensive articles are written 
            by industry experts with years of experience in kitchen remodeling, cabinet manufacturing, 
            and interior design. We understand that choosing the right cabinets and planning a kitchen 
            renovation can be overwhelming, which is why we break down complex topics into easy-to-understand 
            guides and actionable advice.
          </p>
          <p>
            From exploring sustainable eco-friendly cabinet options to understanding the benefits of 
            ready-to-assemble (RTA) cabinets, our blog covers every aspect of kitchen cabinetry. Learn 
            about timeless shaker-style designs, discover how to select the perfect cabinet hardware, 
            and get insider tips on maximizing your remodeling budget. Whether your style is modern 
            and minimalist or traditional and classic, you'll find inspiration and practical guidance 
            to bring your vision to life. Stay updated with the latest trends in kitchen design and 
            discover smart storage solutions that will make your kitchen more functional and beautiful 
            for years to come.
          </p>
        </div>
      </div>
    </>
  );
}