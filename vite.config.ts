// Vercel deployment: uses TanStack Start's native Nitro Vercel preset.
// Nitro outputs to .vercel/output/ which Vercel auto-detects.
// Do NOT add @cloudflare/vite-plugin here — it breaks Vercel builds.
import { defineConfig } from "@tanstack/react-start/config";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  vite: {
    plugins: [tailwindcss(), tsConfigPaths()],
  },
  server: {
    preset: "vercel",
  },
});
