import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PageAnimator from '@/components/layout/PageAnimator';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const lora = Lora({ subsets: ['latin'], variable: '--font-serif', weight: ['400', '700'] });

export const metadata: Metadata = {
  title: {
    default: 'Arkitektura Digital',
    template: '%s | Arkitektura Digital',
  },
  description: 'Merancang Masa Depan Ruang Hidup. Studio arsitektur modern yang berfokus pada desain inovatif dan berkelanjutan.',
  keywords: ['arsitektur', 'desain interior', 'visualisasi 3d', 'studio arsitektur', 'arkitektura digital'],
  authors: [{ name: 'Arkitektura Digital' }],
  creator: 'Arkitektura Digital',
  // Add more metadata as needed: openGraph, twitter, icons, etc.
  openGraph: {
    title: 'Arkitektura Digital',
    description: 'Merancang Masa Depan Ruang Hidup.',
    type: 'website',
    locale: 'id_ID',
    // url: 'https://yourdomain.com', // Replace with your actual domain
    // siteName: 'Arkitektura Digital',
    // images: [
    //   {
    //     url: 'https://yourdomain.com/og-image.jpg', // Replace with your OG image URL
    //     width: 1200,
    //     height: 630,
    //     alt: 'Arkitektura Digital Hero Image',
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.variable} ${lora.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <PageAnimator>
            <main className="min-h-screen pt-16 md:pt-20"> {/* Adjust pt based on header height */}
              {children}
            </main>
          </PageAnimator>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
