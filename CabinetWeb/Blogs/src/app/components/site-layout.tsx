import { ReactNode } from "react";
import { BlogSidebar } from "../components/blog-sidebar";

interface SiteLayoutProps {
  children: ReactNode;
  hideDividers?: boolean;
  mainPadding?: string;
  breadcrumb?: ReactNode;
  rightSidebar?: ReactNode;
}

export function SiteLayout({
  children,
  hideDividers,
  mainPadding,
  breadcrumb,
  rightSidebar,
}: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {breadcrumb && (
        <div className="max-w-[1800px] mx-auto w-full px-5 pt-6 ">
          {breadcrumb}
        </div>
      )}

      <div className="flex flex-col lg:flex-row items-start max-w-[1800px] mx-auto pt-2 gap-4 lg:gap-8">
        <BlogSidebar />

        <main className={`flex-1 ${hideDividers ? "" : ""}`}>
          <div className={`max-w-[1280px] ${mainPadding ?? "pt-6"} px-8`}>
            {children}
          </div>
        </main>

        {rightSidebar ? (
          <div className="hidden lg:block flex-shrink-0 self-start lg:sticky lg:top-5">
            {rightSidebar}
          </div>
        ) : null}
      </div>
    </div>
  );
}

