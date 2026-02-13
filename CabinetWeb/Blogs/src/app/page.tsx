import { Layout } from "./components/layout";
import { BlogListing } from "./pages/blog-listing";
import { Breadcrumb } from "./components/breadcrumb";

export default function HomePage() {
  return (
    <Layout
      hideDividers
      mainPadding="pt-6"
      breadcrumb={<Breadcrumb items={[{ label: "Blog" }]} />}
    >
      <BlogListing />
    </Layout>
  );
}
