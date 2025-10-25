import "./globals.css";
import AppShell from "@/components/AppShell";

export const metadata = {
  title: "BNIS - Connect Influencers with Sponsors",
  description: "Marketplace with wallet payments, campaign management, and analytics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900 antialiased">
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
