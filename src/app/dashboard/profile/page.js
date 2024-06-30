import { auth } from "@/lib/auth";
import { prisma } from "@/utils/prisma";

export default async function Page() {
  const user = await auth();

  const userData = await prisma.user.findFirst({
    where: {
      id: user.id,
    },
  });

  return (
    <main className="m-auto max-w-xl space-y-8">
      <section>
        <h3 className="text-white">Edit Profile</h3>
      </section>
      <form className="space-y-2">
        <input name="name" placeholder="name" defaultValue={userData?.name} />
        <input
          name="email"
          placeholder="Email"
          type="email"
          defaultValue={userData?.email}
        />

        <button>Save Profile</button>
      </form>
    </main>
  );
}
