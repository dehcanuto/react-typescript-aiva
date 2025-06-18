import { IProduct } from '@/types/product';

export const product: IProduct = {
  id: 154,
  title: 'Sleek Modern Leather Sofa',
  slug: 'sleek-modern-leather-sofa',
  price: 53,
  description:
    'Enhance the elegance of your living space with our Sleek Modern Leather Sofa. Designed with a minimalist aesthetic, it features clean lines and a luxurious leather finish. The robust metal legs provide stability and support, while the plush cushions ensure comfort. Perfect for contemporary homes or office waiting areas, this sofa is a statement piece that combines style with practicality.',
  category: {
    id: 3,
    name: 'Furniture',
    slug: 'furniture',
    image: 'https://i.imgur.com/Qphac99.jpeg',
    creationAt: '2025-06-17T20:43:37.000Z',
    updatedAt: '2025-06-18T10:33:29.000Z',
  },
  images: [
    'https://i.imgur.com/Qphac99.jpeg',
    'https://i.imgur.com/dJjpEgG.jpeg',
    'https://i.imgur.com/MxJyADq.jpeg',
  ],
  creationAt: '2025-06-18T10:33:46.000Z',
  updatedAt: '2025-06-18T10:33:46.000Z',
};
