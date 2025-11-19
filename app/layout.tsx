// Root layout - required by Next.js but should never render
// With localePrefix: "always", proxy handles all routing
// This layout is only here because Next.js requires it
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Proxy redirects / to /en before this is called
  // This should never be reached for root path
  return children;
}
