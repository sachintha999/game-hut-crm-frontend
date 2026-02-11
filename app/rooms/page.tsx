"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";

export default function RoomsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timeoutId);
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
              <p className="text-xs text-zinc-500">Loading rooms...</p>
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
                Rooms management (demo, not connected)
              </span>
            </div>

            {/* Header */}
            <header className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h1 className="text-3xl font-semibold">Rooms</h1>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Manage gaming rooms and availability for Game Hut CRM.
                </p>
              </div>
            </header>

            {/* Rooms form */}
            <section className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-lg font-semibold">Add / Update Room</h2>
              <p className="text-xs text-zinc-500">
                This section is only for UI demo. It is not connected to any
                backend.
              </p>

              <div className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300">
                      Room Name
                    </label>
                    <input
                      className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                      placeholder="e.g. PS5 Room 01"
                      defaultValue="PS5 Room 01"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300">
                      Room Type
                    </label>
                    <input
                      className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                      placeholder="e.g. PS5 / PC / VIP"
                      defaultValue="PS5"
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300">
                      Price per Hour (LKR)
                    </label>
                    <input
                      type="number"
                      className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                      defaultValue={1500}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300">
                      Capacity
                    </label>
                    <input
                      type="number"
                      className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                      defaultValue={4}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300">
                      Status
                    </label>
                    <select
                      className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                      defaultValue="available"
                    >
                      <option value="available">Available</option>
                      <option value="occupied">Occupied</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                  </div>
                </div>

                <button className="mt-2 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                  Save Room (Not Connected)
                </button>
              </div>
            </section>

            {/* Current rooms table */}
            <section className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-lg font-semibold">Current Rooms</h2>
              <p className="text-xs text-zinc-500">
                Static demo data to show how room information could appear.
              </p>

              <div className="overflow-hidden rounded-md border border-zinc-200 text-xs dark:border-zinc-800">
                <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
                  <thead className="bg-zinc-50 dark:bg-zinc-900/60">
                    <tr>
                      <th className="px-3 py-2 text-left font-medium text-zinc-600 dark:text-zinc-300">
                        Room
                      </th>
                      <th className="px-3 py-2 text-left font-medium text-zinc-600 dark:text-zinc-300">
                        Type
                      </th>
                      <th className="px-3 py-2 text-left font-medium text-zinc-600 dark:text-zinc-300">
                        Capacity
                      </th>
                      <th className="px-3 py-2 text-left font-medium text-zinc-600 dark:text-zinc-300">
                        Price / Hour (LKR)
                      </th>
                      <th className="px-3 py-2 text-left font-medium text-zinc-600 dark:text-zinc-300">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
                    <tr>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        PS5 Room 01
                      </td>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        PS5
                      </td>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        4
                      </td>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        1,500
                      </td>
                      <td className="px-3 py-2 text-emerald-500">Available</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        PC Room A
                      </td>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        PC
                      </td>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        6
                      </td>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        2,000
                      </td>
                      <td className="px-3 py-2 text-amber-500">Occupied</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        VIP Room
                      </td>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        PS5 / PC
                      </td>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        2
                      </td>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        3,500
                      </td>
                      <td className="px-3 py-2 text-red-500">Maintenance</td>
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
