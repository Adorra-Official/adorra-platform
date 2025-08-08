import './globals.css';

export const metadata = {
  title: 'Adorra',
  description: 'Adorra frontend',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
