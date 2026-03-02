import Link from "next/link";

interface BlogPostCardProps {
  id: number;
  imageUrl: string;
  title: string;
  excerpt: string;
  date: string;
  featured?: boolean;
}

export function BlogPostCard({ id, imageUrl, title, excerpt, date, featured = false }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${id}`}>
      <article className="group cursor-pointer">
        <div className="space-y-3">
          {/* Image */}
          <div className="relative bg-gray-100 rounded overflow-hidden aspect-video">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            {featured && (
              <div className="flex items-center gap-2">
                <span className="text-sm">16:9</span>
                <span className="text-sm text-gray-400">Post Image</span>
              </div>
            )}
            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">{title}</h3>
            <p className="text-sm text-gray-600 line-clamp-2">{excerpt}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}