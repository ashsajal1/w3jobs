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

export default async function page() {
    const jobs = await fetchJobs()
    console.log(jobs)
    return (
        <div className="flex w-full justify-between">
            <section className="w-full border">
                <div className="w-full p-4">
                    12 results found
                </div>

                <div className="flex flex-col">
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
            </section>

            {jobs.map(job => (
                <section key={job.id} className="w-full border hidden md:flex md:flex-col p-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>{job.companyName} Profile Photo</AvatarFallback>
                            </Avatar>
                            <p>{job.companyName}</p>
                        </div>
                        <div>
                            <Button variant={'ghost'} size={'icon'}>
                                <Ellipsis />
                            </Button>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-bold text-2xl mt-4">{job.title}</h2>
                        <div className="flex items-center gap-2 text-[12px]">
                            <span>{job.country}</span>
                            <span>{timeAgo(job.createdAt)}</span>
                            <span>{job.totalApplicants}</span>
                        </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <BriefcaseBusinessIcon />
                            <div className="flex items-center gap-2">
                                <p>{job.jobType}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Building />
                            <div className="flex items-center gap-2">
                                <p>{job.employeesQuantity} employees</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Brain />
                            <div className="flex items-center gap-2">
                                <p>Skills : </p>
                                <p>{job.skills.split(" ")}</p>
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
                        <h3 className="text-xl font-bold">About the job</h3>

                        <div>
                            <div className="mt-4">
                                <h4 className="font-bold">Description</h4>
                                <p className="text-sm">{job.description}</p>
                            </div>
                        </div>
                    </div>


                    <div className="mt-3 p-4 border rounded">
                        <h3 className="font-bold text-xl">About the company</h3>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>{job.companyName} Profile Photo</AvatarFallback>
                                </Avatar>
                                <p>{job.companyName}</p>
                            </div>

                            <Button size={'sm'} variant={'outline'}>Follow</Button>
                        </div>

                        <p className="text-sm mt-4">{job.companyDetails}</p>
                    </div>
                </section>
            ))}

        </div>
    )
}
