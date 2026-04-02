import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Enable2FA from "./Enable2FA";
import SignOutButton from "./SignOutButton";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <div className="p-10 text-center">
        <p>Please sign in first.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="bg-white p-6 rounded shadow max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">
          Welcome, {session.user.name ?? "User"}!
        </h1>

        <p className="text-gray-700 mb-4">
          Two-Factor Authentication Status:{" "}
          <span className="font-semibold">
            {session.user.twoFactorEnabled ? "Enabled" : "Not Enabled"}
          </span>
        </p>

        <Enable2FA session={session} />

        <SignOutButton />
      </div>
    </div>
  );
}