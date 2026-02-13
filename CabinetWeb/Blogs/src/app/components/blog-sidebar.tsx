import React from "react";
import { Search, Heart, Folder } from "lucide-react";
import { Link, useLocation } from "react-router";
import { blogPosts } from "../data/blog-posts";


const categories = [
  "Eco-friendly Cabinets",
  "Kitchen Design Ideas",
  "Kitchen Cabinets",
  "Bathroom Cabinets",
  "Kitchen Remodel Tips",
  "Cabinet Hardware",
  "Shaker Cabinets",
  "RTA Cabinets",
];

export function BlogSidebar() {
  const location = useLocation();

  const showSidebarBreadcrumb = !/^\/blog(\/|$)/.test(location.pathname ?? "");

  return (
  <aside className="w-full lg:w-[400px] flex-shrink-0 pt-4 lg:pt-6 px-5 space-y-5 lg:self-start lg:sticky lg:top-5">
    {/* <aside className="w-[320px] flex-shrink-0 px-10 pt-10 space-y-6 self-start sticky top-5"> */}
      {/* Breadcrumb (placed above search) - only show on non-article pages */}
      {/* {showSidebarBreadcrumb && <Breadcrumb items={breadcrumbItems} />} */}


      {/* Search Box */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Blog"
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
        />
      </div>

      {/* Promotional cards - shown only on Home and Category pages (desktop only) */}
      {(() => {
        const showPromos = location.pathname === '/' || (location.pathname ?? '').startsWith('/category');
        if (!showPromos) return null;
        return (
          <div className="hidden lg:block space-y-8">
              {/* FREE 3D Kitchen Design Card */}
              <div className="rounded-xl overflow-hidden shadow-lg group">
                <div className="relative overflow-hidden">
                  {/* 背景图：通过 brightness 降低亮度 50% */}
                  <img
                    src="/images/kitchen-design.jpg"
                    alt="FREE 3D Kitchen Design"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'brightness(0.7)' }} 
                  />
                  
                  {/* 文字叠加层（略偏下） */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <h3 className="text-white text-4xl 2xl:text-5xl font-bold mb-2 leading-none mt-10
                     tracking-[0.1em]">
                      FREE 3D
                    </h3>
                    <h3 className="text-white text-4xl 2xl:text-5xl font-bold leading-none tracking-tight whitespace-nowrap">
                      Kitchen Design
                    </h3>
                  </div>
                </div>

                {/* 按钮部分 */}
                <button 
                  className="w-full py-2 px-4 font-bold text-white hover:brightness-110 transition-all flex items-center justify-center gap-2 text-base tracking-widest" 
                  style={{ backgroundColor: '#99cc33' }}
                >
                  GET STARTED 
                  <span className="text-lg">→</span>
                </button>
              </div>

              {/* 1 FREE Door Samples Card */}
              <div className="rounded-xl overflow-hidden shadow-lg group">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/DoorSamples.jpg"
                    alt="1 FREE Door Samples"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ filter: 'brightness(0.7)' }}
                  />
                  {/* 文字叠加层（略偏下） */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <h3 className="text-white text-4xl 2xl:text-5xl font-bold mb-2 leading-none mt-10 tracking-[0.1em]">
                      1 FREE
                    </h3>
                    <h3 className="text-white text-4xl 2xl:text-5xl font-bold leading-none tracking-tight whitespace-nowrap">
                      Door Sample
                    </h3>
                  </div>
                </div>
                <button
                  className="w-full py-2 px-4 font-bold text-white hover:brightness-110 transition-all flex items-center justify-center gap-2 text-base tracking-widest"
                  style={{ backgroundColor: '#99cc33' }}
                >
                  ORDER NOW
                  <span className="text-lg">→</span>
                </button>
              </div>
          </div>
        );
      })()}

      {/* Categories (desktop only) */}
      <div className="space-y-3 hidden lg:block">
        <h3 className="font-semibold text-lg">Categories</h3>
        <nav className="space-y-2">
          {categories.map((category, index) => {
            const categoryPath = `/category/${encodeURIComponent(category.toLowerCase().replace(/\s+/g, '-'))}`;
            const isActive = location.pathname === categoryPath;
            
            return (
              <Link
                key={index}
                to={categoryPath}
                className={`flex items-center gap-2 py-1 hover:text-gray-600 transition-colors ${
                  isActive ? 'text-blue-600 font-semibold' : 'text-gray-900'
                }`}
                aria-label={`Category: ${category}`}
              >
                <Folder className={`w-4 h-4 text-gray-400 ${isActive ? 'text-blue-600' : ''}`} />
                <span>{category}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
