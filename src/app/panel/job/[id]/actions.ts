"use server";

import prisma from "@/lib/prisma";

export const getJob = async (id: number) => {
  const job = await prisma.job.findUnique({
    where: {
      id: id,
    },
  });

  return job;
};
