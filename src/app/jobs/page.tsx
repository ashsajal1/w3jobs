import dynamic from 'next/dynamic';
import prisma from "@/lib/prisma";
import type { Metadata, ResolvingMetadata } from 'next';
import Loading from './loading';

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string }
}

const fetchJobs = async (tags: string[] = [], filters: any = {}) => {
    const { country, jobType, createdAt, salaryRange } = filters;

    let whereClause: any = {
        AND: []
    };

    if (tags.length > 0) {
        const orConditions = tags.map(tag => ({
            OR: [
                { title: { contains: tag, mode: 'insensitive' as const } },
                { skills: { contains: tag, mode: 'insensitive' as const } },
                { description: { contains: tag, mode: 'insensitive' as const } }
            ]
        }));
        whereClause.AND.push({ OR: orConditions.flatMap(condition => condition.OR) });
    }

    if (country) whereClause.AND.push({ country: { contains: country, mode: 'insensitive' as const } });
    if (jobType) whereClause.AND.push({ jobType: { contains: jobType, mode: 'insensitive' as const } });

    if (createdAt) {
        const now = new Date();
        let dateFrom: Date | null = null;
        if (createdAt === 'Past month') {
            dateFrom = new Date(now.setMonth(now.getMonth() - 1));
        } else if (createdAt === 'Past week') {
            dateFrom = new Date(now.setDate(now.getDate() - 7));
        } else if (createdAt === 'Past 24 hours') {
            dateFrom = new Date(now.setDate(now.getDate() - 1));
        }
        if (dateFrom) {
            whereClause.AND.push({ createdAt: { gte: dateFrom } });
        }
    }

    if (salaryRange) {
        const minSalary = parseInt(salaryRange.replace('$', '').replace('+', ''));
        whereClause.AND.push({ minSalary: { gte: minSalary } });
    }

    const jobs = await prisma.job.findMany({
        where: whereClause.AND.length ? whereClause : undefined
    });

    return jobs;
};

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const searchJobParams = searchParams.search;
    const filters = {
        country: searchParams.country,
        jobType: searchParams.workType,
        createdAt: searchParams.datePosted,
        salaryRange: searchParams.salaryRange
    };

    let jobs;
    if (searchJobParams) {
        jobs = await fetchJobs(searchJobParams.split(" "), filters)
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
    const filters = {
        country: searchParams.country,
        jobType: searchParams.workType,
        createdAt: searchParams.datePosted,
        salaryRange: searchParams.salaryRange
    };
    // console.log("search params list : ", country, experience, workType, datePosted, salaryRange)
    const searchJobParams = searchParams.search;
    let jobs;
    if (searchJobParams) {
        jobs = await fetchJobs(searchJobParams.split(" "), filters)
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
