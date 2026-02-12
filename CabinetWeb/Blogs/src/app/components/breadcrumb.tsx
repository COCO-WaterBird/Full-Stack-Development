import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      className="w-full flex flex-col text-sm mb-6 px-3 py-1 mt-0"
      style={{
        background: "#ffffff",
        border: "none",
        fontFamily:
          'Inter, Poppins, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
      }}
      aria-label="Breadcrumb"
    >
      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="flex items-center gap-1 text-[#2f4f5a] hover:text-[#2f4f5a] transition-colors"
        >
          <span className="text-[#2f4f5a]">Home</span>
        </Link>

        <div className="flex items-center gap-2">
          {items.length === 0
            ? null
            : items.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                  {item.href ? (
                    <Link
                      to={item.href}
                      className="text-[#2f4f5a] hover:text-[#2f4f5a] transition-colors whitespace-normal break-words"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-[#2f4f5a] font-medium whitespace-normal break-words">
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
        </div>
      </div>
    </nav>
  );
}
