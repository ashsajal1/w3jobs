import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function page() {
    const experiences = ['Enter level', 'Mid level', 'Senior']
    const workType = ['Remote', 'Onsite', 'Hybrid']
    return (
        <div className="p-4">
            <h1 className="text-4xl font-bold mb-4">Create a job post</h1>

            <div>
                <Label>Job title</Label>
                <Input placeholder='Title eg. Frontend Dev, Fullstack web dev, Data Engineer' />
            </div>

            <section className="md:flex md:items-center md:justify-between md:gap-6">
                <section className="flex md:flex-row flex-col items-center gap-4">
                    <div className="flex w-full items-center gap-4">
                        <div className="mt-4 w-full">
                            <Label>Select Country</Label>
                            <Select>
                                <SelectTrigger className="w-full md:w-[180px]">
                                    <SelectValue placeholder="Country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Country</SelectLabel>
                                        <SelectItem value="United States">United States</SelectItem>
                                        <SelectItem value="Bangladesh">Bangladesh</SelectItem>

                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="mt-4 w-full">
                            <Label>Select Experience</Label>
                            <Select>
                                <SelectTrigger className="w-full md:w-[180px]">
                                    <SelectValue placeholder="Experience" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Experience</SelectLabel>
                                        {
                                            experiences.map((experience: string) => (
                                                <SelectItem key={experience} value={experience}>{experience}</SelectItem>

                                            ))
                                        }

                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="mt-4 w-full">
                        <Label>Select Work Type</Label>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Remote" />
                            </SelectTrigger>
                            <SelectContent className="w-full">
                                <SelectGroup>
                                    <SelectLabel>Work type</SelectLabel>
                                    {
                                        workType.map((wt: string) => (
                                            <SelectItem key={wt} value={wt}>{wt}</SelectItem>

                                        ))
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                </section>

                <section className="flex items-center gap-4 md:w-auto w-full">
                    <div className="mt-4 w-full md:w-auto">
                        <Label>Enter minimum salary in USD</Label>
                        <Input type="number" placeholder="Eg. 40000, 80000" />
                    </div>
                    <div className="mt-4 w-full md:w-auto">
                        <Label>Enter maximum salary in USD</Label>
                        <Input type="number" placeholder="Eg. 100000, 260000" />
                    </div>
                </section>
            </section>

            <div className="mt-4">
                <Label>Job description</Label>
                <Textarea placeholder="Job description" />
            </div>

            <Button className="mt-4 w-full">Submit</Button>
        </div>
    )
}
