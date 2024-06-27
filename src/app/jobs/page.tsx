import dynamic from 'next/dynamic';
import prisma from "@/lib/prisma";
import type { Metadata, ResolvingMetadata } from 'next';
import Loading from './loading';

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string }
}

const fetchJobs = async (tags: string[] = []) => {
    if (tags.length === 0) {
        return await prisma.job.findMany();
    }

    const orConditions = tags.map(tag => ({
        OR: [
            { title: { contains: tag, mode: 'insensitive' as const } },
            { skills: { contains: tag, mode: 'insensitive' as const } },
            { description: { contains: tag, mode: 'insensitive' as const } }
        ]
    }));

    const jobs = await prisma.job.findMany({
        where: {
            OR: orConditions.flatMap(condition => condition.OR)
        }
    });

    return jobs;
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const searchJobParams = searchParams.search;
    let jobs;
    if (searchJobParams) {
        jobs = await fetchJobs(searchJobParams.split(" "))
    } else {
        jobs = await fetchJobs();
    }

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

const JobPageBody = dynamic(() => import('@/app/jobs/jobsPageBody'), {
    loading: () => <Loading />,
});

export default async function page({ searchParams }: Props) {
    const { country, experience, workType, datePosted, salaryRange } = searchParams;
    // console.log("search params list : ", country, experience, workType, datePosted, salaryRange)
    const searchJobParams = searchParams.search;
    let jobs;
    if (searchJobParams) {
        jobs = await fetchJobs(searchJobParams.split(" "))
    } else {
        jobs = await fetchJobs();
    }

    let selectedJob = jobs[0];
    const id = searchParams.id;
    if (searchParams.id) {
        selectedJob = jobs.find(job => job.id === parseInt(searchParams.id)) || jobs[0];
    }

    return (
        <JobPageBody jobs={jobs} selectedJob={selectedJob} id={id} />
    );
}
