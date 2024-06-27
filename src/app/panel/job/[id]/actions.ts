"use server";

import prisma from "@/lib/prisma";

export const getJob = async (id: number) => {
  const job = await prisma.job.findUnique({
    where: {
      id: id,
    },
  });

  return job;
};

export const updateCompanyName = async (id: number, companyName: string) => {
    return await prisma.job.update({
        where: { id },
        data: { companyName }
    });
};

export const updateTitle = async (id: number, title: string) => {
    return await prisma.job.update({
        where: { id },
        data: { title }
    });
};

export const updateCountry = async (id: number, country: string) => {
    return await prisma.job.update({
        where: { id },
        data: { country }
    });
};

export const updateSalary = async (id: number, minSalary: number, maxSalary: number) => {
    return await prisma.job.update({
        where: { id },
        data: { minSalary, maxSalary }
    });
};

export const updateEmployeesQuantity = async (id: number, employeesQuantity: string) => {
    return await prisma.job.update({
        where: { id },
        data: { employeesQuantity: parseInt(employeesQuantity) }
    });
};

export const updateSkills = async (id: number, skills: string) => {
    return await prisma.job.update({
        where: { id },
        data: { skills }
    });
};

export const updateDescription = async (id: number, description: string) => {
    return await prisma.job.update({
        where: { id },
        data: { description }
    });
};

export const updateCompanyDetails = async (id: number, companyDetails: string) => {
    return await prisma.job.update({
        where: { id },
        data: { companyDetails }
    });
};
