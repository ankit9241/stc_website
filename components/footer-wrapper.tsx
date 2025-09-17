'use client';

import dynamic from 'next/dynamic';

// Dynamically import the footer with SSR disabled to ensure client-side rendering
const Footer = dynamic(
  () => import('@/components/footer'),
  { ssr: false }
);

export function FooterWrapper() {
  return <Footer />;
}
