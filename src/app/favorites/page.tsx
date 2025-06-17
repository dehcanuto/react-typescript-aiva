import FlowHeader from '@/components/molecules/FlowHeader';
import FavoriteFlow from '@/components/organisms/FavoriteFlow';

export default function SearchPage() {
  return (
    <div>
      <main className="max-w-screen-xl mx-auto">
        <section className="py-16">
          <FlowHeader title="Meus Favoritos" />
          <FavoriteFlow />
        </section>
      </main>
    </div>
  );
}
