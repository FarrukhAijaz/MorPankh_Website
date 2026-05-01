import { notFound } from 'next/navigation';
import { menuItems } from '@/data/menu';
import DishDetailClient from '@/components/DishDetailClient';
import type { Metadata } from 'next';

interface Props {
  params: { 'item-id': string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const item = menuItems.find((i) => i.id === params['item-id']);
  if (!item) return { title: 'Dish Not Found — Hamari Mehfil' };
  return {
    title: `${item.name} — Hamari Mehfil`,
    description: item.shortDescription,
  };
}

export function generateStaticParams() {
  return menuItems.map((item) => ({ 'item-id': item.id }));
}

export default function DishDetailPage({ params }: Props) {
  const item = menuItems.find((i) => i.id === params['item-id']);
  if (!item) notFound();
  return <DishDetailClient item={item!} />;
}
