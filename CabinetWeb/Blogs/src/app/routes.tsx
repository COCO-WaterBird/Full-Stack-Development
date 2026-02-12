
import { createBrowserRouter } from "react-router";
import { Layout } from "./components/layout";
import { BlogListing } from "./pages/blog-listing";
import { CategoryPage } from "./pages/category";
import { BlogDetail } from "./pages/blog-detail";
import { Breadcrumb } from "./components/breadcrumb";

export const router = createBrowserRouter([
  {
    path: "/",
    // element: <Layout hideDividers mainPadding="pt-6"><BlogListing /></Layout>,
    element: (
      <Layout
        hideDividers
        mainPadding="pt-6"
        breadcrumb={<Breadcrumb items={[{ label: "Blog" }]} />}
      >
        <BlogListing />
      </Layout>
    ),
  },
  {
    path: "/category/:categorySlug",
    // element: <Layout mainPadding="pt-9"><CategoryPage /></Layout>,
    element: (
      <Layout
        mainPadding="pt-9"
        breadcrumb={<Breadcrumb items={[{ label: "Blog", href: "/" }, { label: "Category" }]} />}
      >
        <CategoryPage />
      </Layout>
    ),
  },
  {
    path: "/blog/:id",
    element: <BlogDetail />,
  },
]);