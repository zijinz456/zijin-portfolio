import JsonLd from "@/components/JsonLd";

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Zijin Zhang',
  description: 'Get in touch with Zijin Zhang via email or LinkedIn.',
  mainEntity: {
    '@type': 'Person',
    name: 'Zijin Zhang',
    email: 'zijinz456@gmail.com',
    sameAs: ['https://www.linkedin.com/in/zijin-zhang-2578b92b1'],
  },
};

export default function ContactLayout({
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
