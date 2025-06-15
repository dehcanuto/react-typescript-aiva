'use client';

import { JSX, useCallback, useEffect, useRef, useState } from 'react';
import { BaseDropdownPropType } from './types';

const BaseDropdown = ({
  trigger,
  children,
}: BaseDropdownPropType): JSX.Element => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <div ref={ref}>
      <span onClick={toggle}>{trigger(open)}</span>
      {open && (
        <div className="absolute bg-white mt-2 shadow z-50">{children}</div>
      )}
    </div>
  );
};

export default BaseDropdown;
