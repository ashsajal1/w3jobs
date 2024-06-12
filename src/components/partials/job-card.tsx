import { EyeIcon, Bookmark } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Link from "next/link";

interface Job {
    id: number;
    title: string;
    description: string;
    authorId: string;
    country: string;
    companyName: string;
    companyDetails: string | null;
    minSalary: number;
    maxSalary: number;
    totalApplicants: number;
    skills: string;
    url: string | null;
    employeesQuantity: number | null;
    jobType: string;
    createdAt: Date;
    updatedAt: Date;
}


interface JobCardProps {
    job: Job;
}

export default function JobCard({ job }: JobCardProps) {
    return (
        <div className="flex items-start gap-4 border p-2">
            <Avatar className="ml-4">
                <AvatarImage src={job.url || ""} alt={job.companyName} />
                <AvatarFallback>{job.companyName.charAt(0)}</AvatarFallback>
            </Avatar>

            <div>
                <h3 className="font-bold text-lg">{job.title}</h3>
                <p className="font-light text-slate-600">{job.companyName}</p>
                <div className="flex items-center gap-2">
                    <p className="text-sm font-light text-slate-600">
                        {job.country} <span>({job.jobType})</span>
                    </p>
                    <Separator orientation="vertical" />
                    <p className="text-sm font-light text-slate-600">
                        ${job.minSalary} - ${job.maxSalary}
                    </p>
                </div>

                <div className="flex items-center gap-2 mt-4">
                    <Link href={`/jobs?id=${job.id}`}>
                        <Button size="sm">
                            <EyeIcon className="size-4 mr-1" />
                            <span>View</span>
                        </Button>
                    </Link>
                    <Button size="sm" variant="outline">
                        <Bookmark className="size-4 mr-1" />
                        <span>Save</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}