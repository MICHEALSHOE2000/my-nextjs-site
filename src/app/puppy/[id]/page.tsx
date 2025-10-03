import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import PuppyDetail from '@/components/sections/puppy-detail';
import { FloatingPhone } from '@/components/ui/floating-phone';

interface PuppyPageProps {
  params: Promise<{ id: string }>;
}

export default async function PuppyPage({ params }: PuppyPageProps) {
  const { id } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50/30 to-background">
      <FloatingPhone />
      <Header />
      <main>
      <PuppyDetail puppyId={Number(id)} />
      </main>
      <Footer />
    </div>
  );
}
