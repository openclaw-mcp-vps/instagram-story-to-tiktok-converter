import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instagram Story to TikTok Converter",
  description: "Automatically reformat Instagram Stories to TikTok's 9:16 vertical video format with optimal sizing and captions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="789ec444-8f69-4292-8ec7-3b8eaee1fe18"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
