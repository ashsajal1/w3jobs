import JobUpdateCard from "@/components/partials/job-update-card";
import prisma from "@/lib/prisma";

const fetchJobs = async () => {
    const jobs = await prisma.job.findMany();
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
