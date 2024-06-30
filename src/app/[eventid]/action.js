"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function joinEventAction(_, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const eventId = formData.get("eventId");

  if (!name || !email || !eventId) {
    return {
      success: false,
      message: "Please fill all the fields",
    };
  }

  await prisma.participant.create({
    data: {
      name,
      email,
      eventId,
    },
  });

  revalidatePath("/[eventid]", "page");

  return {
    success: true,
    message: "Event joined",
  };
}
