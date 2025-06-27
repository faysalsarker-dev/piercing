
import { useQuery } from "@tanstack/react-query";
import useApi from "../../../Hooks/useApi";
import Loading from "../../../components/loading/Loading";



export default function BlogPage({ slug }) {
const api = useApi();

    const { data:post, isLoading, isError } = useQuery({
    queryKey: ["blogs",slug],
    queryFn: async () => {
      const { data } = await api.get(
        `/blogs/${slug}?web=piercingsodermalm`
      );
      return data; 
    },
  });


if (isLoading) return <Loading/>;
if (isError) return <p className="text-center text-red-500">Error loading blog post.</p>;
  return (
  <div className="bg-background-secondary">
        <section className="max-w-4xl mx-auto px-4 py-10  text-white">
          {/* Blog Header */}
           <main className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold  mb-6">{post?.title}</h1>

      {post?.image && (
        <img
          src={`${import.meta.env.VITE_API_IMG}${post?.image}`}
          alt={post?.title}
   
          className="w-full h-auto rounded-xl shadow-md mb-10"
        />
      )}

      <article
        className="prose prose-lg prose-gray max-w-none blog-content"
        dangerouslySetInnerHTML={{ __html: post?.content }}
      />
    </main>
    
        
        </section>
  </div>
  );
}
