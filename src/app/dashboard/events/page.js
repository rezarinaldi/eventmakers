import { EventCard } from "@/components/event-card";
import { auth } from "@/lib/auth";
import { prisma } from "@/utils/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await auth();

  if (!user) {
    redirect("/");
  }

  const events = await prisma.event.findMany({
    where: {
      authorId: user.id,
    },
    include: {
      author: true,
      participants: {
        select: {
          id: true,
        },
      },
    },
  });

  return (
    <main className="space-y-12">
      <section className="flex items-center justify-between">
        <h3 className="text-white">My Events</h3>
        <Link href="/dashboard/events/new">
          <button>Create event</button>
        </Link>
      </section>
      <section className="grid grid-cols-2 gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </section>{" "}
    </main>
  );
}
