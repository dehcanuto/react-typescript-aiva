import SkeletonProductCard from '@/components/molecules/SkeletonProductCard';

export default function Loading() {
  return (
    <section className="sm:py-16 antialiased">
      <div>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="max-w-md sm:max-w-lg mx-auto">
            <div>
              <div className="rounded-lg bg-white" role="tabpanel">
                <span className="w-full mx-auto" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <span className="flex size-16 bg-slate-200 rounded"></span>
              <span className="flex size-16 bg-slate-200 rounded"></span>
              <span className="flex size-16 bg-slate-200 rounded"></span>
            </div>
          </div>
          <div className="flex flex-col max-w-md sm:my-auto gap-4">
            <span className="w-fit bg-slate-100 text-slate-700 text-sm font-semibold me-2 px-2.5 py-0.5 rounded" />
            <span className="mt-4 text-xl font-bold text-gray-900" />
            <span className="text-sm text-slate-500" />

            <span className="mt-6 text-2xl font-extrabold text-gray-900" />

            <div className="mt-6 sm:gap-4 sm:flex sm:items-center sm:mt-8">
              <div className="sm:gap-4 sm:items-center sm:flex">
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto my-16">
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonProductCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
