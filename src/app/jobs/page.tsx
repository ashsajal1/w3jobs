import dynamic from 'next/dynamic';
import prisma from "@/lib/prisma";
import type { Metadata, ResolvingMetadata } from 'next';
import Loading from './loading';

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string }
}

const fetchJobs = async () => {
    const jobs = await prisma.job.findMany();
    return jobs;
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const jobs = await fetchJobs();
    let selectedJob: typeof jobs[0] | null;
    const id = searchParams.id;
    if (searchParams.id) {
        selectedJob = jobs.find(job => job.id === parseInt(id)) || jobs[0];
    } else {
        selectedJob = null;
    }

    if (selectedJob) {
        return {
            title: `${selectedJob.title} at ${selectedJob.companyName}`,
            description: selectedJob.description
        };
    }

    return {
        title: "Discover Your Next Career Move on w3jobs",
        description: "Unlock endless opportunities and take your career to new heights with w3jobs. As the leading platform for professionals, we connect you with top employers and the perfect job matches across various industries. Start your journey to success today.",
    };
}

const JobPageBody = dynamic(() => import('@/components/partials/jobsPageBody'), {
    loading: () => <Loading />,
});

export default async function page({ searchParams }: Props) {
    const jobs = await fetchJobs();
    let selectedJob = jobs[0];
    const id = searchParams.id;
    if (searchParams.id) {
        selectedJob = jobs.find(job => job.id === parseInt(searchParams.id)) || jobs[0];
    }

    return (
        <JobPageBody jobs={jobs} selectedJob={selectedJob} id={id} />
    );
}
