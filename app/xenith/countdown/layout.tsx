import type { Metadata } from 'next';
import React from 'react';

const DESCRIPTION = 'Xenith Countdown - The countdown to innovation begins! Join us on December 3, 2025, for Xenith at IIT Patna by STC Hybrid. Experience the future of technology and innovation.';

export const metadata: Metadata = {
    title: 'Countdown - Xenith | STC IITP',
    description: DESCRIPTION,
    keywords: ['xenith', 'countdown', 'stc', 'iit patna', 'iitp', 'tech event', 'technology', 'innovation', 'december 3'],
    openGraph: {
        title: 'Xenith Countdown - STC IITP Hybrid',
        description: DESCRIPTION,
        siteName: 'STC',
        images: [
            {
                url: '/xenith/logo.png',
                width: 1200,
                height: 630,
                alt: 'Xenith Countdown',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    icons: {
        icon: '/xenith/logo.png',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
        },
    },
};

export default function CountdownLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}
