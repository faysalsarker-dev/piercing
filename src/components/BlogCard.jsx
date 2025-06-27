
import { Link } from "react-router";
import striptags from "striptags";



export default function BlogCard({className,blog}) {
const rawContent = Array.isArray(blog?.content) ? blog.content.join(" ") : "";
const plainText = striptags(rawContent);
const preview = plainText.length > 150 ? plainText.slice(0, 10) + "..." : plainText;

const formattedDate = new Date(blog?.createdAt).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

  return (
    <div className={`card shadow-xl hover:shadow-2xl transition duration-300 p-2 ${className}`}>
      <figure className="relative w-full h-48">
        <img
          src={`${import.meta.env.VITE_API_IMG}${blog?.image}`}
          alt={blog?.title}
          fill
          className="object-cover rounded-xl"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{blog?.title}</h2>
        <p className="text-sm text-gray-500">{formattedDate}</p>
        <p className="line-clamp-3">{preview}</p>
  
        <div className="card-actions justify-end">
          <Link to={`/blog/${blog?.slug}`} className="btn btn-sm btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
