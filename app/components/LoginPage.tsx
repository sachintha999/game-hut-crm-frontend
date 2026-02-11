"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    router.push("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center bg-zinc-50 px-4 font-sans dark:bg-black">
      <div className="flex w-full overflow-hidden rounded-2xl bg-white shadow-xl dark:bg-zinc-900">
        {/* Left side image */}
        <div className="relative hidden w-1/2 items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-8 md:flex">
          <div className="absolute inset-0 opacity-40">
            <div className="pointer-events-none absolute -left-10 top-10 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-indigo-500/30 blur-3xl" />
          </div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <Image
              src="/gamehut-login.svg"
              alt="Game Hut CRM illustration"
              width={260}
              height={260}
              priority
            />
            <h1 className="mt-6 text-xl font-semibold text-zinc-50">
              Game Hut CRM
            </h1>
            <p className="mt-2 max-w-xs text-xs text-zinc-300">
              Track orders, manage rooms, and keep your game shop running
              smoothly from one simple dashboard.
            </p>
          </div>
        </div>

        {/* Right side login form */}
        <div className="flex w-full flex-col justify-center p-8 md:w-1/2 md:p-10">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              Welcome back
            </h2>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Sign in to access your Game Hut CRM dashboard.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50"
                placeholder="admin@gamehut.lk"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Password
              </label>
              <input
                type="password"
                className="w-full rounded-md border border-zinc-300 px-3 py-2 text-sm outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-50"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
