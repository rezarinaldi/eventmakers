"use client";

import Link from "next/link";
import { useActionState } from "react";
import { registerAction } from "./action";

export default function Page() {
  const [state, formAction, pending] = useActionState(registerAction, null);

  return (
    <main className="space-y-6">
      <section>
        <h3>Register</h3>
        <p>Create an account to continue</p>
      </section>
      <form action={formAction} className="space-y-2">
        <input name="name" placeholder="Name" />
        <input name="email" placeholder="Email" type="email" />
        <input name="password" placeholder="Password" type="password" />
        <button disabled={pending} className="w-full">
          Register
        </button>
        {state?.success === "false" && <p>{state.message}</p>}
        {state?.success === "true" && <p>Register success, please login</p>}
      </form>
      <p>
        Have an account?{" "}
        <Link
          href="/login"
          className="hover:underline hover:underline-offset-4"
        >
          Log in
        </Link>
      </p>
    </main>
  );
}
