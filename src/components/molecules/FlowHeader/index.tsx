import { JSX } from 'react';
import Link from 'next/link';

const FlowHeader = ({
  title,
  url,
}: {
  title: string;
  url?: string | null;
}): JSX.Element => {
  return (
    <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
      <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
        {title}
      </h2>
      {url && (
        <Link
          href={{ pathname: url }}
          className="flex items-center text-base font-medium text-blue-500 hover:underline"
        >
          See more
        </Link>
      )}
    </div>
  );
};

export default FlowHeader;
