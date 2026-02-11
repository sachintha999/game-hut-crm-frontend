"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";

export default function AdminPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="flex min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        {isLoading ? (
          <div className="flex h-full min-h-[60vh] items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-blue-600" />
              <p className="text-xs text-zinc-500">Loading admin page...</p>
            </div>
          </div>
        ) : (
          <div className="mx-auto w-full space-y-8">
            {/* Top bar / mobile toggle */}
            <div className="mb-4 flex items-center justify-between lg:mb-6">
              <button
                className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-600 shadow-sm hover:bg-zinc-100 lg:hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                onClick={() => setSidebarOpen(true)}
              >
                Menu
              </button>
              <span className="text-xs text-zinc-500 sm:text-sm">
                Admin management (demo, not connected)
              </span>
            </div>

            {/* Header */}
            <header className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h1 className="text-3xl font-semibold">Admin</h1>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Manage admin login details for Game Hut CRM.
                </p>
              </div>
            </header>

            {/* Admin form */}
            <section className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-lg font-semibold">Add / Update Admin</h2>
              <p className="text-xs text-zinc-500">
                This section is only for UI demo. It is not connected to any
                backend.
              </p>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300">
                    Admin Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                    placeholder="e.g. admin@gamehut.lk"
                    defaultValue="admin@gamehut.lk"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300">
                      Admin Password
                    </label>
                    <input
                      type="password"
                      className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                      placeholder="Enter password"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                      placeholder="Re-enter password"
                    />
                  </div>
                </div>

                <button className="mt-2 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                  Add Admin (Not Connected)
                </button>
              </div>
            </section>

            {/* Current admin details */}
            <section className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-lg font-semibold">Current Admin Details</h2>
              <p className="text-xs text-zinc-500">
                Static demo details to show how admin information could appear.
              </p>

              <div className="overflow-hidden rounded-md border border-zinc-200 text-xs dark:border-zinc-800">
                <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
                  <thead className="bg-zinc-50 dark:bg-zinc-900/60">
                    <tr>
                      <th className="px-3 py-2 text-left font-medium text-zinc-600 dark:text-zinc-300">
                        Email
                      </th>
                      <th className="px-3 py-2 text-left font-medium text-zinc-600 dark:text-zinc-300">
                        Role
                      </th>
                      <th className="px-3 py-2 text-left font-medium text-zinc-600 dark:text-zinc-300">
                        Status
                      </th>
                      <th className="px-3 py-2 text-left font-medium text-zinc-600 dark:text-zinc-300">
                        Last Updated
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
                    <tr>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        admin@gamehut.lk
                      </td>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        Super Admin
                      </td>
                      <td className="px-3 py-2 text-emerald-500">Active</td>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        2026-01-15 (Demo)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
