import { EventCard } from "@/components/event-card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { prisma } from "@/utils/prisma";
import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function Home() {
  const events = await prisma.event.findMany({
    include: {
      author: true,
      participants: {
        select: {
          id: true,
        },
      },
    },
  });

  const user = await auth();

  return (
    <div className="m-auto flex min-h-screen max-w-6xl flex-col items-center justify-between py-8">
      <section className="space-y-24">
        <Header />
        <main className="space-y-24">
          <section className="space-y-6 text-balance text-center">
            <h1 className="text-8xl font-semibold tracking-tighter">
              Build an event, and invite your folks!
            </h1>
            <h3 className="text-lg text-slate-400">
              Sports? Webinar? Speech? Or even Gabutz? No Problem!
            </h3>
            {user ? (
              <Link href="/dashboard/events">
                <div className="flex justify-center">
                  <button className="my-3 rounded-full bg-white px-6 py-2.5 text-lg font-semibold tracking-tight text-black">
                    Start your first event!
                  </button>
                </div>
              </Link>
            ) : (
              <>
                <Link href="/login">
                  <div className="flex justify-center">
                    <button className="my-3 rounded-full bg-white px-6 py-2.5 text-lg font-semibold tracking-tight text-black">
                      Start your first event!
                    </button>
                  </div>
                </Link>
              </>
            )}
          </section>
          <section className="grid grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </section>
        </main>
      </section>
      <Footer />
    </div>
  );
}
