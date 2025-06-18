import { JSX } from 'react';

const SkeletonCategoryWidget = (): JSX.Element => {
  return (
    <div className="animate-pulse">
      <div className="flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 gap-4">
        <span className="size-10 bg-slate-200 rounded-full"></span>
        <span className="flex w-40 h-4 bg-slate-200 rounded"></span>
      </div>
    </div>
  );
};

export default SkeletonCategoryWidget;
