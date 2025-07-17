import './globals.css';
import Sidebar from '../components/Sider';
import MobileMenu from '../components/MobileMenu';

export const metadata = {
  title: `Best Hair Salon in Tirupati | Chinna's Flash Cutss - Beauty & Wellness`,
  description: `Chinna's Flash Cutss in Balaji Colony, Tirupati offers expert haircuts, facials, body massage, and beauty & wellness services. Book your appointment today!`,

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <link rel="icon" type="image/x-icon"  href="/favicon.ico" />
       {/* ✅ Add Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HairSalon",
            "name": "Chinna's Flash Cutss",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Balaji Colony",
              "addressLocality": "Tirupati",
              "addressRegion": "Andhra Pradesh",
              "postalCode": "517501",
              "addressCountry": "IN"
            },
            "telephone": "+91-9876543210",
            "url": "https://chinnasflashcutss.in",
            "openingHours": "Mo-Su 07:30-21:30"
          })
        }} />
      </head>
      <body className="flex flex-col md:flex-row">
        <Sidebar />
        <MobileMenu />
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </body>
    </html>
  );
}