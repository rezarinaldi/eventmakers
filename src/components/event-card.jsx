import Link from "next/link";

export const EventCard = ({ event }) => {
  return (
    <Link href={`/${event.id}`}>
      <main className="relative h-72 rounded-xl bg-yellow-300 transition duration-150 hover:bg-yellow-400 hover:shadow-xl">
        <div className="absolute right-4 top-4 w-fit rounded-lg bg-white p-2 text-sm font-semibold text-black">
          {event.city}
        </div>
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="text-lg font-semibold text-black">{event.name}</h1>
          <p className="text-black">{event.author.name}</p>
          <p className="mt-2 text-sm font-semibold tracking-tight text-slate-700">
            {event.participants.length > 0
              ? `${event.participants.length} has
            joined`
              : "No one has joined yet"}
          </p>
        </div>
      </main>
    </Link>
  );
};
