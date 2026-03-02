import { SiteLayout } from "./components/site-layout";
import { BlogListing } from "./pages/blog-listing";
import { Breadcrumb } from "./components/breadcrumb";

export default function HomePage() {
  return (
    <SiteLayout
      hideDividers
      mainPadding="pt-6"
      breadcrumb={<Breadcrumb items={[{ label: "Blog" }]} />}
    >
      <BlogListing />
    </SiteLayout>
  );
}
