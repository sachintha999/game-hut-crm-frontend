export default function LoadingAdmin() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-blue-600" />
        <p className="text-xs text-zinc-500">Loading admin page...</p>
      </div>
    </div>
  );
}

