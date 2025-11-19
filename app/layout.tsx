// This root layout is required by Next.js but should never render
// The middleware handles all routing and redirects / to /en
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // With localePrefix: "always", middleware handles all routing
  // This should never be reached, but Next.js requires a root layout
  return children;
}
