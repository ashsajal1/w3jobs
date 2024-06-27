import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { countries } from 'countries-list'
const countryList = Object.entries(countries).map(([code, country]) => ({
    code: code,
    name: country.name,
    label: `${country.name} (${country.native})`
}));
import { auth } from '@clerk/nextjs/server'

export default function page() {
    const { userId } = auth();
    const experiences = ['Enter level', 'Mid level', 'Senior']
    const workType = ['Remote', 'Onsite', 'Hybrid']

    const handleForm = async (formData: FormData) => {
        "use server"
        try {
            const title = formData.get('title');
            const skills = formData.get('skills');
            const country = formData.get('country');
            const jobType = formData.get('jobType');
            const description = formData.get('description');
            const minSalary = formData.get('minSalary');
            const maxSalary = formData.get('maxSalary');
            const companyName = formData.get('companyName');
            const companyDetails = formData.get('companyDetails');
            const url = formData.get('url');

            const newJob = await prisma.job.create({
                data: {
                    title: title as string,
                    skills: skills as string,
                    country: country as string,
                    jobType: jobType as string,
                    description: description as string,
                    minSalary: parseInt((minSalary as string)) as number,
                    maxSalary: parseInt((maxSalary as string)) as number,
                    url: url as string,
                    totalApplicants: 0,
                    authorId: userId || "1234",
                    companyName: companyName as string,
                    companyDetails: companyDetails as string,
                },
            });

            revalidatePath("/jobs")
        } catch (error) {
            console.log("Error is : ", error)
            throw new Error('Failed to create job entry.');
        }
    };

    return (
        <div className="p-4">
            <form action={handleForm}>
                <h1 className="text-4xl font-bold mb-4">Create a job post</h1>

                <div>
                    <Label>Job title</Label>
                    <Input required name='title' placeholder='Title eg. Frontend Dev, Fullstack web dev, Data Engineer' />
                </div>

                <section className="md:flex md:items-center md:justify-between md:gap-6">
                    <section className="flex md:flex-row flex-col items-center gap-4">
                        <div className="flex w-full items-center gap-4">
                            <div className="mt-4 w-full">
                                <Label>Select Country</Label>
                                <Select required name="country">
                                    <SelectTrigger className="w-full md:w-[180px]">
                                        <SelectValue placeholder="Country" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Country</SelectLabel>
                                            <SelectItem value="United States">United States</SelectItem>

                                            {countryList.map(country => (
                                                <SelectItem key={country.code} value={country.name}>{country.label}</SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="mt-4 w-full">
                                <Label>Select Experience</Label>
                                <Select required name='experience'>
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
                            <Select required name='jobType'>
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
                            <Input name='minSalary' type="number" placeholder="Eg. 40000, 80000" />
                        </div>
                        <div className="mt-4 w-full md:w-auto">
                            <Label>Enter maximum salary in USD</Label>
                            <Input name='maxSalary' type="number" placeholder="Eg. 100000, 260000" />
                        </div>
                    </section>
                </section>


                {/* Skills  */}
                <section className="mt-3">
                 <Label>Enter required skill </Label>
                    <Input name="skills" placeholder="Skills eg, Java, React, Angular" />
                </section>

                {/* Company details */}
                <section className="mt-4 w-full">
                    <h2 className="text-xl font-bold">Company Info</h2>
                    <div className="flex flex-col items-center gap-4 w-full">
                        <div className="w-full md:flex md:items-center md:gap-4">
                            <div className="mt-4 w-full">
                                <Label>Enter Company name</Label>
                                <Input className="w-full" name='companyName' type="text" placeholder="Eg. Google, Amazon" />
                            </div>

                            <div className="mt-4 w-full">
                                <Label>Enter Job url</Label>
                                <Input className="w-full" name='url' type="text" placeholder="Eg. https://linkedin.com/jobs/xxxx" />
                            </div>
                        </div>
                        <div className="w-full">
                            <Label>Enter Company description</Label>
                            <Textarea className="w-full" name='companyDetails' placeholder="Eg. Google is a search engine. etc..." />
                        </div>
                    </div>
                </section>

                <div className="mt-4">
                    <Label>Job description</Label>
                    <Textarea required name='description' placeholder="Job description" />
                </div>

                <Button className="mt-4 w-full">Submit</Button>
            </form>
        </div>
    )
}
