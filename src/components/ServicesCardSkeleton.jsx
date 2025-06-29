
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ServicesCardSkeleton = () => {
  return (
    <div className="flex items-center gap-4 p-4 relative rounded-lg shadow backdrop-blur-sm">
      {/* Background Image Skeleton */}
      <div className="absolute inset-0 z-0 rounded-lg">
        <Skeleton height="100%" width="100%" style={{ borderRadius: '8px' }} />
      </div>

      {/* Gradient Overlay */}
      <div className="rounded-lg absolute z-10 inset-0 bg-gradient-to-r from-[#282828] via-[#28282880] to-transparent" />

      {/* Service image */}
      <div className="relative z-50 w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
        <Skeleton height="100%" width="100%" />
      </div>

      {/* Text info */}
      <div className="flex-1 z-50 space-y-2">
        <Skeleton height={20} width="60%" />
        <Skeleton height={15} width="90%" />
      </div>

      {/* Price */}
      <div className="flex flex-col items-start z-50 space-y-1">
        <Skeleton width={40} height={12} />
        <Skeleton width={50} height={16} />
      </div>
    </div>
  );
};

export default ServicesCardSkeleton;
