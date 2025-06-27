"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import BlogCard from "./BlogCard";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useApi from './../Hooks/useApi';

const LIMIT = 6; 

const AllBlogs = () => {
    const api = useApi()
  const [page, setPage] = useState(1);
  const web = "piercingsodermalm";

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs", page, web],
    queryFn: async () => {
      const { data } = await api.get(
        `/blogs?page=${page}&limit=${LIMIT}`
      );
      return data; 
    },
  });
  const totalPages = data?.totalPages || 0;

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Loading State */}
      {isLoading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {Array.from({ length: LIMIT }).map((_, idx) => (
            <div key={idx} className="p-4 bg-background rounded-lg">
              <Skeleton height={180} />
              <Skeleton height={20} className="mt-4" />
              <Skeleton height={15} count={3} className="mt-2" />
            </div>
          ))}
        </div>
      ) : isError ? (
        <p className="text-center text-red-500 mt-10">Error loading blogs.</p>
      ) : data?.blogs?.length === 0 ? (
        <p className="text-center text-gray-400 mt-10">No blogs found.</p>
      ) : (
        <>
          {/* Blog Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {data?.blogs?.map((blog) => (
              <BlogCard key={blog._id} blog={blog} className={"bg-background"} />
            ))}
          </div>

          {/* Pagination */}
          {
            totalPages > 1 && (
            <div className="flex justify-center mt-6">
            <div className="join">
              {Array.from({ length: totalPages }).map((_, i) => {
                const current = i + 1;
                return (
                  <button
                    key={current}
                    className={`join-item btn ${
                      current === page ? "btn-primary" : ""
                    }`}
                    onClick={() => setPage(current)}
                  >
                    {current}
                  </button>
                );
              })}
            </div>
          </div>
            )
          }
         
        </>
      )}
    </div>
  );
};

export default AllBlogs;
