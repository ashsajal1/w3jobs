'use client'

import { useEffect, useState } from "react"
import { getJob } from './actions'
import { Job } from "@/lib/types";
import JobEditableBody from "./job-editable-body";

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
                <JobEditableBody selectedJob={job} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}
