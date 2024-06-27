'use client'

import { useEffect, useState } from "react"
import { getJob } from './actions'
import { Job } from "@/lib/types";

type Params = {
    params: {
        id: string;
    }
}
export default function Page({ params }: Params) {
    const [job, setJob] = useState<null | Job>(null);

    useEffect(() => {
        const fetchJob = async () => {
            const jobData = await getJob(parseInt(params.id));
            setJob(jobData);
        };

        fetchJob();
    }, [params.id]);

    return (
        <div>
            <h1>Job Details</h1>
            {job ? (
                <div>
                    <h2>{job.title}</h2>
                    <p>{job.description}</p>
                    <p>{job.companyName}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
