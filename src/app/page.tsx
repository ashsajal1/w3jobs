import JobCard from "@/components/partials/job-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Bookmark, Brain, BriefcaseBusinessIcon, Building, Ellipsis, EyeIcon, MousePointerClick, ShareIcon } from "lucide-react";

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
                        <Button variant={'ghost'} size={'icon'}>
                            <Ellipsis />
                        </Button>
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
                            <h4 className="font-bold">Role Description</h4>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione pariatur hic, eveniet animi adipisci molestias ad quos aut ex quaerat fugiat ipsa sequi accusamus? Veritatis eaque adipisci consequatur veniam eos!</p>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-bold">Qualification</h4>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione pariatur hic, eveniet animi adipisci molestias ad quos aut ex quaerat fugiat ipsa sequi accusamus? Veritatis eaque adipisci consequatur veniam eos!</p>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-bold">Your work</h4>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione pariatur hic, eveniet animi adipisci molestias ad quos aut ex quaerat fugiat ipsa sequi accusamus? Veritatis eaque adipisci consequatur veniam eos!</p>
                        </div>
                    </div>
                </div>


                <div className="mt-3 p-4 border rounded">
                    <h3 className="font-bold text-xl">About the company</h3>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <p>Company name</p>
                        </div>

                        <Button size={'sm'} variant={'outline'}>Follow</Button>
                    </div>

                    <p className="text-sm mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos quae sapiente doloribus numquam vero natus recusandae consequuntur accusamus, dignissimos repellat laudantium eum asperiores inventore velit. Adipisci asperiores blanditiis numquam impedit.</p>
                </div>
            </section>

        </div>
    )
}
