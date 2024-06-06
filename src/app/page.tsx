import JobCard from "@/components/partials/job-card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Bookmark, EyeIcon } from "lucide-react";

export default function page() {
  return (
    <div className="flex w-full justify-between">
      <section className="w-full border">
        <div className="w-full p-4">
          12 results found
        </div>

        <div className="flex flex-col">
          <JobCard />
        </div>
      </section>

      <section className="w-full border hidden md:flex">
        <p>Company name</p>
      </section>

    </div>
  )
}
