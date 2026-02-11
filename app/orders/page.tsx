"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";

export default function OrdersPage() {
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
              <p className="text-xs text-zinc-500">Loading orders...</p>
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
                Orders management (demo, not connected)
              </span>
            </div>

            {/* Header */}
            <header className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h1 className="text-3xl font-semibold">Orders</h1>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                  Manage recent orders for Game Hut CRM.
                </p>
              </div>
            </header>

            {/* Orders form */}
            <section className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-lg font-semibold">Add / Update Order</h2>
              <p className="text-xs text-zinc-500">
                This section is only for UI demo. It is not connected to any
                backend.
              </p>

              <div className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300">
                      Customer Name
                    </label>
                    <input
                      className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                      placeholder="e.g. Kasun Fernando"
                      defaultValue="Walk-in Customer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300">
                      Game / Item
                    </label>
                    <input
                      className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                      placeholder="e.g. God of War Ragnarok"
                      defaultValue="GTA V (PS5)"
                    />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300">
                      Quantity
                    </label>
                    <input
                      type="number"
                      className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                      defaultValue={1}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300">
                      Total (LKR)
                    </label>
                    <input
                      type="number"
                      className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                      defaultValue={12500}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300">
                      Status
                    </label>
                    <select
                      className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                      defaultValue="completed"
                    >
                      <option value="completed">Completed</option>
                      <option value="pending">Pending</option>
                      <option value="ready">Ready</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>

                <button className="mt-2 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                  Save Order (Not Connected)
                </button>
              </div>
            </section>

            {/* Current orders table */}
            <section className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-lg font-semibold">Recent Orders</h2>
              <p className="text-xs text-zinc-500">
                Static demo data to show how orders information could appear.
              </p>

              <div className="overflow-hidden rounded-md border border-zinc-200 text-xs dark:border-zinc-800">
                <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
                  <thead className="bg-zinc-50 dark:bg-zinc-900/60">
                    <tr>
                      <th className="px-3 py-2 text-left font-medium text-zinc-600 dark:text-zinc-300">
                        Customer
                      </th>
                      <th className="px-3 py-2 text-left font-medium text-zinc-600 dark:text-zinc-300">
                        Game / Item
                      </th>
                      <th className="px-3 py-2 text-center font-medium text-zinc-600 dark:text-zinc-300">
                        Total (LKR)
                      </th>
                      <th className="px-3 py-2 text-left font-medium text-zinc-600 dark:text-zinc-300">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
                    <tr>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        Kasun Fernando
                      </td>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        God of War Ragnarok
                      </td>
                      <td className="px-3 py-2 text-center text-zinc-800 dark:text-zinc-100">
                        12,500
                      </td>
                      <td className="px-3 py-2 text-emerald-500">Completed</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        Online Order #218
                      </td>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        Fortnite V-Bucks (5,000)
                      </td>
                      <td className="px-3 py-2 text-center text-zinc-800 dark:text-zinc-100">
                        9,000
                      </td>
                      <td className="px-3 py-2 text-amber-500">Pending</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        Walk-in
                      </td>
                      <td className="px-3 py-2 text-zinc-800 dark:text-zinc-100">
                        PS5 Controller (Black)
                      </td>
                      <td className="px-3 py-2 text-center text-zinc-800 dark:text-zinc-100">
                        19,900
                      </td>
                      <td className="px-3 py-2 text-blue-500">Ready</td>
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

