"use client"

import { EyeIcon, Pencil } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import Link from "next/link";
import DeleteJob from "./delete-job";
import { JobCardProps } from "@/lib/types";

export default function JobUpdateCard({ job }: JobCardProps) {

    return (
        <div className="flex items-start gap-4 border p-2">
            <Avatar className="ml-4">
                <AvatarImage src={job.url || ""} alt={job.companyName} />
                <AvatarFallback>{job.companyName.charAt(0)}</AvatarFallback>
            </Avatar>

            <div>
                <div className="flex items-center w-full">
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    <Link href={`/panel/job/${job.id}`}>
                        <Button size="sm" variant="ghost">
                            <Pencil className="size-4 mr-1" />
                        </Button>
                    </Link>
                </div>
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

                <div className="flex items-center w-full gap-2">
                    <Link href={`/panel/job/${job.id}`}>
                        <Button size="sm">
                            <EyeIcon className="size-4 mr-1" />
                            <span>View</span>
                        </Button>
                    </Link>

                    <DeleteJob id={job.id} />
                </div>
            </div>
        </div>
    );
}