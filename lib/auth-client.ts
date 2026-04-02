import { createAuthClient } from "better-auth/react";
import { twoFactorClient } from "better-auth/plugins";

// On utilise NEXT_PUBLIC_BETTER_AUTH_URL si défini, sinon localhost pour dev
const baseURL =
  process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000";

export const authClient = createAuthClient({
  baseURL,
  plugins: [twoFactorClient()],
});