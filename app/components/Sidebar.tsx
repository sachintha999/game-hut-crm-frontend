"use client";

import { usePathname, useRouter } from "next/navigation";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const baseButtonClasses =
    "flex w-full items-center rounded-md px-3 py-2 text-left text-xs font-medium transition-colors";
  const inactiveClasses =
    "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900";
  const activeClasses =
    "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900";

  return (
    <>
      {/* Sidebar overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-zinc-200 bg-white px-4 py-6 text-sm shadow-lg transition-transform duration-200 dark:border-zinc-800 dark:bg-zinc-950 lg:static lg:z-auto lg:translate-x-0 lg:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <span className="text-lg font-semibold">Game Hut CRM</span>
          <button
            className="rounded-md px-2 py-1 text-xs text-zinc-500 hover:bg-zinc-100 lg:hidden dark:hover:bg-zinc-900"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        <nav className="space-y-1">
          <button
            className={`${baseButtonClasses} ${
              pathname === "/dashboard" ? activeClasses : inactiveClasses
            }`}
            onClick={() => router.push("/dashboard")}
          >
            <span>Dashboard</span>
          </button>
          <button
            className={`${baseButtonClasses} ${
              pathname === "/orders" ? activeClasses : inactiveClasses
            }`}
            onClick={() => router.push("/orders")}
          >
            <span>Orders</span>
          </button>
          <button
            className={`${baseButtonClasses} ${
              pathname === "/admin" ? activeClasses : inactiveClasses
            }`}
            onClick={() => router.push("/admin")}
          >
            <span>Admin</span>
          </button>
          <button
            className={`${baseButtonClasses} ${
              pathname === "/rooms" ? activeClasses : inactiveClasses
            }`}
            onClick={() => router.push("/rooms")}
          >
            <span>Rooms</span>
          </button>
        </nav>

        <div className="mt-auto space-y-2 border-t border-zinc-200 pt-4 text-xs text-zinc-500 dark:border-zinc-800">
          <p className="font-medium text-zinc-700 dark:text-zinc-300">
            Signed in as
          </p>
          <p>admin@gamehut.lk</p>
        </div>
      </aside>
    </>
  );
}
