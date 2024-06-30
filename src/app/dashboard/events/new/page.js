"use client";

import { useActionState } from "react";
import { createEventAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(createEventAction, null);

  return (
    <main className="m-auto max-w-xl space-y-8">
      <section>
        <h3>Event details</h3>
        <p>Please fill all the fields</p>
      </section>
      <form action={formAction} className="space-y-2">
        <input name="name" placeholder="Event name" />
        <textarea name="description" placeholder="Event description" rows={6} />
        <select name="city">
          <option>Surabaya</option>
          <option>Jakarta</option>
          <option>Malang</option>
          <option>Batu</option>
          <option>Denpasar</option>
          <option>Yogyakarta</option>
        </select>
        <select name="isOnline">
          <option value={true}>The event would be online</option>
          <option value={false}>The event would be offline</option>
        </select>
        <input name="location" placeholder="Location / Url" />
        <button disabled={pending}>Create event</button>
        {!state?.success && <p>{state?.message}</p>}
        {state?.success && <p>{state?.message}</p>}
      </form>
    </main>
  );
}
