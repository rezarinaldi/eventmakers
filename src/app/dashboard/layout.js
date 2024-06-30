import Link from "next/link";
import { logoutAction } from "./action";

export default function Layout({ children }) {
  return (
    <main className="m-auto my-12 flex max-w-6xl gap-12">
      <aside className="w-[230px] space-y-4">
        <Link href="/">
          <div className="ml-2 text-lg font-bold tracking-tight text-white">
            Eventmakers.
          </div>
        </Link>
        <section className="ml-2 space-y-2 font-medium text-white">
          <Link href="/dashboard/events" className="block w-fit">
            Events
          </Link>
          <Link href="/dashboard/profile" className="block w-fit">
            Profile
          </Link>
        </section>
        <form action={logoutAction}>
          <button className="rounded-lg bg-slate-50 px-3 py-2 font-medium tracking-tight text-black">
            Log out
          </button>
        </form>
      </aside>
      <main className="w-[calc(100%-230px)]">{children}</main>
    </main>
  );
}
