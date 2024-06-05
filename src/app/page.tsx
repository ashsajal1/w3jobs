import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookmarkIcon, SunIcon } from "lucide-react";

export default function page() {
  return (
    <div>
      <nav className="p-4 fixed top-0 w-full border-b flex justify-between items-center">
        <div className="flex items-center gap-4">
          <p className="font-bold text-2xl">W3Jobs</p>
          <form className="flex items-center gap-2">
            <Input type="text" placeholder="react job, angular job" />
            <Button>Search</Button>
          </form>
        </div>

        <div className="flex items-center gap-2">
          <Button size={'icon'} className="rounded-full" variant={'ghost'}>
            <BookmarkIcon />
          </Button>
          <Button size={'icon'} className="rounded-full" variant={'ghost'}>
            <SunIcon />
          </Button>
          <Avatar className="ml-4">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </div>
  )
}
