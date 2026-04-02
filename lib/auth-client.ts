import { createAuthClient } from "better-auth/react";
import { twoFactorClient } from "better-auth/plugins";

// Détection si on est en local ou en prod
const isLocal = typeof window !== "undefined" && window.location.hostname === "localhost";

export const authClient = createAuthClient({
  baseURL: isLocal
    ? "http://localhost:3000" // backend local
    : "https://lucas-heymans-drawing-v2.vercel.app", // backend prod
  plugins: [twoFactorClient()],
});