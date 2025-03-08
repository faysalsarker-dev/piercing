import React from "react";

const GallerySection = () => {
  const galleryImages = [
    { id: 1, url: "https://cdn.shopify.com/s/files/1/2065/1597/files/body-piercing-jewelry-pierced-mississauga_48_1024x1024.jpg?v=1572721013", size: "row-span-2 h-[300px]" },
    { id: 2, url: "https://cdn.shopify.com/s/files/1/2065/1597/files/body-piercing-jewelry-pierced-mississauga_48_1024x1024.jpg?v=1572721013", size: "h-[200px]" },
    { id: 3, url: "https://cdn.shopify.com/s/files/1/2065/1597/files/body-piercing-jewelry-pierced-mississauga_48_1024x1024.jpg?v=1572721013", size: "row-span-2 h-[300px]" },
    { id: 4, url: "https://cdn.shopify.com/s/files/1/2065/1597/files/body-piercing-jewelry-pierced-mississauga_48_1024x1024.jpg?v=1572721013", size: "h-[250px]" },
    { id: 5, url: "https://cdn.shopify.com/s/files/1/2065/1597/files/body-piercing-jewelry-pierced-mississauga_48_1024x1024.jpg?v=1572721013", size: "row-span-2 h-[350px]" },
    { id: 6, url: "https://cdn.shopify.com/s/files/1/2065/1597/files/body-piercing-jewelry-pierced-mississauga_48_1024x1024.jpg?v=1572721013", size: "h-[220px]" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-primary mb-6 text-center">
        Piercing Gallery
      </h2>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className={`overflow-hidden rounded-xl shadow-lg ${image.size}`}
          >
            <img
              src={image.url}
              alt={`Piercing ${image.id}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
