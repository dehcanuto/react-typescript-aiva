import { JSX } from 'react';

const SkeletonProductCard = (): JSX.Element => {
  return (
    <div className="animate-pulse p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="h-56 w-full bg-slate-200">
        <span className="mx-auto w-full h-56"></span>
      </div>
      <div className="flex flex-col mt-3 gap-3">
        <div className="flex items-center justify-between gap-4">
          <span className="flex w-20 h-4 bg-slate-200 me-2 px-2.5 py-0.5 rounded"></span>
          <span className="size-6 bg-slate-200 rounded-full"></span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="flex w-50 h-4 bg-gray-900/10 rounded"></span>
          <span className="flex w-36 h-4 bg-gray-900/10 rounded"></span>
        </div>
        <span className="flex mt-8 ms-auto w-24 h-6 text-2xl text-right font-extrabold leading-tight bg-gray-900/20 rounded"></span>
      </div>
    </div>
  );
};

export default SkeletonProductCard;
