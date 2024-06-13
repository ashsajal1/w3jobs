import JobCard from "@/components/partials/job-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bookmark, Brain, BriefcaseBusinessIcon, Building, Ellipsis, MousePointerClick } from "lucide-react";
import { timeAgo } from "@/lib/utils";
import prisma from "@/lib/prisma";
import { Badge } from "@/components/ui/badge"

const fetchJobs = async () => {
    const jobs = await prisma.job.findMany();
    return jobs;
}

export default async function page({ searchParams }: any) {
    const jobs = await fetchJobs()
    let selectedJob = jobs[0];
    const id = searchParams.id;
    if (searchParams.id) {
        selectedJob = jobs.find(job => job.id === parseInt(searchParams.id)) || jobs[0];
    }

    return (
        <div className="flex w-full justify-between">
            <section className={`w-full border ${id ? 'hidden md:block' : ''}`}>
                <div className="w-full p-4">
                    {jobs.length} results found
                </div>

                <div className="flex flex-col">
                    {jobs.map(job => (
                        <JobCard job={job} key={job.id} />
                    ))}
                </div>
            </section>

            <section key={selectedJob.id} className={`w-full border p-4 ${id ? '' : 'hidden md:flex md:flex-col'}`}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>{selectedJob.companyName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <p>{selectedJob.companyName}</p>
                    </div>
                    <div>
                        <Button variant={'ghost'} size={'icon'}>
                            <Ellipsis />
                        </Button>
                    </div>
                </div>

                <div>
                    <h2 className="font-bold text-2xl mt-4">{selectedJob.title}</h2>
                    <div className="flex items-center gap-2 text-[12px]">
                        <span>{selectedJob.country}</span>
                        <span>{timeAgo(selectedJob.createdAt)}</span>
                        <span>{selectedJob.totalApplicants} Applicants</span>
                    </div>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <BriefcaseBusinessIcon />
                        <div className="flex items-center gap-2">
                            {selectedJob.minSalary && <p>
                                <span>${selectedJob.minSalary}</span>
                                <span> - </span>
                                <span>${selectedJob.maxSalary}</span>
                            </p>}
                            <Badge>{selectedJob.jobType}</Badge>

                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Building />
                        <div className="flex items-center gap-2">
                            <p>{selectedJob.employeesQuantity || '0-10'} employees</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div>
                            <Brain />
                        </div>
                        <div className="flex items-center gap-2">

                            <div className="flex-wrap flex gap-2">
                                {selectedJob.skills.split(" ").map(skill => (
                                    <Badge variant={'secondary'} key={skill}>{skill}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                    <Button size={'sm'}>
                        <MousePointerClick className="size-4 mr-1" />
                        <span>Apply</span>
                    </Button>
                    <Button size={'sm'} variant={'outline'}>
                        <Bookmark className="size-4 mr-1" />
                        <span>Save</span>
                    </Button>
                </div>

                <div className="mt-4">
                    <h3 className="text-xl font-bold">About the Job</h3>

                    <div>
                        <div className="mt-4">
                            <h4 className="font-bold">Description</h4>
                            <p className="text-sm">{selectedJob.description}</p>
                        </div>
                    </div>
                </div>


                <div className="mt-3 p-4 border rounded">
                    <h3 className="font-bold text-xl">About the company</h3>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>{selectedJob.companyName} Profile Photo</AvatarFallback>
                            </Avatar>
                            <p>{selectedJob.companyName}</p>
                        </div>

                        <Button size={'sm'} variant={'outline'}>Follow</Button>
                    </div>

                    <p className="text-sm mt-4">{selectedJob.companyDetails}</p>
                </div>
            </section>

        </div>
    )
}
