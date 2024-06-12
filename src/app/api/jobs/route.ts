import { type NextRequest } from "next/server";
import prisma from "../../../lib/client";

export async function GET() {
  const jobs = await prisma.job.findMany();
  return Response.json(jobs);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const {
    title,
    description,
    authorId,
    country,
    companyName,
    companyDetails,
    minSalary,
    maxSalary,
    totalApplicants,
    skills,
    url,
    employeesQuantity,
    jobType,
  } = data;
  const newJob = await prisma.job.create({
    data: {
      title,
      description,
      authorId,
      country,
      companyName,
      companyDetails,
      minSalary,
      maxSalary,
      totalApplicants,
      skills,
      url,
      employeesQuantity,
      jobType,
    },
  });
  return Response.json(newJob);
}
