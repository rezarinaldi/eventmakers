import { auth } from "@/lib/auth";
import Link from "next/link";

export const Header = async () => {
  const user = await auth();

  return (
    <header className="flex items-center justify-between rounded-full bg-yellow-300 p-3 text-black shadow-lg shadow-yellow-700">
      <Link href="/">
        <div className="ml-3 text-lg font-bold tracking-tighter">
          Eventmakers.
        </div>
      </Link>
      <div className="flex items-center gap-4 font-semibold tracking-tight">
        <div>Event</div>
        <div>Popular</div>
        {user ? (
          <Link href="/dashboard/events">
            <button className="rounded-full bg-black px-4 py-2 text-white">
              Dashboard
            </button>
          </Link>
        ) : (
          <>
            <Link href="/login">
              <div>Log in</div>
            </Link>
            <Link href="/register">
              <button className="rounded-full bg-black px-4 py-2 text-white">
                Get started
              </button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
