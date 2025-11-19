import { redirect } from "next/navigation";

// Root layout - redirects to default locale
// Middleware should catch this first, but this is a fallback
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  redirect("/en");
}
