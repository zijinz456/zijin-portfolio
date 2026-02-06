import JsonLd from "@/components/JsonLd";

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Professional Experience',
  description: 'Zijin Zhang\'s professional journey — VectorPaths founder and Commonwealth Bank specialist.',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'VectorPaths — Founder & Product Lead',
      description: 'AI-powered adaptive learning platform with 2,138+ real exam questions.',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Commonwealth Bank — Customer Banking Specialist',
      description: 'Frontline banking experience identifying user friction and process gaps.',
    },
  ],
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <JsonLd data={jsonLd} />
      {children}
    </>
  );
}
