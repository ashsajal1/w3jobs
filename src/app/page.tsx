import JobCard from "@/components/partials/job-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Bookmark, Brain, BriefcaseBusinessIcon, Building, EyeIcon, ShareIcon } from "lucide-react";

export default function page() {
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

            <section className="w-full border hidden md:flex md:flex-col p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <p>Company name</p>
                    </div>
                    <div>
                        <Bookmark />
                    </div>
                </div>

                <div>
                    <h2 className="font-bold text-2xl mt-4">React Developer</h2>
                    <div className="flex items-center gap-2 text-[12px]">
                        <span>United States</span>
                        <span>2 days ago</span>
                        <span>12 Applicants</span>
                    </div>
                </div>

                <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <BriefcaseBusinessIcon />
                        <div className="flex items-center gap-2">
                            <p>Remote</p>
                            <p>Contract</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Building />
                        <div className="flex items-center gap-2">
                            <p>100 employees</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Brain />
                        <div className="flex items-center gap-2">
                            <p>Skills : </p>
                            <p>React</p>
                            <p>Angular</p>
                            <p>Vue</p>
                            <p>NextJs</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
