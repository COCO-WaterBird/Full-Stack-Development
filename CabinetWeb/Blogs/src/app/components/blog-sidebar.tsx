import { Search, Heart, Folder } from "lucide-react";
import { Link, useLocation } from "react-router";
import { blogPosts } from "../data/blog-posts";
// import { Breadcrumb } from "./breadcrumb";

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
  
  // Build breadcrumb items based on current path
  // const makeLabel = (seg: string) =>
  //   decodeURIComponent(seg)
  //     .replace(/-/g, " ")
  //     .split(" ")
  //     .map(s => s.charAt(0).toUpperCase() + s.slice(1))
  //     .join(" ");

  // let breadcrumbItems: { label: string; href?: string }[] = [];
  // const path = location.pathname || "/";
  // if (path === "/") {
  //   // Home page -> show Blog after Home
  //   breadcrumbItems = [{ label: "Blog", href: "/" }];
  // } else if (path.startsWith("/category/")) {
  //   const seg = path.split("/")[2] || "";
  //   breadcrumbItems = [
  //     { label: "Blog", href: "/" },
  //     { label: makeLabel(seg) },
  //   ];
  // } else if (path.startsWith("/blog/")) {
  //   const idStr = path.split("/")[2] || "";
  //   const id = Number(idStr);
  //   const post = blogPosts.find((p) => p.id === id);
  //   breadcrumbItems = [{ label: "Blog", href: "/" }];
  //   if (post) {
  //     breadcrumbItems.push({ label: post.title });
  //   }
  // } else {
  //   const seg = path.split("/").filter(Boolean).pop() || "";
  //   breadcrumbItems = seg ? [{ label: makeLabel(seg) }] : [];
  // }
  
  // Debug: log pathname so we can confirm what the router reports
  // (remove these logs after debugging)
  // console.log can be viewed in the browser DevTools console
  // e.g. console shows: BlogSidebar pathname: /blog/123
  // Uncomment the next line if you want to debug in the browser
  // console.log("BlogSidebar pathname:", location.pathname);

  // Hide sidebar breadcrumb on any /blog path (covers /blog, /blog/, /blog/:id)
  const showSidebarBreadcrumb = !/^\/blog(\/|$)/.test(location.pathname);

  return (
  <aside className="w-[400px] flex-shrink-0 pt-6 px-5 space-y-5 self-start sticky top-5">
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

      {/* Promotional cards - shown only on Home and Category pages */}
      {(() => {
        const showPromos = location.pathname === '/' || location.pathname.startsWith('/category');
        if (!showPromos) return null;
        return (
          <>
            {/* FREE 3D Kitchen Design Card */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-4 space-y-3">
                <div className="relative bg-gray-100 rounded aspect-video flex items-center justify-center">
                  <Heart className="w-12 h-12 text-gray-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">FREE 3D Kitchen Design</h3>
                  <button className="w-full py-2 px-4 border border-gray-900 rounded hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    GET STARTED →
                  </button>
                </div>
              </div>
            </div>

            {/* 1 FREE Door Sample Card */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-4 space-y-3">
                <div className="relative bg-gray-100 rounded aspect-video flex items-center justify-center">
                  <Heart className="w-12 h-12 text-gray-300" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">1 FREE Door Sample</h3>
                  <button className="w-full py-2 px-4 border border-gray-900 rounded hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                    ORDER NOW →
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })()}

      {/* Categories */}
      <div className="space-y-3">
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
