"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sriLankaTime, setSriLankaTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const updateTime = () => {
      const formatted = new Date().toLocaleTimeString("en-LK", {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setSriLankaTime(formatted);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);
    const timeoutId = setTimeout(() => setIsLoading(false), 700);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main className="flex min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-black dark:text-zinc-50">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <div className="flex-1 px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        {/* Top bar / mobile toggle */}
        <div className="mb-4 flex items-center justify-between lg:mb-6">
          <button
            className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-600 shadow-sm hover:bg-zinc-100 lg:hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
            onClick={() => setSidebarOpen(true)}
          >
            Menu
          </button>
          <span className="text-xs text-zinc-500 sm:text-sm">
            Fully responsive hardcoded dashboard
          </span>
        </div>

        {isLoading ? (
          <div className="flex h-full min-h-[60vh] items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-blue-600" />
              <p className="text-xs text-zinc-500">Loading dashboard...</p>
            </div>
          </div>
        ) : (
          <div className="mx-auto w-full space-y-8">
          {/* Header */}
          <header className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-3xl font-semibold">Dashboard</h1>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                Simple hardcoded overview for Game Hut CRM.
              </p>
            </div>

            <button className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
              New Order
            </button>
          </header>

          {/* Summary cards */}
          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-xs font-medium text-zinc-500">
                Total Orders Today
              </p>
              <p className="mt-2 text-2xl font-semibold">27</p>
              <p className="mt-1 text-xs text-zinc-500">
                Orders placed today (demo)
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-xs font-medium text-zinc-500">
                Today Total Income (LKR)
              </p>
              <p className="mt-2 text-2xl font-semibold">145,300</p>
              <p className="mt-1 text-xs text-zinc-500">
                Estimated income today (demo)
              </p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-xs font-medium text-zinc-500">
                Sri Lanka Time
              </p>
              <p className="mt-2 text-2xl font-semibold tabular-nums">
                {sriLankaTime || "--:--:--"}
              </p>
              <p className="mt-1 text-xs text-zinc-500">Asia/Colombo</p>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="text-xs font-medium text-zinc-500">
                Recent Orders
              </p>
              <p className="mt-2 text-2xl font-semibold">3</p>
              <p className="mt-1 text-xs text-zinc-500">
                Last 3 orders placed (demo)
              </p>
            </div>
          </section>

          {/* Quick input / hardcoded fields */}
          <section className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-lg font-semibold">Quick Order (Hardcoded)</h2>
              <p className="text-xs text-zinc-500">
                These fields are only for UI demo. They are not connected to any
                backend.
              </p>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300">
                    Customer Name
                  </label>
                  <input
                    className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                    placeholder="e.g. John Perera"
                    defaultValue="Walk-in Customer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300">
                    Game Title
                  </label>
                  <input
                    className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                    placeholder="e.g. FIFA 24"
                    defaultValue="GTA V (PS5)"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
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
                      Price (LKR)
                    </label>
                    <input
                      type="number"
                      className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                      defaultValue={8500}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-600 dark:text-zinc-300">
                    Notes
                  </label>
                  <textarea
                    className="mt-1 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm outline-none focus:border-blue-500 dark:border-zinc-700"
                    rows={3}
                    placeholder="Optional notes about this order"
                    defaultValue="Customer wants home delivery within Colombo."
                  />
                </div>

                <button className="mt-2 w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                  Save (Not Connected)
                </button>
              </div>
            </div>

            {/* Recent hardcoded data */}
            <div className="space-y-4 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-900">
              <h2 className="text-lg font-semibold">Recent Orders (Hardcoded)</h2>
              <p className="text-xs text-zinc-500">
                Static demo data to visualize how real orders might look.
              </p>

              <div className="overflow-hidden rounded-md border border-zinc-200 text-sm dark:border-zinc-800">
                <div className="grid grid-cols-4 bg-zinc-100 px-3 py-2 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  <span>Customer</span>
                  <span className="text-center">Game</span>
                  <span className="text-center">Total (LKR)</span>
                  <span className="text-right">Status</span>
                </div>
                {[
                  {
                    customer: "Kasun Fernando",
                    game: "God of War Ragnarok",
                    total: "12,500",
                    status: "Completed",
                    statusColor: "text-emerald-500",
                  },
                  {
                    customer: "Online Order #218",
                    game: "Fortnite V-Bucks (5,000)",
                    total: "9,000",
                    status: "Pending",
                    statusColor: "text-amber-500",
                  },
                  {
                    customer: "Walk-in",
                    game: "PS5 Controller (Black)",
                    total: "19,900",
                    status: "Ready",
                    statusColor: "text-blue-500",
                  },
                ].map((order) => (
                  <div
                    key={order.customer + order.game}
                    className="grid grid-cols-4 border-t border-zinc-100 px-3 py-2 dark:border-zinc-800"
                  >
                    <span className="truncate">{order.customer}</span>
                    <span className="truncate text-center">{order.game}</span>
                    <span className="text-center">{order.total}</span>
                    <span
                      className={`text-right text-xs font-medium ${order.statusColor}`}
                    >
                      {order.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        )}
      </div>
    </main>
  );
}
