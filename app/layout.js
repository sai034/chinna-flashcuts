import './globals.css';
import Sidebar from '../components/Sider';
import MobileMenu from '../components/MobileMenu';

export const metadata = {
  title: 'Chinna FlashCuts - Beauty & Wellness',
  description: 'A modern beauty and wellness platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col md:flex-row">
        <Sidebar />
        <MobileMenu />
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </body>
    </html>
  );
}