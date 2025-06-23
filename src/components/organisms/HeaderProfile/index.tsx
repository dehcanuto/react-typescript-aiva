'use client';

import { JSX } from 'react';
import Image from 'next/image';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import BaseDropdown from '@/components/molecules/BaseDropdown';
import { logout } from '@/store/auth';
import { FiUser } from 'react-icons/fi';
import Link from 'next/link';

const HeaderProfile = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user ? (
        <BaseDropdown
          trigger={() => (
            <button
              type="button"
              className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 text-sm font-medium leading-none text-gray-900 gap-2"
            >
              <Image
                src={user.avatar}
                alt={user.name}
                className="size-6 rounded-full sm:me-1.5"
                width={24}
                height={24}
              />
              <span className="hidden sm:flex">{user.name}</span>
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
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                Log Out
              </button>
            </li>
          </ul>
        </BaseDropdown>
      ) : (
        <Link
          href="/signin"
          className="flex items-center ms-2 text-sm font-medium leading-none text-gray-900 cursor-pointer gap-3"
        >
          <FiUser className="text-lg" />
          <span className="hidden sm:flex">Signin</span>
        </Link>
      )}
    </div>
  );
};

export default HeaderProfile;
