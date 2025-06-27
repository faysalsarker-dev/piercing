

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 min-h-screen bg-background-secondary">
      <Skeleton height={40} width="70%" className="mb-6" />

      <Skeleton height={250} className="mb-10 rounded-xl" />

      <div className="space-y-4">
        <Skeleton count={3} />
        <Skeleton width="85%" />
        <Skeleton width="90%" />
      </div>
      <div className="space-y-4 my-4">
        <Skeleton count={3} />
        <Skeleton width="85%" />
        <Skeleton width="90%" />
      </div>
      <div className="space-y-4">
        <Skeleton count={3} />
        <Skeleton width="85%" />
        <Skeleton width="90%" />
      </div>
    </main>
  )
}
