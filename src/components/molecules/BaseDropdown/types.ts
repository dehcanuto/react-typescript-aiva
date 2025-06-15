import { ReactNode } from 'react';

export interface BaseDropdownPropType {
  trigger: (open: boolean) => ReactNode;
  children: ReactNode;
}
