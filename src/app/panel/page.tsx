"use server"
import JobUpdateCard from "@/app/panel/job-update-card";
import prisma from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
const fetchJobs = async () => {
    const { userId } = auth();
    const jobs = await prisma.job.findMany({
        where: {
            authorId: userId || "1234"
        }
    });
    return jobs;
};

export default async function page() {
    const jobs = await fetchJobs();
    return (
        <div>
            <h1>Welcome to panel!</h1>
            <div>
                <h2>List of jobs</h2>
                <div>
                    {jobs.map(job => (
                        <JobUpdateCard key={job.id} job={job} />
                    ))}
                </div>
            </div>
        </div>
    )
}
