import ProductCategories from '@/components/organisms/ProductCategories';
import ProductFlowAllCaregories from '@/components/organisms/ProductFlowAllCaregories';

export default function Home() {
  return (
    <div>
      <main className="max-w-screen-xl mx-auto">
        <ProductCategories />
        <ProductFlowAllCaregories />
      </main>
    </div>
  );
}
