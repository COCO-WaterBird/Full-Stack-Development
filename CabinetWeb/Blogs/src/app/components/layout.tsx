import { ReactNode } from "react";
import { BlogSidebar } from "../components/blog-sidebar";

interface LayoutProps {
  children: ReactNode;
  // when true the vertical divider between sidebar and main is hidden
  hideDividers?: boolean;
  // optional Tailwind padding-top class for the main content, e.g. 'pt-9'
  mainPadding?: string;
  // optional breadcrumb node to render above the three-column container
  breadcrumb?: ReactNode;
  // optional right sidebar node; if provided it will be rendered as the right column
  rightSidebar?: ReactNode;
}

export function Layout({ children, hideDividers, mainPadding, breadcrumb, rightSidebar }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb placed above the three-column container when provided */}
      {breadcrumb && (
        <div className="max-w-[1800px] mx-auto w-full px-5 pt-6 ">
          {breadcrumb}
        </div>
      )}

      <div className="flex items-start max-w-[1800px] mx-auto pt-2">
        {/* Sidebar */}
        <BlogSidebar />

        {/* Main Content */}
        <main className={`flex-1 ${hideDividers ? "" : "border-l border-gray-200"}`}>
          <div className={`max-w-[1280px] ${mainPadding ?? 'pt-6'} px-8`}>
            {children}
          </div>
        </main>

        {/* Optional right sidebar */}
        {rightSidebar ? (
          <div className="flex-shrink-0 self-start sticky top-5">
            {rightSidebar}
          </div>
        ) : null}
      </div>
    </div>
  );
}
