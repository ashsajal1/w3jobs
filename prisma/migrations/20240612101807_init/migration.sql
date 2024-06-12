-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "companyDetails" TEXT,
    "minSalary" INTEGER NOT NULL,
    "maxSalary" INTEGER NOT NULL,
    "totalApplicants" INTEGER NOT NULL,
    "skills" TEXT NOT NULL,
    "url" TEXT,
    "employeesQuantity" INTEGER,
    "jobType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);
