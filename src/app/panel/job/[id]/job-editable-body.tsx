import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bookmark, Brain, BriefcaseBusinessIcon, Building, Ellipsis, MousePointerClick } from "lucide-react";
import { timeAgo } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Job } from "@/lib/types";
import { Input } from '@/components/ui/input';

import {
    updateCompanyName,
    updateTitle,
    updateCountry,
    updateSalary,
    updateEmployeesQuantity,
    updateSkills,
    updateDescription,
    updateCompanyDetails
} from './actions';
import { Textarea } from '@/components/ui/textarea';

type JobPageBodyProps = {
    selectedJob: Job;
};

const JobEditableBody: React.FC<JobPageBodyProps> = ({ selectedJob }) => {
    const [isEditingCompanyName, setIsEditingCompanyName] = useState(false);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [isEditingCountry, setIsEditingCountry] = useState(false);
    const [isEditingSalary, setIsEditingSalary] = useState(false);
    const [isEditingEmployeesQuantity, setIsEditingEmployeesQuantity] = useState(false);
    const [isEditingSkills, setIsEditingSkills] = useState(false);
    const [isEditingDescription, setIsEditingDescription] = useState(false);
    const [isEditingCompanyDetails, setIsEditingCompanyDetails] = useState(false);

    const [companyName, setCompanyName] = useState(selectedJob.companyName);
    const [title, setTitle] = useState(selectedJob.title);
    const [country, setCountry] = useState(selectedJob.country);
    const [minSalary, setMinSalary] = useState(selectedJob.minSalary);
    const [maxSalary, setMaxSalary] = useState(selectedJob.maxSalary);
    const [employeesQuantity, setEmployeesQuantity] = useState(selectedJob.employeesQuantity);
    const [skills, setSkills] = useState(selectedJob.skills);
    const [description, setDescription] = useState(selectedJob.description);
    const [companyDetails, setCompanyDetails] = useState(selectedJob.companyDetails);

    const handleBlur = async (field: string) => {
        switch (field) {
            case 'companyName':
                await updateCompanyName(selectedJob.id, companyName);
                setIsEditingCompanyName(false);
                break;
            case 'title':
                await updateTitle(selectedJob.id, title);
                setIsEditingTitle(false);
                break;
            case 'country':
                await updateCountry(selectedJob.id, country);
                setIsEditingCountry(false);
                break;
            case 'salary':
                await updateSalary(selectedJob.id, minSalary, maxSalary);
                setIsEditingSalary(false);
                break;
            case 'employeesQuantity':
                await updateEmployeesQuantity(selectedJob.id, employeesQuantity || 0);
                setIsEditingEmployeesQuantity(false);
                break;
            case 'skills':
                await updateSkills(selectedJob.id, skills);
                setIsEditingSkills(false);
                break;
            case 'description':
                await updateDescription(selectedJob.id, description);
                setIsEditingDescription(false);
                break;
            case 'companyDetails':
                await updateCompanyDetails(selectedJob.id, companyDetails || ' Default');
                setIsEditingCompanyDetails(false);
                break;
            default:
                break;
        }
    };

    return (
        <section className="w-full border p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>{companyName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className='flex gap-2 items-center'>
                        {isEditingCompanyName ? (
                            <Input
                                type="text"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                onBlur={() => handleBlur('companyName')}
                            />
                        ) : (
                            <p>{companyName}</p>
                        )}
                        <Button variant="outline" size="icon" onClick={() => setIsEditingCompanyName(!isEditingCompanyName)}>Edit</Button>
                    </div>
                </div>
                <div>
                    <Button variant="ghost" size="icon">
                        <Ellipsis />
                    </Button>
                </div>
            </div>

            <div>
                <h2 className="font-bold text-2xl mt-4">
                    {isEditingTitle ? (
                        <Input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            onBlur={() => handleBlur('title')}
                        />
                    ) : (
                        title
                    )}
                </h2>
                <Button variant="outline" size="icon" onClick={() => setIsEditingTitle(!isEditingTitle)}>Edit</Button>
                <div className="flex items-center gap-2 text-[12px]">
                    <span>
                        {isEditingCountry ? (
                            <Input
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                onBlur={() => handleBlur('country')}
                            />
                        ) : (
                            country
                        )}
                    </span>
                    <Button variant="outline" size="icon" onClick={() => setIsEditingCountry(!isEditingCountry)}>Edit</Button>
                    <span>{timeAgo(selectedJob.createdAt)}</span>
                    <span>{selectedJob.totalApplicants} Applicants</span>
                </div>
            </div>

            <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <BriefcaseBusinessIcon />
                    <div className="flex items-center gap-2">
                        {isEditingSalary ? (
                            <>
                                <Input
                                    type="number"
                                    value={minSalary}
                                    onChange={(e) => setMinSalary(Number(e.target.value))}
                                    onBlur={() => handleBlur('salary')}
                                />
                                <span> - </span>
                                <Input
                                    type="number"
                                    value={maxSalary}
                                    onChange={(e) => setMaxSalary(Number(e.target.value))}
                                    onBlur={() => handleBlur('salary')}
                                />
                            </>
                        ) : (
                            <p>
                                <span>${minSalary}</span>
                                <span> - </span>
                                <span>${maxSalary}</span>
                            </p>
                        )}
                        <Button variant="outline" size="icon" onClick={() => setIsEditingSalary(!isEditingSalary)}>Edit</Button>
                        <Badge>{selectedJob.jobType}</Badge>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Building />
                    <div className="flex items-center gap-2">
                        {isEditingEmployeesQuantity ? (
                            <Input
                                type="text"
                                value={employeesQuantity || 0}
                                onChange={(e) => setEmployeesQuantity(parseInt(e.target.value))}
                                onBlur={() => handleBlur('employeesQuantity')}
                            />
                        ) : (
                            <p>{employeesQuantity || '0-10'} employees</p>
                        )}
                        <Button variant="outline" size="icon" onClick={() => setIsEditingEmployeesQuantity(!isEditingEmployeesQuantity)}>Edit</Button>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div>
                        <Brain />
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex-wrap flex gap-2">
                            {isEditingSkills ? (
                                <Input
                                    type="text"
                                    value={skills}
                                    onChange={(e) => setSkills(e.target.value)}
                                    onBlur={() => handleBlur('skills')}
                                />
                            ) : (
                                skills.split(" ").map(skill => (
                                    <Badge variant="secondary" key={skill}>{skill}</Badge>
                                ))
                            )}
                        </div>
                        <Button variant="outline" size="icon" onClick={() => setIsEditingSkills(!isEditingSkills)}>Edit</Button>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2 mt-4">
                <Button size="sm">
                    <MousePointerClick className="size-4 mr-1" />
                    <span>Apply</span>
                </Button>
                <Button size="sm" variant="outline">
                    <Bookmark className="size-4 mr-1" />
                    <span>Save</span>
                </Button>
            </div>

            <div className="mt-4">
                <h3 className="text-xl font-bold">About the Job</h3>
                <div>
                    <div className="mt-4">
                        <h4 className="font-bold">Description</h4>
                        {isEditingDescription ? (
                            <Textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                onBlur={() => handleBlur('description')}
                            />
                        ) : (
                            <p className="text-sm">{description}</p>
                        )}
                        <Button variant="outline" size="icon" onClick={() => setIsEditingDescription(!isEditingDescription)}>Edit</Button>
                    </div>
                </div>
            </div>

            <div className="mt-3 p-4 border rounded">
                <h3 className="font-bold text-xl">About the company</h3>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback>{companyName} Profile Photo</AvatarFallback>
                        </Avatar>
                        {isEditingCompanyDetails ? (
                            <Input
                                type="text"
                                value={companyDetails || ' '}
                                onChange={(e) => setCompanyDetails(e.target.value)}
                                onBlur={() => handleBlur('companyDetails')}
                            />
                        ) : (
                            <p>{companyDetails}</p>
                        )}
                        <Button variant="outline" size="icon" onClick={() => setIsEditingCompanyDetails(!isEditingCompanyDetails)}>Edit</Button>
                    </div>
                    <Button size="sm" variant="outline">Follow</Button>
                </div>

                <p className="text-sm mt-4">{companyDetails}</p>
            </div>
        </section>
    );
}

export default JobEditableBody;
