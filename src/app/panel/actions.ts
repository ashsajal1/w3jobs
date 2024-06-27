"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const handleDelete = async (id: number) => {
  // console.log("deleted : " , id)
  const deletedJob = await prisma.job.delete({
    where: {
      id,
    },
  });

//   console.log("Deleted : ", deletedJob);
  revalidatePath("/panel")
};
