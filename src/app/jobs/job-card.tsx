import { EyeIcon, Bookmark } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import Link from "next/link";
import { JobCardProps } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

export default function JobCard({ job }: JobCardProps) {
    return (
        <div className="flex items-start gap-4 border p-2">
            <Avatar className="ml-4">
                <AvatarImage src={job.url || ""} alt={job.companyName} />
                <AvatarFallback>{job.companyName.charAt(0)}</AvatarFallback>
            </Avatar>

            <div>
                <div className="flex items-center gap-2">
                    <h3 className="font-bold text-lg">{job.title}</h3>
                    {job.isAcceptingApplication && (
                        <Badge variant={'secondary'}>Actively recruiting</Badge>
                    )}
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
                    {job.experience && (
                        <>
                            <Separator orientation="vertical" />
                            <p className="text-sm font-light text-slate-600">
                                ${job.experience}
                            </p>
                        </>
                    )}
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