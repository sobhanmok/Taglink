import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Taglink — کسب‌وکارت را بهتر دیده کن",
  description:
    "Taglink یک پلتفرم برای کمک به افزایش فروش و بهتر دیده‌شدن کسب‌وکارهاست.",
  metadataBase: new URL("https://taglink.ir"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}