'use client';

import { JSX } from 'react';

import BaseDropdown from '@/components/molecules/BaseDropdown';
import Image from 'next/image';

const HeaderProfile = (): JSX.Element => {
  return (
    <div>
      <BaseDropdown
        trigger={() => (
          <button
            type="button"
            className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900 gap-2"
          >
            <Image
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="Rounded avatar"
              className="size-6 rounded-full sm:me-1.5"
              width={24}
              height={24}
            />
            <span className="hidden sm:flex">My Account</span>
          </button>
        )}
      >
        <ul className="p-2 text-start text-sm font-medium text-gray-900">
          <li>
            <a
              href="#"
              className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
            >
              My Account
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
            >
              My Wallet
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
            >
              My Orders
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
            >
              Delivery Addresses
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
            >
              Helpdesk
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50"
            >
              Log Out
            </a>
          </li>
        </ul>
      </BaseDropdown>
    </div>
  );
};

export default HeaderProfile;
