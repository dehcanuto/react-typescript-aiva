import { IProduct } from '@/types/product';

export interface ProductFlowPropsType {
  products: IProduct[];
  category: {
    name: string;
    slug?: string | null;
  };
}
