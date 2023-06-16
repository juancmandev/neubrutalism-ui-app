import Header from '@/components/Header';
import clashDisplay from '@/styles/fonts';
import '@/styles/globals.css';

export const metadata = {};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${clashDisplay.variable} font-clashDisplay bg-soft`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
