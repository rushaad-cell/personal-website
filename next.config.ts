import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure proper routing for Netlify
  trailingSlash: false,
};

export default withNextIntl(nextConfig);
