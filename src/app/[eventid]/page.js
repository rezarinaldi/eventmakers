import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { prisma } from "@/utils/prisma";
import { JoinForm } from "./join-form";

export default async function Page({ params }) {
  const event = await prisma.event.findFirst({
    where: {
      id: params.eventid,
    },

    include: {
      author: true,
      participants: true,
    },
  });

  return (
    <div className="m-auto min-h-screen max-w-6xl py-8">
      <section className="space-y-24">
        <Header />
        <h1 className="text-balance text-8xl font-semibold tracking-tighter text-white">
          {event.name}
        </h1>

        <main className="grid grid-cols-2 gap-8">
          <section className="space-y-6 text-balance">
            <h3 className="whitespace-pre-line text-lg font-normal text-white">
              {event.description}{" "}
            </h3>
            <div className="text-white">
              <h4>Event Author:</h4>
              <h3>{event.author.name}</h3>
            </div>
            <JoinForm eventId={event.id} />
          </section>
          <section className="space-y-6 text-white">
            <h3>Participants</h3>
            <ul>
              {event.participants.map((participant) => {
                return (
                  <li className="ml-3 list-item list-disc" key={participant.id}>
                    <div>{participant.name}</div>
                  </li>
                );
              })}
            </ul>
            {event.participants.length === 0 && "No one has joined yet"}
          </section>
        </main>
      </section>
      <Footer />
    </div>
  );
}
