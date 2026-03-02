
import { createBrowserRouter } from "react-router";
import { SiteLayout } from "./components/site-layout";
import { BlogListing } from "./pages/blog-listing";
import { CategoryPage } from "./pages/category";
import { BlogDetail } from "./pages/blog-detail";
import { Breadcrumb } from "./components/breadcrumb";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <SiteLayout hideDividers mainPadding="pt-6"><BlogListing /></SiteLayout>,
    element: (
      <SiteLayout
        hideDividers
        mainPadding="pt-6"
        breadcrumb={<Breadcrumb items={[{ label: "Blog" }]} />}
      >
        <BlogListing />
      </SiteLayout>
    ),
  },
  {
    path: "/category/:categorySlug",
    // element: <SiteLayout mainPadding="pt-9"><CategoryPage /></SiteLayout>,
    element: (
      <SiteLayout
        mainPadding="pt-9"
        breadcrumb={<Breadcrumb items={[{ label: "Blog", href: "/" }, { label: "Category" }]} />}
      >
        <CategoryPage />
      </SiteLayout>
    ),
  },
  {
    path: "/blog/:id",
    element: <BlogDetail />,
  },
]);