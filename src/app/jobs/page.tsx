import JobCard from "@/components/partials/job-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Bookmark, Brain, BriefcaseBusinessIcon, Building, Ellipsis, EyeIcon, MousePointerClick, ShareIcon } from "lucide-react";
import prisma from "../../../prisma/client";
import { timeAgo } from "@/lib/utils";


const fetchJobs = async () => {
    const jobs = await prisma.job.findMany();
    return jobs;
}

export default async function page({ searchParams }: any) {
    const jobs = await fetchJobs()
    let selectedJob = jobs[0]
    if (searchParams.id) {
        selectedJob = jobs.find(job => job.id === parseInt(searchParams.id))
    }
    console.log("Search params is ", searchParams)
    // console.log(jobs)
    console.log(selectedJob)
    return (
        <div className="flex w-full justify-between">
            <section className="w-full border">
                <div className="w-full p-4">
                    {jobs.length} results found
                </div>

                <div className="flex flex-col">
                    {jobs.map(job => (
                        <JobCard job={job} key={job.id} />
                    ))}
                </div>
            </section>

            <section key={selectedJob.id} className="w-full border hidden md:flex md:flex-col p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>{selectedJob.companyName} Profile Photo</AvatarFallback>
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
                        <span>{selectedJob.totalApplicants}</span>
                    </div>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <BriefcaseBusinessIcon />
                        <div className="flex items-center gap-2">
                            <p>{selectedJob.jobType}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Building />
                        <div className="flex items-center gap-2">
                            <p>{selectedJob.employeesQuantity} employees</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Brain />
                        <div className="flex items-center gap-2">
                            <p>Skills : </p>
                            <p>{selectedJob.skills.split(" ")}</p>
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
