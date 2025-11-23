import type { Metadata } from "next";
import { Toaster } from 'react-hot-toast';
import "./globals.css";

export const metadata: Metadata = {
  title: "M.Video AR - Products in Augmented Reality",
  description: "Experience home appliances in your space with AR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: 'var(--color-card-bg)',
              color: 'var(--color-white)',
              border: '1px solid var(--color-primary-red)',
              fontFamily: 'var(--font-body)',
              padding: '1rem 1.5rem',
            },
          }}
        />
      </body>
    </html>
  );
}
