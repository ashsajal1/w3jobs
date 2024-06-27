export interface Job {
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

export interface JobCardProps {
    job: Job;
}